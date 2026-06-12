<template>
  <div>
    <HeroComponent />

    <div class="container mt-3 text-center">
      <h3>Pourquoi nous choisir</h3>
      <div class="row">
        <AdvantageCard
          v-for="advantage in advantages"
          :key="advantage.title"
          :title="advantage.title"
          :description="advantage.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroComponent from '../components/HeroComponent.vue'
import AdvantageCard from '../components/AdvantageCard.vue'

const advantages = [
  
  {
    title: 'Livraison rapide',
    description: 'Recevez vos produits de haut qualité rapidement et fiable.'
  },
  {
    title: 'Paiement sécurisé',
    description: 'Transactions 100% sécurisées.'
  },
  {
    title: 'Service client',
    description: 'Une équipe disponible pour vous aider accomplir vos mission.'
  }
]
</script>