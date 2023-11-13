import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'

const container = ({ item, setItem }) => {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const fun = async () => {
    const answer = API_URL + "users";
    const data = await fetch(answer);
    const response = await data.json();
    console.log(response);
    setItem(response);
  }

  return (

    <div className='container'>
      <button
        onClick={fun}
      >USERS
        <Content1 item={item} setItem={setItem} fun={fun} />
      </button>
      <button>POSTS
        <Content2 item={item} setItem={setItem} />
      </button>
      <button>COMMENTS
        <Content3 item={item} setItem={setItem} />
      </button>
    </div>

  )
}

export default container