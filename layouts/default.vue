<template>
  <v-app>
    <the-navbar />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <the-footer />
  </v-app>
</template>

<script>
import TheNavbar from '~/components/layout/TheNavbar.vue'
import TheFooter from '~/components/layout/TheFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>
