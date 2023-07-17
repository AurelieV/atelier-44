<template>
  <section
    class="relative max-w-full pt-8 pl-8 pr-5 overflow-hidden text-md tablet:text-xl bg-cream text-blue isolate"
  >
    <div
      class="max-w-[1300px] grid grid-cols-1 tablet:grid-cols-[minmax(auto,_60ch)_auto] mx-auto gap-3 with-wave"
    >
      <div class="flex flex-col">
        <h1 class="mb-4 text-4xl tablet:text-5xl font-hand">Mes sacs</h1>
        <p>
          Découvrez ma collection de sacs uniques et faits main à l'Atelier 44. Chaque sac est le
          fruit d'un travail minutieux et de ma passion pour la couture. Je suis fière de créer des
          designs originaux, où chaque pièce est une véritable œuvre d'art à part entière.
        </p>
        <p>
          En tant que couturière, j'apprécie tout particulièrement la récupération de matériaux,
          notamment de vieux jeans. J'aime donner une seconde vie à ces tissus en les transformant
          en sacs à la fois fonctionnels et esthétiques. Chaque sac que je confectionne est unique,
          portant en lui une histoire et une touche de créativité.
        </p>
        <p>
          Sauf mention contraire, les sacs que vous trouverez ici sont disponibles à l'achat. Si
          vous souhaitez obtenir plus d'informations sur un modèle spécifique, veuillez me contacter
          <a
            href="https://forms.gle/xHaZs4LokHEC1uGQA"
            rel="external nofollow"
            target="_blank"
            class="link"
            >via le formulaire de contact</a
          >. Je serai ravie de discuter avec vous, de partager des détails supplémentaires et de
          vous aider à trouver le sac parfait qui correspond à vos goûts et besoins.
        </p>
      </div>
      <Transition appear name="slide-in">
        <img src="@/assets/section_sac.png" />
      </Transition>
      <Separator class="wave" inversed></Separator>
    </div>
  </section>
  <section class="py-8 bg-blue">
    <ProductGalery type="bag"></ProductGalery>
  </section>
</template>

<script lang="ts">
import { useHead } from '@unhead/vue'
import { defineComponent } from 'vue'
import ProductGalery from '@/components/ProductGalery.vue'

export default defineComponent({
  components: { ProductGalery },
  setup() {
    useHead({
      title: 'Atelier 44 - Sacs',
      meta: [
        {
          name: 'description',
          content:
            "Découvrez les magnifiques sacs faits main créés par IVP à l'Atelier 44. Chaque sac est unique et réalisé avec passion. Explorez notre collection de sacs dans différents styles, tailles et couleurs."
        },
        { name: 'robots', content: 'index, follow' }
      ]
    })
  }
})
</script>
