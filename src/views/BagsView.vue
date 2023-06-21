<template>
  <h1>Mes sacs</h1>
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
        { name: 'robots', content: 'index, follow' }
      ]
    })
  }
})
</script>
