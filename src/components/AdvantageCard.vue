<template>
  <div class="col-md-4 mb-4">
    <div class="card border-4 h-100">
      <div class="card-body text-center bg-secondary">
        <h5>{{ title }}</h5>

        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>