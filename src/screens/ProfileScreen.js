import React from 'react';
import Nav from "../Nav";
import "./ProfileScreen.scss"
import {auth} from "../firebase.js";
import {FaUserCircle} from "react-icons/fa";

const ProfileScreen = ({email}) => {
    return (
        <section className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1>Profile</h1>
                <div className="profileScreen__info">
                    <FaUserCircle aria-label="Profile picture" color="white" size={100}/>
                    <div className="profileScreen__details">
                        <h2>{email || 'Guest'}</h2>
                        <div className="profileScreen__plans">
                            <p>You're browsing as a guest. Leaving the demo clears your list.</p>
                            <button
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut">Leave demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileScreen;