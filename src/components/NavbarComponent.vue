<template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container">

      <RouterLink
        class="navbar-brand"
        to="/"
      >
        NAD-NELY BOUTIQUE
      </RouterLink>

      <div class="navbar-nav ms-auto">

        <RouterLink class="nav-link" to="/">
          Accueil
        </RouterLink>

        <RouterLink class="nav-link" to="/products">
          Produits
        </RouterLink>

        <RouterLink class="nav-link" to="/contact">
          Contact
        </RouterLink>

        <RouterLink
          class="nav-link cart-link"
          to="/cart"
        >
          🛒 Panier

          <!-- Nombre d'articles -->
          <span
            v-if="cart.cartCount > 0"
            class="badge bg-danger ms-1"
          >
            {{ cart.cartCount }}
          </span>

          <!-- Point rouge -->
          <span
            v-if="cart.cartCount > 0"
            class="cart-dot"
          ></span>
        </RouterLink>

      </div>

    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '../stores/cart.js'

const cart = useCartStore()
</script>

