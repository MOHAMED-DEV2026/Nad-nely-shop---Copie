<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>Contactez-Nous</h1>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <section class="info-section">
          <h2>Informations</h2>
          <div class="contact-item">
            <strong>Email:</strong>
            <p>mozerbensaid@gmail.com</p>
          </div>
          <div class="contact-item">
            <strong>Télephone:</strong>
            <p>+262639714932</p>
            <p>+262692886257</p>
          </div>
          <div class="contact-item">
            <strong>Adresse:</strong>
            <p>Nad-Nely Boutique<br />
            39 Rue du commerce<br />
            MAMOUDZOU-MAYOTTE</p>
          </div>
          <div class="contact-item">
            <strong>Horaires d'Ouverture:</strong>
            <p>Lundi - Vendredi: 09:00 - 18:00<br />
            Samedi: 10:00 - 17:00<br />
            Dimanche: Fermé</p>
          </div>
        </section>
      </div>

      <div class="contact-form">
        <section class="form-section">
          <h2>Envoyer nous un message</h2>
          <form @submit.prevent="envoyerMessage">
            <div class="form-group">
              <label for="nom">Nom:</label>
              <input
                id="nom"
                v-model="formulaire.nom"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                id="email"
                v-model="formulaire.email"
                type="email"
                class="form-control"
                required
              />
            </div>

            <div class="form-group">
              <label for="sujet">Sujet:</label>
              <input
                id="sujet"
                v-model="formulaire.sujet"
                type="text"
                class="form-control"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Message:</label>
              <textarea
                id="message"
                v-model="formulaire.message"
                class="form-control"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-secondary">Envoyer</button>
          </form>

          <div v-if="messageSent" class="alert alert-success mt-3">
            Votre message est belle et bien envoyé avec succès.
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formulaire = ref({
  nom: "",
  email: "",
  sujet: "",
  message: "",
});

const messageSent = ref(false);

const envoyerMessage = () => {
  messageSent.value = true;
  formulaire.value = {
    nom: "",
    email: "",
    sujet: "",
    message: "",
  };

  setTimeout(() => {
    messageSent.value = false;
  }, 3000);
};
</script>

