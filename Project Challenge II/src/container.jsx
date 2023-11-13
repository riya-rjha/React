import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'

const container = ({ item, setItem }) => {
  return (

    <div className='container'>
      <button
      >USERS
        <Content1 item={item} setItem={setItem}/>
      </button>
      <button>POSTS
        <Content2 />
      </button>
      <button>COMMENTS
        <Content3 />
      </button>
    </div>

  )
}

export default container