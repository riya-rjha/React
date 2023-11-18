import React from 'react'
import Feed from './Feed.jsx'
const Home = ({ post, isLoading, fetchError }) => {
  return (
    <main className='Home'>
      {isLoading &&
        <h1 className='statusMsg'>
          Loading Posts...
        </h1>
      }
      {!isLoading && fetchError &&
        <h1 className='statusMsg'
          style={{ color: 'red' }}>
          {fetchError}
        </h1>
      }
      {!isLoading && !fetchError &&
        (post.length ?
          <Feed post={post} />
          : <h2 className='statusMgs'>Loading Posts....</h2>
        )
      }

    </main>
  )
}

export default Home