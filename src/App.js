import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import { auth } from './firebase';
import db from './firebase';
import ProfileScreen from './screens/ProfileScreen';

import './genericStyles/reset.scss';
import './genericStyles/fonts.scss';
import './App.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import MyListScreen from './screens/MyListScreen';

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(userAuth);
        setEmail(userAuth.email);
        db.collection('users')
          .doc(userAuth.uid)
          .onSnapshot((doc) => {
            if (doc.exists) {
              setMyList(doc.data().favourites);
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!');
            }
          });
      } else {
        setUser('');
        setEmail('');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className='App'>
      <Router>
        {!user ? (
          <SignupScreen />
        ) : (
          <Routes>
            <Route exact path='/' element={<HomeScreen user={user} />} />
            <Route
              exact
              path='/profile'
              element={<ProfileScreen email={email} />}
            />
            <Route
              exact
              path='/myList'
              element={<MyListScreen myList={myList} />}
            />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
