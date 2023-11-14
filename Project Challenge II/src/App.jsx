import React from 'react'
import { useState, useEffect } from 'react'
import Container from './container.jsx'
// import List from './List.jsx'
import Table from './Table.jsx'


const App = () => {

  const [items, setItems] = useState([]);
  const [request, setRequest] = useState("users");
  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${API_URL}${request}`);
        const response = await data.json();
        setItems(response);
        // console.log(response);
      }
      catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, [request])

  return (
    <div>
      <Container
        request={request}
        setRequest={setRequest}
      />
      {/* <List
        items={items} //the name that is being passed should be same as that mentioned during destructuring (not parenthesis one, the other one)
      /> */}
      <Table
        items={items}
      />
    </div>
  )
}

export default App

/**git branch -m main master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a */