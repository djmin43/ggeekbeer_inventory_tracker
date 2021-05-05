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
            <ul>양조:
                <li>
                    <Link to="/brew/add_brew">1. 신규양조</Link>
                </li>
                <li>
                    <Link to="/brew/use_inventory">2. 재료사용등록</Link>
                </li>
            </ul>
            <ul>구매:
                <li>
                    <Link to="/purchase/new_purchase">1. 신규등록</Link>
                </li>
                <li>
                    <Link to="/purchase/add_inventory">2. 추가재료등록</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
