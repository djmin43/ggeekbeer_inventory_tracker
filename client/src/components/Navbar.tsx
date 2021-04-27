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
            Navbar(Home | Inventory | Add Brew | Add Purchase | Brew History | Purchase History)
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/inventory">Inventory</Link>
                </li>
                <li>
                    <Link to="/add_brew">Add Brew</Link>
                </li>
                <li>
                    <Link to="/add_purchase">Add Purchase</Link>
                </li>
                <li>
                    <Link to="/brew_history">Brew History</Link>
                </li>
                <li>
                    <Link to="/purchase_history">Purchase History</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
