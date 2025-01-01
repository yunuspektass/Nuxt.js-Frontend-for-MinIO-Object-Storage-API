<template>
  <div>
    <h1 class="text-h4 mb4">
      Dosyalarım
    </h1>
    <file-upload />
    <file-list />
  </div>
</template>

<script>
import FileUpload from '@/components/files/FileUpload.vue'
import FileList from '@/components/files/FileList.vue'

export default {
  name: 'FilesPage',
  components: {
    FileUpload,
    FileList
  },
  mounted () {
    this.$store.dispatch('files/fetchFiles')
  }
}
</script>
