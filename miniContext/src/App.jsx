import './App.css'
import UserContextProvider from './context/userContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  return (
    <UserContextProvider>
      <h1>React with context and sharing is important</h1>
      <div className='flex  items-center gap-3 justify-center flex-col'>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
