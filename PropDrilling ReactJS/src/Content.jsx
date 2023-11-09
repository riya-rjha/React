import React from 'react'
import { useState } from 'react';
import ListItems from "./listItems.jsx"; //Always use PascalCase to define components

const Content = ({items, clickEvent, deleteEvent}) => {
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

    // Deleted const items, setItems useCase
    // And added to App.jsx 
    // to see prop drilling

    // const handleClick = (name) => {
    //     console.log(`${name} is my id!`);
    // }


    return (
        <main>
            <h1 className="read-docs">Hello {name}!</h1>
            <h1 className="read-docs">Count value is {count}</h1>
            <button onClick={handleNameChange} className='btn'>Change Name</button>
            <button onClick={handleCountChange} className='btn'>Change Count</button>
            <div>
                <h1 className='read-docs'>Lists</h1>
                {items.length ? (
                    <ListItems
                        items={items}
                        clickEvent={clickEvent}
                        deleteEvent={deleteEvent}
                    />
                    ) : (
                    <h2 style={{ marginTop: "15px"}}>Your list is now empty!</h2>
                )}
            </div>
        </main>
    )
}

export default Content;