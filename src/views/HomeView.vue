<template>
  <section class="relative pt-3 pr-5 bg-blue text-cream isolate">
    <div class="max-w-[1300px] with-wave grid grid-cols-[auto_80ch] mx-auto">
      <div class="image-container" aria-hidden="true">
        <img src="/hero_illustration.png" class="absolute z-10" />
      </div>
      <div class="ml-4">
        <h1 class="text-6xl font-hand w-[13ch]">Bienvenue à l'Atelier 44</h1>
        <p class="mt-4 text-xl">
          Je suis IVP, une artiste passionnée de peinture et de couture. Dans mon petit atelier, je
          donne vie à des créations uniques qui témoignent de ma passion débordante et de mon amour
          profond pour l'expression artistique. Découvrez des tableaux vibrants aux couleurs
          audacieuses et des sacs uniques confectionnés avec soin. Que vous soyez un amateur d'art
          ou un adepte de la mode, plongez dans mon monde créatif et laissez-vous inspirer par mon
          travail.
        </p>
      </div>
    </div>
    <Separator class="wave"></Separator>
  </section>
  <section class="relative pt-8 pl-8 pr-5 text-xl bg-cream text-blue isolate">
    <div class="max-w-[1300px] grid grid-cols-[minmax(auto,_60ch)_auto] mx-auto gap-3 with-wave">
      <div class="flex flex-col">
        <h2 class="mb-4 text-5xl font-hand">Mes tableaux</h2>
        <p>
          Laissez-vous emporter par la magie de mes tableaux abstraits créés avec la technique
          captivante du pouring. Chaque toile est une exploration de couleurs et de textures, où les
          pigments se mêlent harmonieusement pour créer des compositions uniques. Mes tableaux sont
          empreints d'émotions qui captivent le regard et suscitent l'imagination. Plongez dans mon
          univers artistique fascinant et laissez-vous séduire par l'expressivité de mes créations.
        </p>
        <router-link :to="{ name: 'paintings' }" class="mx-auto mt-4 btn -primary-on-cream"
          >Voir mes tableaux</router-link
        >
      </div>
      <Starport port="paitings">
        <img src="@/assets/section_peinture.png" />
      </Starport>
      <Separator class="wave" inversed></Separator>
    </div>
  </section>
  <section class="relative pl-8 pr-5 text-xl bg-blue text-cream">
    <div class="max-w-[1300px] grid grid-cols-[auto_minmax(auto,_60ch)] mx-auto gap-3 with-wave">
      <Starport port="sacs">
        <img src="@/assets/section_sac.png" />
      </Starport>
      <div class="flex flex-col">
        <h2 class="mb-4 text-5xl font-hand">Mes sacs uniques</h2>
        <p>
          Ma section couture est dédiée aux sacs uniques qui allient style, fonctionnalité et
          durabilité. Travaillant seule dans mon atelier, j'accorde une attention minutieuse aux
          détails et à la qualité des matériaux. Chaque sac est confectionné à la main avec soin et
          une pointe d'audace. J'aime donner une seconde vie aux tissus en réutilisant des vieux
          jeans et des chutes de tissu pour créer des pièces uniques et écologiques. Explorez ma
          collection de sacs aux formes variées, aux couleurs vibrantes et aux finitions
          impeccables, et trouvez le compagnon parfait pour compléter votre style.
        </p>
        <router-link :to="{ name: 'bags' }" class="mx-auto mt-4 btn -primary-on-blue"
          >Voir mes sacs</router-link
        >
      </div>
    </div>
    <Separator class="wave"></Separator>
  </section>
</template>

<script lang="ts">
import { useHead } from '@unhead/vue'
import { defineComponent } from 'vue'
import Separator from '@/components/Separator.vue'
import { Starport } from 'vue-starport'

export default defineComponent({
  name: 'HomeView',
  components: { Separator, Starport },
  setup() {
    useHead({
      title: 'Atelier 44',
      meta: [
        {
          name: 'description',
          content:
            "Découvrez les créations uniques d'IVP à l'Atelier 44, où la passion pour la peinture et la couture s'exprime à travers des tableaux abstraits captivants et des sacs faits main. Plongez dans son univers artistique"
        },
        { name: 'robots', content: 'index, follow' }
      ]
    })
  }
})
</script>

<style scoped>
.wave {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
.image-container {
  width: calc(100% * 755 / 853);
  writing-mode: vertical-rl;
}
.image-container img {
  height: 100%;
  object-fit: contain;
}

.with-wave {
  padding-bottom: calc(100% / 960 * 128 + 50px);
  height: max-content;
}
</style>
