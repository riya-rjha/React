import React from 'react'
import ColorNames from 'colornames'

const gameChange = ({ color, setColor, hexColor, setHexColor }) => {
    return (
        <div className='container'>
            <div id="box" style={
                {
                    backgroundColor: color ? color : "white"
                }
            }
            >
                <p>
                    {color ? color : "Empty Value"}
                    <br />
                    {hexColor ? hexColor : ""}
                </p>
            </div>
            <input
                autoFocus
                id='search-bar'
                spellCheck='false'
                role='searchBox'
                placeholder='Enter color'
                type="text"
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    setHexColor(ColorNames(e.target.value));
                }}
            />
        </div>
    )
}

export default gameChange