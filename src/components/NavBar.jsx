import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/post">Post</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/parent">Parent</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;