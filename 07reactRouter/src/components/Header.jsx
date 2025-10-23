import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router'

function Header() {
    return (
        <div>
            <div className='home'>HOME</div>
            <div className='navLinks'>
                <div>
                    <Link to="/">Home-Page</Link>
                </div>
                <div>
                    <Link to="/follower-page">Follower-page</Link>
                </div>
                <div>
                    <Link to="/repo-page">Repo-page</Link>
                </div>
            </div>
            <div>
               <a href="/login-page">LogIn</a>
            </div>
        </div>
    )
}

export default Header