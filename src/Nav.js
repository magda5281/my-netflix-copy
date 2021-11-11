import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./Nav.scss";
import MyListScreen from "./screens/MyListScreen";

const Nav = () => {
    const [showSolidNav, handleShowSolidNav] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShowSolidNav(true);
            } else handleShowSolidNav(false);
        });
        return window.removeEventListener("scroll", handleShowSolidNav(false));
    }, []);
    return (
        <nav className={`nav ${showSolidNav ? "nav__solid" : "nav__faded"}`}>
            <div className="nav__logoContainer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                     alt="Netflix logo "
                     className="nav__logo"
                     onClick={() => navigate("/")}/>
            </div>
            <ul className="nav__primary">
                <li className="nav__tab">Main page</li>
                <li className="nav__tab">Series and Tv</li>
                <li className="nav__tab">Movies</li>
                <li className="nav__tab">New</li>
                <li className="nav__tab"
                    onClick={() => navigate("/myList")}>
                    My list
                </li>
            </ul>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                     alt="Netflix logo "
                     className="nav__avatar"
                     onClick={() => navigate("/profile")}/>
            </div>
        </nav>
    );
};

export default Nav;