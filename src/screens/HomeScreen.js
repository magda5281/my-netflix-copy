import React from 'react';
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";

const HomeScreen = ({data, user}) => {
    return (
        <>
            <Nav/>
            {data.map((el) => {
                return el.key === "trendingToday" && <Banner key={el.api} movies={el.data}/>
            })}
            <section className="rows">
                {data.map((element) => {
                    return element.key !== "trendingToday" &&
                        <Row key={element.api} title={element.title} movies={element.data} rowTitle={element.key} user={user}/>
                })}
            </section>
        </>
    );
};

export default HomeScreen;