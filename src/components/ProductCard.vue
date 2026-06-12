<template>

<div class="col-md-4 mb-4">

    <div class="card h-100 bg-secondary-subtle">

        <img
            :src="product.thumbnail"
            class="card-img-top"
        >

        <div class="card-body">

            <h5>
                {{ product.title }}
            </h5>

            <p>
                {{ product.price }} €
            </p>

            <RouterLink
                :to="`/products/${product.id}`"
                class="btn btn-dark me-2"
            >
                Détails
            </RouterLink>

            <button
                class="btn btn-primary"
                @click="$emit('add', product)"
            >
                Ajouter au panier
            </button>

        </div>

    </div>

</div>

</template>

<script setup>
defineProps({
    product: Object
})

defineEmits(['add'])
</script>