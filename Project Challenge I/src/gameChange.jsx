import React from 'react'
import ColorNames from 'colornames'

const gameChange = ({ color, setColor, hexColor, setHexColor, darkText, setDarkText }) => {
    return (
        <div className='container'>
            <div id="box" style={
                {
                    backgroundColor: color ? color : "white",
                    color: darkText ? '#000' : '#FFF'
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
            <button
                onClick={()=>setDarkText(!darkText)}
                id='toggle-btn'
                type='button'
            > Toggle Text Color
            </button>
        </div>
    )
}

export default gameChange