import React from 'react'
import Feed from './Feed.jsx'
import { useContext } from 'react'
import DataContext from './Context/dataContext'

const Home = () => {

  const { searchResults, isLoading, fetchError } = useContext(DataContext);

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
        (searchResults.length ?
          <Feed post={searchResults} />
          : <h2 className='statusMgs'>Loading Posts....</h2>
        )
      }

    </main>
  )
}

export default Home