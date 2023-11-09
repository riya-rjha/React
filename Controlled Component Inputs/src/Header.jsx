import React from 'react'

const Header = ({title}) => {
    const cssStyles = {
        backgroundColor: 'aqua',
        color: 'black',
        fontSize : '25px',
        fontWeight: 'bolder',
        padding: "5px 70px"
    };
    const margins = {
        marginTop: '20px'
    };
    return (
        <div>
            <header>
                Domino's List
            </header>
            <header style={margins}>
                {title}
            </header>
            <p style={cssStyles}>Creating my First Project in React</p>
        </div>
    )
}

export default Header;