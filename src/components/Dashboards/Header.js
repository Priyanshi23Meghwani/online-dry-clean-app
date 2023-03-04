import React from "react";
import "./Header.css";
import Logo from "../../assets/FabCare.png";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const isAdmin=true;
    return (
        <div className="header">
            <div className="header-logo">
                <img className="header-logo-img" src={Logo}/>
            </div>
            <nav className="header-nav">
                <ul className="header-nav-ul">
                    <li className="header-nav-ul-li"> <a href="#">HOME</a> </li>
                    <li className="header-nav-ul-li"> <a href="#">ABOUT</a> </li>
                    <li className="header-nav-ul-li"> <a href="#">SERVICES</a> </li>
                </ul>
            </nav>
            <div className="header-buttons">
                <button className="header-buttons-btn" onClick={()=>navigate("/login")}>LOGIN</button>
                <button className="header-buttons-btn" onClick={()=>navigate("/addUser")}>SIGN UP</button>
            </div>
        </div>
    );
}

export default Header;
