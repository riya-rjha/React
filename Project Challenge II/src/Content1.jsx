import React from 'react'

const Content = ({item, setItem}) => {

  const API_URL = "https://jsonplaceholder.typicode.com/";

  const fetchUsers = async () =>{
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div></div>
  )
}

export default Content