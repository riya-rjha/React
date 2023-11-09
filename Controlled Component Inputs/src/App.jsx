import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import AddItem from './addItem.jsx'

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

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('lists')));

  const setAndSaveItems = (listItems) => {
    // Update the state with the modified array
    setItems(listItems);
    //saving the values to local Storage
    localStorage.setItem('lists', JSON.stringify(listItems));
  }

  // Importing functions
  const clickEvent = (id) => {
    //items is setChange event
    const listItems = items.map((item) =>
      item.id === id ?
        //...item - shallow copy of object creating it into new object
        { ...item, checked: !item.checked }
        : item);
    setAndSaveItems(listItems);
  }

  const deleteEvent = (id) => {
    const listItems = items.filter((item) =>
      item.id !== id //removes item of specified id by creating a new array
    );
    setAndSaveItems(listItems);
  }

  // Adding New Items to list
  const [newItem, setNewItem] = useState('');
  const addItem = (item) =>{
    const id = items.length?items[items.length-1].id+1:1; //to calc id of newElement being placed
    const myNewItem = {id, checked:false, item};  //to define attributes for newElement
    const listItems = [...items, myNewItem]; //to save myNewItem in items using spread operator
    setAndSaveItems(listItems); //save to Local Storage

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem) {
      return;
    }
    addItem(newItem);
    setNewItem('');
  }
  return (
    <>

      <div>

        <Header title="Props Title" />
        <Content
          items={items}
          clickEvent={clickEvent}
          deleteEvent={deleteEvent}
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
