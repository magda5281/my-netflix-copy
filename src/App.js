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
    let stopListeningToList = () => {};
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      stopListeningToList();
      if (userAuth) {
        setUser(userAuth);
        setEmail(userAuth.email);
        const userDoc = db.collection('users').doc(userAuth.uid);
        // First visit as a guest: create this user's document so "My List" can be saved.
        // merge: true keeps any favourites already saved for this user.
        userDoc.set({ userId: userAuth.uid }, { merge: true });
        stopListeningToList = userDoc.onSnapshot((doc) => {
          setMyList((doc.exists && doc.data().favourites) || []);
        });
      } else {
        setUser('');
        setEmail('');
        setMyList([]);
      }
    });
    return () => {
      stopListeningToList();
      unsubscribe();
    };
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
