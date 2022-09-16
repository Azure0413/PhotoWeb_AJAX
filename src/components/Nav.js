import React from 'react'
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">HomePage</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Nav;
