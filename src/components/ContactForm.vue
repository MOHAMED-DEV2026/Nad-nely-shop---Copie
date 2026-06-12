<template>

<form @submit.prevent="submitForm">

    <div class="mb-3">

        <label>Nom</label>

        <input
            type="text"
            class="form-control"
            v-model="name"
        >

    </div>

    <div class="mb-3">

        <label>Email</label>

        <input
            type="email"
            class="form-control"
            v-model="email"
        >

    </div>

    <div class="mb-3">

        <label>Message</label>

        <textarea
            class="form-control"
            v-model="message"
        ></textarea>

    </div>

    <button class="btn btn-primary">
        Envoyer
    </button>

</form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {

    if (
        !name.value ||
        !email.value ||
        !message.value
    ) {
        alert('Veuillez remplir tous les champs')
        return
    }

    alert('Message envoyé')
}
</script>