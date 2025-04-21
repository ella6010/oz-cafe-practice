import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MenuProvidrer } from './context/menuContext.jsx'
import { CartProvidrer } from './context/cartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MenuProvidrer>
      <CartProvidrer>
        <App />
      </CartProvidrer>
    </MenuProvidrer>    
  </BrowserRouter>,
)

