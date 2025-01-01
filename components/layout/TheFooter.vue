<template>
  <v-footer app dark padless>
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
        © {{ new Date().getFullYear() }} — <strong>Dosya Yönetim Sistemi</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
