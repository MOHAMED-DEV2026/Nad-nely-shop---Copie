
<template>
<div v-if="product">
  <h1>{{ product.title }}</h1>

  <img :src="product.thumbnail" class="img-fluid mb-3">

  <p>{{ product.description }}</p>

  <h3>{{ product.price }} €</h3>

  <button class="btn btn-success" @click="addProduct">
    Ajouter au panier
  </button>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart.js'

const route = useRoute()
const product = ref(null)

const cartStore = useCartStore()

onMounted(async () => {
  const response = await fetch(
    `https://dummyjson.com/products/${route.params.id}`
  )

  product.value = await response.json()
})

function addProduct() {
  cartStore.addToCart(product.value)
}
</script>