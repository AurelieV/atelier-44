import './assets/main.css'

import { createSSRApp } from 'vue'
import App from '../App.vue'
import router from '../router'
import { createHead } from '@unhead/vue'
import Separator from '#root/components/Separator.vue'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const app = createSSRApp({
    render: () => h(Page, pageProps)
  })
  app.use(router)
  app.use(createHead())
  app.component('Separator', Separator)

  return app
}
