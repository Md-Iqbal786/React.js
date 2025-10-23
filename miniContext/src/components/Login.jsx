import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        if (e && e.preventDefault) e.preventDefault()
        if (!username.trim() || !password.trim()) {
            alert('Please enter username and password')
            return
        }
        // For this simple example we store only the username in context
        setUser({ username: username.trim() })
        // clear inputs after login
        setUsername('')
        setPassword('')
    }

    return (
        <div>
            <div className='py-2'>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    
                />
            </div>
            <div className='py-2'>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='py-2'>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Login
