import {
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
                    <Link to="/inventory">재고상황</Link>
                </li>
                <li>
                    <Link to="/event">이벤트 로그</Link>
                </li>
                <li>
                    <Link to="/add">재고추가</Link>
                </li>
                <li>
                    <Link to="/use">재고사용</Link>
                </li>
                <li>
                    <Link to="/edit">개별재고정보</Link>
                </li>
                <li>
                    <Link to="/user">사용자</Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar
