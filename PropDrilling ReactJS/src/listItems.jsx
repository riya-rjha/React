import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const listItems = ({ items, clickEvent, deleteEvent }) => {
    return (
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

    )
}

export default listItems;