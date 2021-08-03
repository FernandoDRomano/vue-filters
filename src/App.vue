<template>
  <div id="app">
    <layout>
      <template v-slot:header>
        <header-app></header-app>
      </template>
      <template v-slot:main>
        <main-app></main-app>
      </template>
      <template v-slot:footer>
        <footer-app></footer-app>
      </template>
    </layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout/Layout.vue'
import HeaderApp from '@/components/Partials/Header.vue'
import MainApp from '@/components/Partials/Main.vue'
import FooterApp from '@/components/Partials/Foooter.vue'

export default {
  name: 'App',
  components: {
    Layout,
    HeaderApp,
    MainApp,
    FooterApp
  }
}
</script>