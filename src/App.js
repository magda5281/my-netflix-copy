import React from "react";
import {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";

import {requests} from "./api/requests";
import {API_KEY} from "./api/constants";

import Loader from "react-loader-spinner";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import {auth} from "./firebase";
import db from "./firebase";
import ProfileScreen from "./screens/ProfileScreen";

import "./genericStyles/reset.scss";
import "./genericStyles/fonts.scss";
import "./App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MyListScreen from "./screens/MyListScreen";

function App() {

    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [myList,setMyList]=useState([]);
console.log(myList)
    // listener to logged in or logged out state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                // console.log(userAuth)
                setUser(userAuth);
                setEmail(userAuth.email);
                db.collection('users').doc(userAuth.uid)
                    .onSnapshot((doc)=>{
                   if (doc.exists) {
                       setMyList(doc.data().favourites);
                   } else {
                       // doc.data() will be undefined in this case
                       console.log("No such document!");
                   }
                })

            } else {
                setUser("");
                setEmail("");
            }
        });
        return unsubscribe;
    }, []);

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
            margin="0 auto"
        />
    }

    if (isError) {
        return console.log("Error")
        // <Error />
    }

    return (
        <div className="App">
            <Router>
                {!user ? (
                    <SignupScreen/>
                ) : (
                    <Routes>
                        <Route exact path="/" element={<HomeScreen data={data} user={user}/>}/>
                        <Route exact path="/profile" element={<ProfileScreen email={email}/>}/>
                        <Route exact path="/myList" element={<MyListScreen myList={myList}/>}/>
                    </Routes>
                )}
            </Router>
        </div>
    )
}

export default App;

