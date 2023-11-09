import React from 'react'

const Header = (props) => {
    const cssStyles = {
        backgroundColor: 'aqua',
        color: 'black',
        fontSize : '25px',
        fontWeight: 'bolder'
    };
    return (
        <div>
            <header>
                {/* Groceries List */}
                {props.title}
            </header>
            <p style={cssStyles}>Creating my First Project in React</p>
        </div>
    )
}

export default Header;