//Give access to react libraries and React DOM
//as well as index styles and app js file
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

//create root to display components inside browser DOM node
//We're rendering components from App.js
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
