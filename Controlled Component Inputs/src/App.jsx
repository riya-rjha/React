import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import AddItem from './addItem.jsx'
import SearchListItems from './searchListItems.jsx'
import ApiRequest from './apiRequest.jsx'

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

  const [items, setItems] = useState([]);


  // Importing functions
  const clickEvent = async (id) => {
    //items is setChange event
    const listItems = items.map((item) =>
      item.id === id ?
        //...item - shallow copy of object creating it into new object
        { ...item, checked: !item.checked }
        : item);
    setItems(listItems);

    //Handle Check
    //Without using local Storage
    //By the use of API - CRUD Operations

    const myItems = listItems.filter(item=>item.id===id);
    const updateOptions = {
      method: 'PATCH', //Patch request : Modify
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked:myItems[0].checked})
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl, updateOptions);
    if(result) setFetchError(result);
  }

  const deleteEvent = async (id) => {
    const listItems = items.filter((item) =>
      item.id !== id //removes item of specified id by creating a new array
    );
    setItems(listItems);

    const deleteOptions = {
      method: 'DELETE'
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl, deleteOptions);
    if(result) setFetchError(result);
    
  }

  // Adding New Items to list
  const [newItem, setNewItem] = useState('');
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1; //to calc id of newElement being placed
    const myNewItem = { id, checked: false, item };  //to define attributes for newElement
    const listItems = [...items, myNewItem]; //to save myNewItem in items using spread operator
    setItems(listItems); //save to Local Storage

    //Adding items through CRUD Operations - Data from Data/db.json
    const postOperations = { //object notation (POST Operations)
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json' //data being sent in JSON Format
      },
      body: JSON.stringify(myNewItem)
    }

    const results = await ApiRequest(API_URL, postOperations);
    if(results) setFetchError(results); 

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
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log('Before applying of useEffect');

  //useEffect state runs at every render

  useEffect(() => {
    //saving the values to local Storage
    localStorage.setItem('lists', JSON.stringify(items));
  }, [items]);

  // console.log('After applying of useEffect');


  //Using Fetch API Data
  const API_URL = "http://localhost:3500/items";
  //async cannot be directly used in useEffect

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setItems(data);
        if (!response.ok) throw Error('Unable to load data from API');
        setFetchError(null);
      }
      catch (error) {
        console.log(error.message);
        setFetchError(error.message);
      }
      finally{
        setIsLoading(false);
      }
    }

    setTimeout(fetchItems, 2000);

  }, [])


  return (
    <>

      <div>

        <Header title="Props Title" />

        <Content
          items={items.filter(item => (
            (item.item).toLowerCase()).includes(search.toLowerCase()))}
          clickEvent={clickEvent}
          deleteEvent={deleteEvent}
        />
        <main>
          {isLoading && <p
            style={{fontSize: "22px",
              fontWeight: "bolder",
              letterSpacing: "1px",
              color: "greenyellow"
          }}
          >
            Loading items...
            </p>}
          {fetchError && <p
            style={{
              color: "red",
              fontSize: "22px",
              fontWeight: "bolder",
              letterSpacing: "1px"
            }}
          >
            {`Error : ${fetchError}`}
          </p>
          }
          <SearchListItems
            search={search}
            setSearch={setSearch}
          />
        </main>
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        {!fetchError && !isLoading && <Footer
          length={items.length}
        />}
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
