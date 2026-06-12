<template>
  <div class="d-flex flex-column min-vh-100">

    <NavbarComponent />

    <main class="flex-grow-1">
      <RouterView />
    </main>

    <FooterComponent />

  </div>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import HeroComponent from './components/HeroComponent.vue';
</script>