import React from 'react'
import Home from './home'
import DashBoard from './dashBoard'
import About from './about'
import { Link } from 'react-router'

function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to="/about"> about </Link>
                </li>
                <li>
                    <Link to="/dashBoard"> dashBoard </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
