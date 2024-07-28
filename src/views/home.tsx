import { Layout } from './layout';
import { PrismaClient } from '@prisma/client';

const props = {
  name: 'h1 text',
  header: {
    title: 'Hello <> World',
    description: 'This is a description',
    image: 'https://example.com/image.png',
  },
};

const prisma = new PrismaClient();
const posts = await prisma.posts.findMany();

export const HomePage = () => (
  <Layout {...props.header}>
    <h1>Hello {props.name}</h1>
    <div class="posts">
      {posts.map((post) => (
        <div class="post-card">
          <a href={`/posts/${post.id}`} class="title">
            {post.title}
          </a>
          <p>{post.preview}</p>
        </div>
      ))}
    </div>
  </Layout>
);
