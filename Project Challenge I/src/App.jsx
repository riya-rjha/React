import React from 'react'
import { useState } from 'react'

import GameChange from './gameChange.jsx'
const App = () => {

  const [color, setColor] = useState('');
  const [hexColor, setHexColor] = useState('');
  const [darkText, setDarkText] = useState(true);

  return (
    <main>
      <GameChange
        color={color}
        setColor={setColor}
        hexColor={hexColor}
        setHexColor={setHexColor}
        darkText={darkText}
        setDarkText={setDarkText}
      />
    </main>
  )
}

export default App