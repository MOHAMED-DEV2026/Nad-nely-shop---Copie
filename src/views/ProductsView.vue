<<template>
  <div class="container   mt-4 py-5">
    <h2 class="mb-4">Nos produits</h2>
    <!-- Boutons de navigation -->
    <div class="d-flex gap-2  mb-3">

      <button
        class="btn btn-secondary"
        @click="previousPage"
        :disabled="currentPage === 1"
      >
        Précédent
      </button>

      <button
        class="btn btn-primary"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Charger plus
      </button>

    </div>

    <!-- Produits -->
    <div v-if="loading" class="text-center">
      Chargement...
    </div>

    <div v-else class="row">

      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add="addProduct"
      />

    </div>

    <!-- Informations -->
    <p class="text-center mt-3">
      Page {{ currentPage }} sur {{ totalPages }}
    </p>

  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()

const products = ref([])
const loading = ref(false)

const currentPage = ref(1)
const productsPerPage = 3
const totalProducts = 30
const totalPages = Math.ceil(totalProducts / productsPerPage)

async function fetchProducts() {
  loading.value = true

  const skip = (currentPage.value - 1) * productsPerPage

  const response = await fetch(
    `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`
  )

  const data = await response.json()

  products.value = data.products

  loading.value = false
}

function nextPage() {
  if (currentPage.value < totalPages) {
    currentPage.value++
    fetchProducts()
  }
}

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--
    fetchProducts()
  }
}

function addProduct(product) {
  cart.addToCart(product)
}

onMounted(() => {
  fetchProducts()
})
</script>

