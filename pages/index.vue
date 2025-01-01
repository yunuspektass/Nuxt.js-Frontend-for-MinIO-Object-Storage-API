<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="text-center pa-6">
        <h1 class="text-h4 mb-4">
          Hoş Geldiniz
        </h1>
        <p class="mb-4">
          Dosya yönetim sistemine hoş geldiniz. Dosyalarınızı güvenle saklayın ve yönetin.
        </p>
        <v-btn
          color="primary"
          x-large
          to="/files"
        >
          Dosyalarıma Git
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
