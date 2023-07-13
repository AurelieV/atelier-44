import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { createApp } from './app'
import { renderSSRHead, getActiveHead } from '@unhead/ssr'

export { render }

async function render(pageContext) {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)
  const payload = await renderSSRHead(getActiveHead(appHtml))

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="fr" ${payload.htmlAttrs}>
  
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet">
    <meta name="keywords" content="peinture, couture, sacs, fait main, créations, IVP, Atelier 44, pourings, jean">
    <meta property="og:title" content="Atelier 44 - Peinture et Couture fait main par IVP">
    <meta property="og:description"
      content="Découvrez les créations uniques d'IVP à l'Atelier 44, où la passion pour la peinture et la couture s'exprime à travers des tableaux abstraits captivants et des sacs faits main. Plongez dans son univers artistique">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://atelier.ivp44.fr">
    <meta property="og:image" content="https://d1l1eu8q4rox8t.cloudfront.net/Atelier44.png">
    <meta property="og:image:alt" content="Logo de l'atelier 44">
    <meta property="og:site_name" content="Atelier 44">
    ${payload.headTags}
  </head>
  
  <body${payload.bodyAttrs}>
    ${payload.bodyTagsOpen}
    ${dangerouslySkipEscape(appHtml)}
    ${payload.bodyTags}
  </body$>
  
  </html>`

  return {
    documentHtml,
    pageContext: {}
  }
}
