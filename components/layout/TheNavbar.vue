<template>
  <v-app-bar app dark>
    <v-toolbar-title>Dosya Yönetim Sistemi</v-toolbar-title>

    <v-spacer />

    <v-btn text to="/">
      <v-icon left>
        mdi-home
      </v-icon>
      Ana Sayfa
    </v-btn>

    <v-btn text to="/files">
      <v-icon left>
        mdi-folder
      </v-icon>
      Dosyalarım
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>
