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

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                Database:
                <li>
                    <Link to="/inventory">Inventory</Link>
                </li>

                <li>
                    <Link to="/event">Event</Link>
                </li>
            </ul>
  
        </div>
    )
}

export default Navbar
