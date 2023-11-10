import React from 'react'

const gameChange = ({ color, setColor }) => {

    return (
        <div className='container'>
            <div id="box" style={
                { backgroundColor: color ? color : "white" }
            }
            >
            <p>{color}</p>
            </div>
            <input
                autoFocus
                id='search-bar'
                spellCheck='false'
                role='searchBox'
                placeholder='Enter color'
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
        </div>
    )
}

export default gameChange