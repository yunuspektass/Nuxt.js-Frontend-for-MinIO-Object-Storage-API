export const state = () => ({
  files: [],
  currentFile: null,
  loading: false,
  error: null
})

export const mutations = {
  SET_FILES (state, files) {
    state.files = files
  },
  SET_CURRENT_FILE (state, file) {
    state.currentFile = file
  },
  SET_LOADING (state, status) {
    state.loading = status
  },
  SET_ERROR (state, error) {
    state.error = error
  }
}

export const actions = {
  async fetchFiles ({ commit }) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.$get('/File')
      commit('SET_FILES', response)
    } catch (error) {
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async uploadFile ({ commit, dispatch }, { fileName, file }) {
    try {
      commit('SET_LOADING', true)
      const formData = new FormData()
      formData.append('file', file)
      formData.append('fileCreateDto.fileName', fileName)

      await this.$axios.$post('/File/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      await dispatch('fetchFiles')
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async downloadFile ({ commit }, { id, fileName }) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.$get(`/File/download/${id}`, {
        responseType: 'blob'
      })

      const blob = new Blob([response])
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async deleteFile ({ commit, dispatch }, id) {
    try {
      commit('SET_LOADING', true)
      await this.$axios.$delete(`/File/${id}`)
      await dispatch('fetchFiles')
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async updateFile ({ commit, dispatch }, { id, fileName }) {
    try {
      commit('SET_LOADING', true)
      await this.$axios.$put(`/File/${id}`, {
        id,
        fileName
      })
      await dispatch('fetchFiles')
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

export const getters = {
  getFiles: state => state.files,
  getCurrentFile: state => state.currentFile,
  isLoading: state => state.loading,
  getError: state => state.error
}
