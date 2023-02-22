import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Providers from './providers/providers'

 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Providers>
        <App />
      </Providers> 
    </BrowserRouter>
  </React.StrictMode>,
)
