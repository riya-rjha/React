import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import users from './features/users.jsx'

const store = configureStore({
  reducer: {
    user: users
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
