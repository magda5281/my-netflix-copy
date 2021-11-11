import React from 'react';
import Nav from "../Nav";
import "./MyListScreen.scss";

const MyListScreen = () => {

    return (
        <section className="myListScreen">
            <Nav/>
            <div className="myListScreen__wrapper">
                <div className="myListScreen__poster">
                    Movie
                </div>
                <div className="myListScreen__poster">
                    Movie
                </div>
                <div className="myListScreen__poster">
                    Movie
                </div>
                <div className="myListScreen__poster">
                    Movie
                </div>
                <div className="myListScreen__poster">
                    Movie
                </div>
                <div className="myListScreen__poster">
                    Movie
                </div>
            </div>
        </section>
    );
};

export default MyListScreen;