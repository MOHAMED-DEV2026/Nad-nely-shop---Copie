<template>
  <div class="hero">

    <img
      src="image"
      alt="Hero"
      class="hero-image"
    />

    <div class="hero-content">
     
      <RouterLink
        to="/products"
        class="btn btn-light bg-success"
      >
        Clic Pour Voir Nos Produits
      </RouterLink>
    </div>

  </div>
</template>

<script setup>
  import image from '../assets/hero-banner.JPG'
</script>

