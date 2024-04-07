import React from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import ChangeColor from './components/ChangeColor';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "10px", marginBottom: "-50px" }}>React-Redux</h1>
      <Profile></Profile>
      <Login></Login>
      <ChangeColor></ChangeColor>
    </div>
  )
}

export default App