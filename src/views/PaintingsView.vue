<template>
  <section class="pt-8 pl-8 pr-5 text-xl bg-cream text-blue isolate">
    <div class="max-w-[1300px] grid grid-cols-[minmax(auto,_60ch)_auto] mx-auto gap-3 with-wave">
      <div class="flex flex-col">
        <h1 class="mb-4 text-5xl font-hand">Mes tableaux</h1>
        <p>
          Chacun de mes tableaux est le fruit d'une exploration artistique unique, où ma passion
          pour la peinture s'exprime librement. J'utilise principalement la technique du pouring,
          qui consiste à verser des couleurs acryliques sur la toile pour créer des effets fluides
          et dynamiques.
        </p>
        <p>
          Après le processus de pouring, j'ajoute des touches d'acrylique pour affiner les détails
          et apporter une dimension supplémentaire à chaque tableau. C'est ainsi que naissent des
          compositions riches en texture, en mouvement et en émotion.
        </p>
        <p>
          Sauf mentions contraires, mes tableaux sont disponibles à l'achat. Si vous souhaitez
          obtenir plus d'informations sur une œuvre en particulier, veuillez me contacter
          <router-link :to="{ name: 'contact' }">via le formulaire de contact</router-link>. Je
          serai ravie de répondre à vos questions et de vous fournir tous les détails nécessaires.
        </p>
      </div>
      <Starport port="paitings">
        <img src="@/assets/section_peinture.png" />
      </Starport>
    </div>
  </section>
</template>

<script lang="ts">
import { useHead } from '@unhead/vue'
import { defineComponent } from 'vue'
import { Starport } from 'vue-starport'

export default defineComponent({
  name: 'HomeView',
  components: { Starport },
  setup() {
    useHead({
      title: 'Atelier 44 - Tableaux',
      meta: [
        {
          name: 'description',
          content:
            "Découvrez les tableaux abstraits captivants créés par IVP à l'Atelier 44. Plongez dans un univers artistique unique où la passion pour la peinture s'exprime librement. Explorez notre collection de tableaux et laissez-vous inspirer par la créativité d'IVP."
        },
        { name: 'robots', content: 'index, follow' }
      ]
    })
  }
})
</script>
