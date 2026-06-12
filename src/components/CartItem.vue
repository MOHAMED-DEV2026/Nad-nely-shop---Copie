<template>
  <div class="card mb-3">
    <div class="card-body">

      <div class="row align-items-center">

        <!-- Image -->
        <div class="col-md-2 text-center">
          <img
            :src="item.thumbnail"
            :alt="item.title"
            class="img-fluid rounded"
            style="max-height: 100px;"
          />
        </div>

        <!-- Informations -->
        <div class="col-md-7">
          <h5>{{ item.title }}</h5>

          <p class="mb-1">
            Prix : {{ item.price }} $
          </p>

          <p class="mb-0">
            Quantité : {{ item.quantity }}
          </p>
        </div>

        <!-- Actions -->
        <div class="col-md-3 text-end">
          <button
            class="btn btn-danger"
            @click="cart.removeFromCart(item.id)"
          >
            Supprimer
          </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

defineProps({
  item: Object
})

const cart = useCartStore()
</script>