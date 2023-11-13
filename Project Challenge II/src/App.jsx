import React from 'react'
import Container from './container.jsx'
import { useState } from 'react'

const App = () => {

    const [item, setItem] = useState({});



  return (
    <div>
        <Container
            item={item}
            setItem={setItem}
        />
    </div>
  )
}

export default App