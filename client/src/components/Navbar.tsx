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
            Home | 
            데이터베이스: 1. 재료현황 2. 양조기록 3. 구매이력 4. 전체기록
            양조: 1. 양조등록 2. 재료사용등록
            구매: 1. 신규등록 2. 추가재료등록
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                Database:
                <li>
                    <Link to="/inventory">Inventory</Link>
                </li>
                <li>
                    <Link to="/brew">Brew</Link>
                </li>
                <li>
                    <Link to="/purchase">Purchase</Link>
                </li>
                <li>
                    <Link to="/event">Event</Link>
                </li>
            </ul>
  
        </div>
    )
}

export default Navbar
