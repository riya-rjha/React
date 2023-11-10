import React from 'react'
import { useState } from 'react'
import GameChange from './gameChange.jsx'
const App = () => {

  const [color, setColor] = useState('');

  return (
    <main>
      <GameChange
        color={color}
        setColor={setColor}
      />
    </main>
  )
}

export default App