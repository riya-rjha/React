import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import AddItem from './addItem.jsx'
import SearchListItems from './searchListItems.jsx'

function App() {

  const handleClick1 = () => {
    console.log('You clicked it!');
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked!`);
  }

  const handleClick3 = (e) => {
    console.log(e);
  }

  const handleClick4 = () => {
    console.log('You clicked twice here');
  }

  // Cut Copy Paste from Content.jsx : 

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('lists')) || []);


  // Importing functions
  const clickEvent = (id) => {
    //items is setChange event
    const listItems = items.map((item) =>
      item.id === id ?
        //...item - shallow copy of object creating it into new object
        { ...item, checked: !item.checked }
        : item);
    setItems(listItems);
  }

  const deleteEvent = (id) => {
    const listItems = items.filter((item) =>
      item.id !== id //removes item of specified id by creating a new array
    );
    setItems(listItems);
  }

  // Adding New Items to list
  const [newItem, setNewItem] = useState('');
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1; //to calc id of newElement being placed
    const myNewItem = { id, checked: false, item };  //to define attributes for newElement
    const listItems = [...items, myNewItem]; //to save myNewItem in items using spread operator
    setItems(listItems); //save to Local Storage

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem) {
      return;
    }
    addItem(newItem);
    setNewItem('');
  }

  // Searching Items
  const [search, setSearch] = useState('');

  //useEffect state runs at every render

  // console.log('Before applying of useEffect');

  useEffect(()=>{
    //saving the values to local Storage
    localStorage.setItem('lists', JSON.stringify(items));
  }, [items]);

  // console.log('After applying of useEffect');

  return (
    <>

      <div>

        <Header title="Props Title" />
        <Content
          items={items.filter(item=>(
            (item.item).toLowerCase()).includes(search.toLowerCase()))}
          clickEvent={clickEvent}
          deleteEvent={deleteEvent}
        />
        <SearchListItems 
          search={search}
          setSearch={setSearch}
        />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Footer length={items.length} />
      </div>

      <div>
        <button className="btn" onClick={handleClick1}>Click Here</button>
        <button className="btn" onClick={
          () => { handleClick2('Riya') }
        }>Click Here</button>
        <button className="btn" onClick={
          (e) => { handleClick3(e) }
        }>Click Here</button>
      </div>

      <div>
        <p id='line'>Double tap on this button!</p>
        <button className="btn" onDoubleClick={handleClick4}>Double Tap</button>
      </div>

    </>
  )
}

export default App
