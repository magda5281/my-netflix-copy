import "./reset.scss";
import "./App.scss";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {useState, useEffect} from "react";
import {requests} from "./api/requests";
import {API_KEY} from "./api/constants";

import Row from "./Row.js";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {

    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);

        Promise.all(requests.map((request) => {
            return fetch(request.api, {headers: {Authorization: API_KEY}})
                .then((response) => response.json())
                .then((responseJson) => {
                    return {...request, data: responseJson.results}
                })
        }))
            .then((newData) => {
                // console.log(newData)
                setData(newData);
            })
            .catch((err) => {
                console.error("ERROR!", err)
                setIsError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])
    if (loading) {
        return <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
    }
    //
    // if (isError) {
    //     return <Error />
    // }
    return (
        <div className="App">
            <Nav/>
            {data.map((el) => {
                return el.key === "trendingToday" && <Banner key={el.api} movies={el.data}/>
            })}
            <section className="rows">
                {data.map((element) => {
                    return element.key !== "trendingToday" &&
                        <Row key={element.api} title={element.title} movies={element.data} rowTitle={element.key}/>
                })}
            </section>
        </div>
    );
}

export default App;

