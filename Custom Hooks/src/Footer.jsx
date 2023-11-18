import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>Footer &copy; {currentYear}</footer>
    )
}

export default Footer