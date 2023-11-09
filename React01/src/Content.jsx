import React from 'react'
import { useState } from 'react';

const Content = () => {
    // Creating useState hook
    const [name, setName] = useState('Riya');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        let names = ['Riya', 'Harshit', 'Sujata', 'Rajeev'];
        let i = Math.floor(Math.random() * 4);
        setName(names[i]);
    }

    //troubleshooting in useState functions
    const handleCountChange = () => {
        setCount(count+1);
        console.log(count);
    }
    return (
        <main>
            <h1 className="read-docs">Hello {name}!</h1>
            <h1 className="read-docs">Count value is {count}</h1>
            <button onClick={handleNameChange} className='btn'>Change Name</button>
            <button onClick={handleCountChange} className='btn'>Change Count</button>
        </main>
    )
}

export default Content;