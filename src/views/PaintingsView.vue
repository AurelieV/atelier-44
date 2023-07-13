<template>
  <section class="relative pt-8 pl-8 pr-5 text-md tablet:text-xl bg-cream text-blue isolate">
    <div
      class="max-w-[1300px] grid grid-cols-1 tablet:grid-cols-[minmax(auto,_60ch)_auto] mx-auto gap-3 with-wave"
    >
      <div class="flex flex-col">
        <h1 class="mb-4 text-4xl tablet:text-5xl font-hand">Mes tableaux</h1>
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
          <a
            href="https://forms.gle/xHaZs4LokHEC1uGQA"
            rel="external nofollow"
            target="_blank"
            class="link"
            >via le formulaire de contact</a
          >. Je serai ravie de répondre à vos questions et de vous fournir tous les détails
          nécessaires.
        </p>
      </div>
      <Transition appear name="slide-in">
        <img src="@/assets/section_peinture.png" />
      </Transition>
      <Separator class="wave" inversed></Separator>
    </div>
  </section>
  <section class="py-8 bg-blue">
    <ul id="gallery" class="grid px-2 mx-auto md:px-4">
      <li
        v-for="painting in paintings"
        :key="painting.id"
        class="w-[170px] md:w-[300px] mb-2 bg-cream p-2 relative overflow-hidden cursor-pointer group"
        @click="selected = painting"
      >
        <picture @load="reloadGrid">
          <source
            sizes="(min-width: 640px) 25vw, 50vw"
            type="image/webp"
            :src="`${painting.baseUrl}_400.webp`"
            :srcset="`${painting.baseUrl}_400.webp 400w, ${painting.baseUrl}_800.webp 800w, ${painting.main_picture} 1200w`"
            @load="reloadGrid"
          />
          <img
            :src="`${painting.baseUrl}_400.jpg`"
            :srcset="`${painting.baseUrl}_400.jpg 400w, ${painting.baseUrl}_800.jpg 800w, ${painting.main_picture} 1200w`"
            :alt="painting.name"
            sizes="(min-width: 640px) 25vw, 50vw"
            @load="reloadGrid"
          />
        </picture>
        <div
          class="absolute bottom-0 left-0 right-0 px-3 pt-1 pb-3 transition-transform md:translate-y-full bg-cream-transparent group-hover:translate-y-0"
        >
          <div class="font-bold text-center md:text-xl text-blue">{{ painting.name }}</div>
        </div>
      </li>
    </ul>
  </section>
  <teleport to="body" v-if="selected">
    <div
      class="fixed inset-0 z-20 flex items-center justify-center px-2 py-3 bg-cream-transparent"
      @click.self="selected = null"
    >
      <div class="flex items-center justify-center">
        <div class="max-w-[90vw] max-h-[90vh] overflow-auto">
          <img class="max-w-[1300px]" :src="selected.main_picture" />
        </div>
      </div>
      <button
        class="absolute text-xl btn -primary-on-cream text-blue hover:text top-2 right-2"
        @click="selected = null"
      >
        X
      </button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { supabase } from '@/supabase'
import { useHead } from '@unhead/vue'
import { defineComponent, ref, nextTick, onMounted, onUnmounted, watch } from 'vue'
import Masonry from 'masonry-layout'

interface Painting {
  id: string
  name: string
  year: number
  subType: string
  dimension: string
  main_picture: string
  baseUrl: string
}

export default defineComponent({
  name: 'HomeView',
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

    const paintings = ref([] as Painting[])
    let masonery: any
    function reloadGrid() {
      if (masonery) {
        masonery.layout()
      }
    }
    async function getPaintings() {
      const { data } = await supabase.from('products').select('*').match({ type: 'painting' })
      if (data) {
        paintings.value = data.map((p) => {
          const baseUrl = p.main_picture.split('.').slice(0, -1)
          return {
            ...p,
            baseUrl: baseUrl.join('.')
          }
        })
      }
      nextTick(() => {
        masonery = new Masonry('#gallery', {
          itemSelector: 'li',
          columnWidth: 'li',
          gutter: 10,
          percentPosition: true,
          stagger: 30,
          fitWidth: true
        })
      })
    }
    getPaintings()

    const selected = ref<Painting | null>(null)
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        selected.value = null
      }
    }

    watch(selected, (selected) => {
      if (!selected) {
        document.body.classList.remove('overflow-hidden')
      } else {
        document.body.classList.add('overflow-hidden')
      }
    })

    onMounted(() => {
      window.addEventListener('keydown', onKeyDown)
    })
    onUnmounted(() => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('overflow-hidden')
    })

    return { paintings, reloadGrid, selected }
  }
})
</script>
