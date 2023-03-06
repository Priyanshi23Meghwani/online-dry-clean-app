import React from "react";
import "./Header.css";
import Logo from "../../assets/FabCare.png";
import { useNavigate } from "react-router-dom";
import { logoutUser } from '../../store/Actions/LoginAction';
import { useSelector, useDispatch } from 'react-redux';


function Header() {
    // const user = useSelector((state) => state.LoginReducer.user);
    const navigate = useNavigate();
    const items = JSON.parse(localStorage.getItem('myuser'));
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log("inside handleLogout");
        dispatch(logoutUser());
        localStorage.removeItem('myuser');
        navigate('/');
    };

    return (
        <div className="header">
            <div className="header-logo">
                <img className="header-logo-img" src={Logo} />
            </div>
            <nav className="header-nav">
                <ul className="header-nav-ul">
                    <li className="header-nav-ul-li"> <a href="#">HOME</a> </li>
                    <li className="header-nav-ul-li"> <a href="#">ABOUT</a> </li>
                    <li className="header-nav-ul-li"> <a href="#">SERVICES</a> </li>

                    {items && items.role == "customer" ?
                        <li className="header-nav-ul-li"> <a href={`/user/${items.userId}`}>MY PROFILE</a> </li> : ""}

                    {items && items.role == "customer" ?
                        <li className="header-nav-ul-li"> <a href={`/user/orders/${items.userId}`}>MY ORDERS</a> </li> : ""}
                </ul>
            </nav>
            {!items ?
                <div className="header-buttons">
                    <button className="header-buttons-btn" onClick={() => navigate("/login")}>LOGIN</button>
                    <button className="header-buttons-btn" onClick={() => navigate("/addUser")}>SIGN UP</button>
                </div> : ""}

            {items && items.role == "admin" ?
                <div className="header-buttons">
                    <button className="header-buttons-btn" onClick={() => navigate("/admin/orders")}>DETAILS</button>
                    <button className="header-buttons-btn" onClick={handleLogout}>LOGOUT</button>
                </div> : ""}

            {items && items.role == "customer" ?
                <div className="header-buttons">
                    <button className="header-buttons-btn" onClick={() => navigate("/orders/add")}>PLACE ORDER</button>
                    <button className="header-buttons-btn" onClick={handleLogout}>LOGOUT</button>
                </div> : ""}

        </div>
    );
}

export default Header;
