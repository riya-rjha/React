import React from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <Profile></Profile>
      <Login></Login>
    </div>
  )
}

export default App