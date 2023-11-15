import React from 'react'
import Feed from './Feed.jsx'
const Home = ({ post }) => {
  return (
    <main>
      {post.length ?
        <Feed post={post} /> :
        <p
          style={{ marginTop: '2rem' }}
        >No posts to display!</p>
      }
    </main>
  )
}

export default Home