<template>
  <div class="card">

    <div class="card-body">

      <h4>
        Total : {{ cart.cartTotal }} $
      </h4>

      <button
        class="btn btn-warning me-2"
        @click="cart.clearCart()"
      >
        Vider le panier
      </button>

      <button
        class="btn btn-success"
        @click="checkout"
        :disabled="cart.cartItems.length === 0"
      >
        Payer maintenant
      </button>

    </div>

  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart.js'

const cart = useCartStore()

function checkout() {
  alert(
    `Paiement effectué avec succès !\nMontant payé : ${cart.cartTotal} $`
  )

  cart.clearCart()
}
</script>