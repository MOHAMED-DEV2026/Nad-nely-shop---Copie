import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {

    state: () => ({
        cartItems: []
    }),

    actions: {

        addToCart(product) {

            const item = this.cartItems.find(
                item => item.id === product.id
            )

            if (item) {
                item.quantity++
            } else {
                this.cartItems.push({
                    ...product,
                    quantity: 1
                })
            }
        },

        removeFromCart(id) {
            this.cartItems = this.cartItems.filter(
                item => item.id !== id
            )
        },

        clearCart() {
            this.cartItems = []
        }
    },

    getters: {

        cartCount: (state) =>
            state.cartItems.reduce(
                (total, item) => total + item.quantity,
                0
            ),

        cartTotal: (state) =>
            state.cartItems.reduce(
                (total, item) =>
                    total + item.price * item.quantity,
                0
            )
    }
})