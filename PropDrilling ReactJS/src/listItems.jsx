import React from 'react'
import LineItems from './lineItems.jsx'

const listItems = ({ items, clickEvent, deleteEvent }) => {
    return (
        <ul className='list'>
            {items.map((items) => (
                <LineItems
                    key={items.id} //List elements required key in React
                    items={items}
                    clickEvent={clickEvent}
                    deleteEvent={deleteEvent}
                />
            ))}
        </ul>

    )
}

export default listItems;