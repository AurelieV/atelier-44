<script setup lang="ts"></script>

<template>
  <header class="w-full h-[var(--header-height)] bg-blue px-5 py-3 fixed top-0 z-10 flex">
    <router-link :to="{ name: 'home' }" class="flex">
      <img src="@/assets/logo_header.svg" class="" />
    </router-link>
    <nav class="ml-auto text-xl text-cream max-w-[1000px] my-auto">
      <ul class="flex space-x-3">
        <li>
          <router-link
            class="px-2 py-1 hover:underline hover:underline-offset-8 hover:decoration-copper active:decoration-brown active:decoration-4"
            :to="{ name: 'paintings' }"
            >Tableaux</router-link
          >
        </li>
        <li>
          <router-link
            class="px-2 py-1 hover:underline hover:underline-offset-8 hover:decoration-copper active:decoration-brown active:decoration-4"
            :to="{ name: 'bags' }"
            >Sacs</router-link
          >
        </li>
        <li>
          <router-link
            class="px-2 py-1 hover:underline hover:underline-offset-8 hover:decoration-copper active:decoration-brown active:decoration-4"
            :to="{ name: 'contact' }"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
  <StarportCarrier>
    <main
      class="mt-[var(--header-height)] isolate min-h-[calc(100vh_-_var(--header-height)_-_var(--footer-height))] bg-cream"
    >
      <RouterView />
    </main>
  </StarportCarrier>
  <footer class="flex h-[var(--footer-height)] bg-cream text-blue py-5 px-5">
    <div class="max-w-[1300px] mx-auto flex w-full">
      <p>&copy; 2023 Atelier 44. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { StarportCarrier } from 'vue-starport'

export default defineComponent({
  name: 'App',
  components: { StarportCarrier }
})
</script>

<style scoped>
.router-link-active {
  @apply underline underline-offset-8 decoration-copper hover:decoration-brown;
}
</style>
