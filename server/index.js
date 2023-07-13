const express = require('express')
const { renderPage } = require('vite-plugin-ssr/server')

const root = `${__dirname}/..`

startServer()

async function startServer() {
  const app = express()

  const vite = require('vite')
  const viteDevServer = await vite.createServer({
    root,
    server: { middlewareMode: true }
  })
  app.use(viteDevServer.middlewares)

  app.get('*', async (req, res, next) => {
    const urlOriginal = req.originalUrl
    const pageContextInit = {
      urlOriginal
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) return next()
    const { body, statusCode, contentType } = httpResponse
    res.status(statusCode).type(contentType).send(body)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
