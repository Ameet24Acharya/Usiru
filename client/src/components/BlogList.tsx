import { Reveal } from './Reveal'

type Post = { title: string; date: string; paragraphs: string[] }

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <Reveal as="article" className="post" key={post.title}>
          <div className="post-date">{post.date}</div>
          <h3>{post.title}</h3>
          {post.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      ))}
    </div>
  )
}
