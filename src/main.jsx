import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import cartReducer from './redux/cartSlice'
import App from './App'

const store = configureStore({
  reducer:{
    cart: cartReducer,
  }
})
cartReducer
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  <Provider store={store}>
     <Router>
      <App />
    </Router>
  </Provider>
   
  </React.StrictMode>
)

