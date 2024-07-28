import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'

import { HomePage } from './views/home'
import { PostPage } from './views/post'


const app = new Hono()

app.use('/assets/*', serveStatic({ root: './' }))

app.get('/', (c) => c.html(HomePage()))

app.get('/posts/:id', (c) => {
  const id = c.req.param('id')
  return c.html(PostPage(id))
})



const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
