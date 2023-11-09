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
            <h1 className='read-docs'>Lists</h1>
            {items.length ? (
                <ul className='list'>
                    {items.map((items) => (
                        <li className='item' key={items.id}>
                            <input
                                type="checkbox"
                                //will check the boxes if checked value is true
                                checked={items.checked}
                                onChange={() => clickEvent(items.id)}
                            />
                            <label
                                style={(items.checked) ? { textDecorationLine: 'line-through' } : null}
                                onDoubleClick={() => clickEvent(items.id)}
                            >{items.item}</label>
                            <FaTrashAlt
                                role='button'
                                tabIndex='0'
                                onClick={() => deleteEvent(items.id)}
                            />
                        </li>
                    ))}
                </ul>
            ) :
                <h2 style={{ marginTop: '2px' }}>Your list is now empty!</h2>
            }

        </main>
    )
}

export default Content;