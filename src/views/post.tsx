import { Layout } from './layout'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const props = {
  header: {
    title: 'Hello <> World',
    description: 'This is a description',
    image: 'https://example.com/image.png',
  },
}

export const PostPage = async (id: string) => {
  const post = await prisma.posts.findUniqueOrThrow({ where: { id: Number(id) } })

  return (
    <Layout {...props.header}>
      <h1>{post.title}</h1>
      <p>{post.preview}</p>
      <div>{post.text}</div>
    </Layout>
  )
}
