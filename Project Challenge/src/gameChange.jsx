import React from 'react'

const gameChange = ({ color, setColor }) => {

    const func = (e) => {
        document.getElementById('box').innerHTML = (e.target.value);
        setColor(e.target.value);
        document.getElementById('box').style.backgroundColor = color;
        if(e.target.value===''){
            document.getElementById('box').style.backgroundColor = 'white';
        }
    }

    return (
        <div className='container'>
            <div id="box">

            </div>
            <input
                autoFocus
                id='search-bar'
                spellCheck='false'
                role='searchBox'
                placeholder='Enter color'
                type="text"
                onChange={func}
                value={color}
            />
        </div>
    )
}

export default gameChange