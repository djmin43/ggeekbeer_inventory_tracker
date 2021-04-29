import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            Navbar(Home | Inventory | Brew | Purchase )
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/control">Control</Link>
                </li>
                <li>
                    <Link to="/inventory">Inventory</Link>
                </li>
                <li>
                    <Link to="/brew">Brew</Link>
                </li>
                <li>
                    <Link to="/purhcase">Purchase</Link>
                </li>

            </ul>
        </div>
    )
}

export default Navbar
