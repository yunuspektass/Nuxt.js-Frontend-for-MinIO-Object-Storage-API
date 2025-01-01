<template>
  <v-card class="mb-4">
    <v-card-text>
      <v-file-input
        v-model="selectedFile"
        label="Dosya Seç"
        :loading="isLoading"
        show-size
        @change="handleFileUpload"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FileUpload',
  data () {
    return {
      selectedFile: null
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'files/isLoading'
    })
  },
  methods: {
    async handleFileUpload () {
      if (!this.selectedFile) { return }

      try {
        await this.$store.dispatch('files/uploadFile', {
          fileName: this.selectedFile.name,
          file: this.selectedFile
        })
        this.selectedFile = null
      } catch (error) {
        console.error('Yükleme hatası:', error)
      }
    }
  }
}
</script>
