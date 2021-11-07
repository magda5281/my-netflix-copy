import React, {useEffect, useState} from 'react';
import "./Nav.scss"

const Nav = () => {
    const [showSolidNav, handleShowSolidNav] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100) {
                handleShowSolidNav(true);
            } else handleShowSolidNav(false);
        });
        return window.removeEventListener("scroll", handleShowSolidNav(false));
    },[]);
    return (
        <nav className={`nav ${showSolidNav ? "nav__solid" : "nav__faded"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                 alt="Netflix logo "
            className="nav__logo"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                 alt="Netflix logo "
                 className="nav__avatar"/>
        </nav>
    );
};

export default Nav;