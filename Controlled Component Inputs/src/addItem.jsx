import React from 'react'
import { FaPlus } from 'react-icons/fa'

const addItem = ({newItem, setNewItem, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="addItem">
                Add Item :
            </label>
            <input
                autoFocus //input focussed automatically when a page loads
                type="text"
                id='addItem'
                placeholder='Add items'
                required
                spellCheck='false'
                value={newItem} //set value to newItem
                onChange={(e)=>setNewItem(e.target.value)} //change newItem to value of input field
            />
            <button type='submit' aria-label='Add Item'>
                <FaPlus/>
            </button>
        </form>
        
    )
}

export default addItem