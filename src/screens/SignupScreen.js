import React, { useState } from 'react';
import './SignupScreen.scss';
import '../genericStyles/button.scss';
import '../genericStyles/fonts.scss';
import { auth } from '../firebase';
import movieBoardIcon from '../assets/icons8-movie-projector.png';

const SignupScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Guest login: Firebase Anonymous Authentication gives each visitor a random
  // user ID. No email, password or other personal data is collected.
  const startDemo = () => {
    setLoading(true);
    setError('');
    auth.signInAnonymously().catch((err) => {
      console.error('Guest sign-in failed:', err);
      setError('Sorry, the demo could not start. Please try again.');
      setLoading(false);
    });
    // On success, App.js notices the signed-in user and shows the home screen.
  };

  return (
    <section className='signupScreen'>
      <div className='signupScreen__background'>
        <div className='signupScreen__gradient'>
          <header className='signupScreen__header'>
            <img
              src={movieBoardIcon}
              alt='Reelbox logo'
              className='signupScreen__logo'
            />
          </header>
          <div className='signupScreen__body'>
            <div className='signupScreen__container'>
              <div className='signupScreen__main'>
                <h1 className='signupScreen__title'>
                  Reelbox <br />
                  discover what to watch next.
                </h1>
                <h2>Browse trending films and series, and save your favourites.</h2>
                <h3>
                  A portfolio demo built with React and Firebase. Movie data
                  from TMDB.
                </h3>
                <button
                  className='signupScreen__getStarted'
                  onClick={startDemo}
                  disabled={loading}
                >
                  {loading ? 'Starting…' : 'TRY THE DEMO'}
                </button>
                {error && <p className='signupScreen__error'>{error}</p>}
                <p className='signupScreen__demoNotice'>
                  No sign-up needed. You'll browse as a guest. No email or
                  personal details are collected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupScreen;
