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
           
        </div>
    )
}

export default lists;