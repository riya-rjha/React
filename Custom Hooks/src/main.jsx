import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Route-Routes */}
      <Route path="*" element={<App />} />
      {/* Component = {Element} - element = {Component} */}
    </Routes>
  </BrowserRouter>
)