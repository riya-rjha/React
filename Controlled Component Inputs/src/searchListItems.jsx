import React from 'react'


const searchListItems = ({ search, setSearch }) => {
    return (
        <form className='searchBar' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search : </label>
            <input
                type="text"
                placeholder='Search for Item'
                id='search'
                role='searchBox'
                value={search} //value set equal to state
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default searchListItems