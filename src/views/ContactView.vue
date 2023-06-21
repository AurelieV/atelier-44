<template>
  <section class="max-w-[800px] mx-auto pt-4">
    <h2 class="text-5xl font-hand">Contact</h2>
    <p class="mt-2">
      Pour toute demande d'information ou pour passer une commande, n'hésitez pas à me contacter.
      Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
    </p>

    <form class="flex flex-col mt-8">
      <div class="flex gap-5">
        <div class="flex flex-col">
          <label for="nom">Nom*</label>
          <input class="mt-1" type="text" id="nom" name="nom" required />
        </div>
        <div class="flex flex-col">
          <label for="email">Email*</label>
          <input type="email" class="mt-1" id="email" name="email" required />
        </div>
      </div>
      <label for="message" class="mt-3">Message :</label>
      <textarea class="mt-1" id="message" name="message" rows="5" required></textarea>
      <button type="submit" class="mx-auto mt-4 btn -primary-on-cream">Envoyer</button>
    </form>
  </section>
</template>

<script lang="ts">
import { useHead } from '@unhead/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  setup() {
    useHead({
      title: 'Atelier 44 - Sacs',
      meta: [
        {
          name: 'description',
          content:
            "Découvrez les magnifiques sacs faits main créés par IVP à l'Atelier 44. Chaque sac est unique et réalisé avec passion. Explorez notre collection de sacs dans différents styles, tailles et couleurs."
        },
        { name: 'robots', content: 'noindex, nofollow' }
      ]
    })
  }
})
</script>
