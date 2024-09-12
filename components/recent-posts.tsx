import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent posts</h2>
        <Posts posts={posts} />
      </div>
    </section>
  )
}