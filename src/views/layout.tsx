import { html } from 'hono/html'

interface Header {
  title: string
  description: string
  image: string
  children?: any
}

export const Layout = (props: Header) => html`
  <html>
  <head>
    <meta charset="UTF-8">
    <title>${props.title}</title>
    <meta name="description" content="${props.description}">
    <head prefix="og: http://ogp.me/ns#">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${props.title}">
    <meta property="og:image" content="${props.image}">
    <link rel="stylesheet" href="/assets/style.css?v=${Date.now()}">
  </head>
  <body>
    <header>
      <a href="/">Home</a>
    </header>
    ${props.children}
  </body>
  </html>
`
