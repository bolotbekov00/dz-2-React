import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar.jsx";


function Layout(props) {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <footer>
                <span>Geeks 2023</span>
            </footer>
        </div>
    );
}

export default Layout;