import React from 'react'
import Cell from './CellData.jsx'

const Row = ({ item }) => {
    return (
        <tr>
            {Object.entries(item).map(([key, value]) => {
                return (
                    <Cell key={key} cellData={JSON.stringify(value)} />  //JSON.stringify() -> for objects in particular for "users"
                )
            })}
        </tr>
    )
}

export default Row