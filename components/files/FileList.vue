<template>
  <v-data-table
    :headers="headers"
    :items="files"
    :loading="isLoading"
  >
    <template #[`item.size`]="{ item }">
      {{ formatFileSize(item.size) }}
    </template>

    <template #[`item.actions`]="{ item }">
      <file-actions :file="item" />
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'
import FileActions from './FileActions.vue'

export default {
  name: 'FileList',
  components: {
    FileActions
  },
  data () {
    return {
      headers: [
        { text: 'Dosya Adı', value: 'fileName' },
        { text: 'Boyut', value: 'size' },
        { text: 'Tip', value: 'contentType' },
        { text: 'İşlemler', value: 'actions', sortable: false }
      ]
    }
  },
  computed: {
    ...mapGetters({
      files: 'files/getFiles',
      isLoading: 'files/isLoading'
    })
  },
  methods: {
    formatFileSize (bytes) {
      if (bytes === 0) { return '0 Bytes' }
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }
  }
}
</script>
