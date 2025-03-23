
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Github from './components/Github.jsx'
import Projects from './components/Projects.jsx'
import Router from './Routes.jsx'
import { Provider } from 'react-redux'
import store from './components/store/Store.js'


createRoot(document.getElementById('root')).render(
 
   
  <div className='flex flex-col h-screen text-white'>
    <Provider store={store}>
   <RouterProvider router={Router}/>
   </Provider>
   </div>
 
)
