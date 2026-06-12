<template>

<div class="card">

    <div class="card-body">

        <h2>
            {{ product.title }}
        </h2>

        <p>
            {{ product.description }}
        </p>

        <p>
            Prix : {{ product.price }} $
        </p>

        <p>
            Stock : {{ product.stock }}
        </p>

    </div>

</div>

</template>

<script setup>
defineProps({
    product: Object
})
</script>