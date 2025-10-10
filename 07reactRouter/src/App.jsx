import React from 'react'
import Home from './components/home';
import About from './components/about'
import DashBoard from './components/dashBoard'
import NavBar from './components/NavBar';
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Home/>
        <NavBar/>
      </div>
    },
    {
      path: "/about",
      element: 
      <div>
        <About/>
        <NavBar/>
      </div>
    },
    {
      path: "/dashBoard",
      element: 
      <div>
        <DashBoard/>
        <NavBar/>
      </div>
    },
  ]
)

function App() {
  

  return (
    <div>
      
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
