import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const addItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    return (
        <form onSubmit={handleSubmit} id='firstForm'>
            <label htmlFor="addItem">
                Add Item :
            </label>
            <input
                ref={inputRef}
                autoFocus //input focussed automatically when a page loads
                type="text"
                id='addItem'
                placeholder='Add items'
                required
                spellCheck='false'
                value={newItem} //set value to newItem
                onChange={(e) => setNewItem(e.target.value)} //change newItem to value of input field
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>

    )
}

export default addItem