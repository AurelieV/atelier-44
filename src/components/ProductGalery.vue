<template>
  <ul id="gallery" class="grid px-2 mx-auto md:px-4">
    <li
      v-for="product in products"
      :key="product.id"
      class="w-[170px] md:w-[300px] mb-2 bg-cream p-2 relative overflow-hidden cursor-pointer group"
      @click="selected = product"
    >
      <picture @load="reloadGrid">
        <source
          sizes="(min-width: 640px) 25vw, 50vw"
          type="image/webp"
          :src="`${product.baseUrl}_400.webp`"
          :srcset="`${product.baseUrl}_400.webp 400w, ${product.baseUrl}_800.webp 800w, ${product.main_picture} 1200w`"
          @load="reloadGrid"
        />
        <img
          :src="`${product.baseUrl}_400.jpg`"
          :srcset="`${product.baseUrl}_400.jpg 400w, ${product.baseUrl}_800.jpg 800w, ${product.main_picture} 1200w`"
          :alt="product.name"
          sizes="(min-width: 640px) 25vw, 50vw"
          @load="reloadGrid"
        />
      </picture>
      <div
        class="px-2 pt-1 transition-transform tablet:pb-3 tablet:absolute tablet:bottom-0 tablet:left-0 tablet:right-0 md:translate-y-full bg-cream-transparent group-hover:translate-y-0"
      >
        <div class="text-sm font-bold text-center tablet:text-xl text-blue">{{ product.name }}</div>
      </div>
    </li>
  </ul>
  <teleport to="body" v-if="selected">
    <div
      class="fixed inset-0 z-20 flex items-center justify-center px-2 py-3 bg-cream-transparent"
      @click.self="selected = null"
    >
      <div class="flex items-center justify-center isolate">
        <div class="max-w-[90vw] max-h-[90vh] relative">
          <div class="max-w-[90vw] max-h-[90vh] overflow-auto relative">
            <img
              :class="isZoomed ? 'max-w-[1300px]' : ''"
              :src="selected.main_picture"
              @load="isLoaded = true"
            />
          </div>
          <button
            class="absolute p-1 text-sm bottom-2 right-2 bg-cream-transparent hover:bg-cream active:bg-transparent"
            @click="isZoomed = !isZoomed"
            v-if="isLoaded"
          >
            <Icon :icon="isZoomed ? 'mdi:magnify-minus' : 'mdi:magnify-plus'" />
          </button>
        </div>
      </div>
      <div
        v-if="!isLoaded"
        class="absolute inset-0 top-0 z-10 flex items-center justify-center pointer-events-none"
      >
        <Loader class="text-blue"></Loader>
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
import { defineComponent, ref, nextTick, onMounted, onUnmounted, watch } from 'vue'
import Masonry from 'masonry-layout'
import Loader from '@/components/Loader.vue'

interface Product {
  id: string
  name: string
  main_picture: string
  baseUrl: string
}

export default defineComponent({
  props: { type: { type: String, required: true } },
  components: { Loader },
  setup(props) {
    const products = ref([] as Product[])
    let masonery: any
    function reloadGrid() {
      if (masonery) {
        masonery.layout()
      }
    }
    async function getProduct() {
      const { data } = await supabase.from('products').select('*').match({ type: props.type })
      if (data) {
        products.value = data.map((p) => {
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
    getProduct()

    const selected = ref<Product | null>(null)
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        selected.value = null
      }
    }

    const isZoomed = ref(false)

    watch(selected, (selected) => {
      if (!selected) {
        document.body.classList.remove('overflow-hidden')
      } else {
        document.body.classList.add('overflow-hidden')
        isZoomed.value = false
        isLoaded.value = false
      }
    })

    onMounted(() => {
      window.addEventListener('keydown', onKeyDown)
    })
    onUnmounted(() => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('overflow-hidden')
    })

    const isLoaded = ref(false)

    return { products, reloadGrid, selected, isZoomed, isLoaded }
  }
})
</script>
