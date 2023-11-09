import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: 'Chocolava Cake'
    },
    {
      id: 2,
      checked: false,
      item: 'Butterscotch Mouse Cake'
    },
    {
      id: 3,
      checked: false,
      item: 'Margerita Pizza'
    }
  ]);

  const handleClick = (name) => {
    console.log(`${name} is my id!`);
  }

  const clickEvent = (id) => {
    //items is setChange event
    const listItems = items.map((item) =>
      item.id === id ?
        //...item - shallow copy of oobject creating it into new object
        { ...item, checked: !item.checked }
        : item);
    // Update the state with the modified array
    setItems(listItems);
    //saving the values to local Storage
    localStorage.setItem('lists', JSON.stringify(listItems));
  }

  const deleteEvent = (id) => {
    const listItems = items.filter((item) =>
      item.id !== id //removes item of specified id by creating a new array
    );
    // Update the state with the modified array(items)
    setItems(listItems);
    //saving the values to local Storage
    localStorage.setItem('lists', JSON.stringify(listItems));
  }

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



  return (
    <>

      <div>
        <Header title="Domino's List" />
        <Footer length={items.length} />
        {/* <Lists items={items} clickEvent={clickEvent} deleteEvent={deleteEvent} /> */}
        <Content  
          items={items}
          clickEvent={clickEvent}
          deleteEvent={deleteEvent}
        />
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
