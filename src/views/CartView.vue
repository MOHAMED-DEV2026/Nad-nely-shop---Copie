<template>

<div class="container mt-4 background-color">

    <h2>Panier</h2>

    <div v-if="cart.cartItems.length">

        <CartItem
            v-for="item in cart.cartItems"
            :key="item.id"
            :item="item"
        />

        <CartSummary />

    </div>

    <div v-else>

        Votre panier est vide.

    </div>

</div>

</template>

<script setup>
import { useCartStore } from '../stores/cart'

import CartItem from '../components/CartItem.vue'
import CartSummary from '../components/CartSummary.vue'

const cart = useCartStore()
</script>