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
                <li>
                    <Link to="/auth">Auth</Link>
                </li>
                <li>
                    <Link to="/inventory">재고</Link>
                </li>

                <li>
                    <Link to="/event">이벤트 로그</Link>
                </li>
                <li>
                    <Link to="/add">재료추가</Link>
                </li>
                <li>
                    <Link to="/use">재료사용</Link>
                </li>
            </ul>
  
        </div>
    )
}

export default Navbar
