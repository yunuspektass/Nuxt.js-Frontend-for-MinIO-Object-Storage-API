<template>
  <div class="d-flex">
    <v-btn
      small
      color="primary"
      class="mr-2"
      @click="downloadFile"
    >
      <v-icon left>
        mdi-download
      </v-icon>
      İndir
    </v-btn>
    <v-btn
      small
      color="error"
      @click="confirmDelete"
    >
      <v-icon left>
        mdi-delete
      </v-icon>
      Sil
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'FileActions',
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  methods: {
    downloadFile () {
      this.$store.dispatch('files/downloadFile', {
        id: this.file.id,
        fileName: this.file.fileName
      })
    },
    confirmDelete () {
      if (confirm('Dosyayı silmek istediğinize emin misiniz?')) {
        this.$store.dispatch('files/deleteFile', this.file.id)
      }
    }
  }
}
</script>
