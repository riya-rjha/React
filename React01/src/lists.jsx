import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const lists = ({ items, clickEvent, deleteEvent }) => {
    // const [items, setItems] = useState([
    //     {
    //         id: 1,
    //         checked: true,
    //         item: 'Chocolava Cake'
    //     },
    //     {
    //         id: 2,
    //         checked: false,
    //         item: 'Butterscotch Mouse Cake'
    //     },
    //     {
    //         id: 3,
    //         checked: false,
    //         item: 'Margerita Pizza'
    //     }
    // ]);

    // const handleClick = (name) => {
    //     console.log(`${name} is my id!`);
    // }
    
    // const clickEvent = (id) => {
    //     //items is setChange event
    //     const listItems = items.map((item) =>
    //         item.id === id ?
    //             //...item - shallow copy of oobject creating it into new object
    //             { ...item, checked: !item.checked }
    //             : item);
    //     // Update the state with the modified array
    //     setItems(listItems);
    //     //saving the values to local Storage
    //     localStorage.setItem('lists', JSON.stringify(listItems));
    // }

    // const deleteEvent = (id) => {
    //     const listItems = items.filter((item) =>
    //         item.id !== id //removes item of specified id by creating a new array
    //     );
    //     // Update the state with the modified array(items)
    //     setItems(listItems);
    //     //saving the values to local Storage
    //     localStorage.setItem('lists', JSON.stringify(listItems));
    // }


    return (
        <div>
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
            ):
            <h2 style={{marginTop: '2px'}}>Your list is now empty!</h2>
            }
            
        </div>
    )
}

export default lists;