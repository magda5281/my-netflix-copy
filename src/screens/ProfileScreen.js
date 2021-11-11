import React from 'react';
import Nav from "../Nav";
import "./ProfileScreen.scss"
import {auth} from "../firebase.js";

const ProfileScreen = ({email}) => {
    return (
        <section className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                         alt="Netflix avatar"/>
                    <div className="profileScreen__details">
                        <h2>{email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <button
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut">Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileScreen;