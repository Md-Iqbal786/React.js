import React from 'react'

import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router'
import LogInPage from './components/LogInPage';
import FollowerPage from './components/FollowerPage';
import RepoPage from './components/RepoPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <HomePage/>
        
      </div>
    },
    {
      path: "/repo-page",
      element: 
      <div>
        <RepoPage/> 
      </div>
    },
    {
      path: "/follower-page",
      element: 
      <div>
        <FollowerPage/>
      </div>
    },
    {
      path: "/login-page",
      element: 
      <div>
        <LogInPage/>
      </div>
    }


  ]
)

function App() {
  

  return (
    <div>
      
      <RouterProvider router={router}/>
      <HomePage/>
      
    </div>
  )
}

export default App
