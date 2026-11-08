import React, { useState } from 'react';
import './SignupScreen.scss';
import '../genericStyles/button.scss';
import '../genericStyles/fonts.scss';
import LoginScreen from './LoginScreen';
import movieBoardIcon from '../assets/icons8-movie-projector.png';

const SignupScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <section className='signupScreen '>
      <div className='signupScreen__background'>
        <div className='signupScreen__gradient'>
          <header className='signupScreen__header '>
            <img
              src={movieBoardIcon}
              alt='Reelbox logo'
              className='signupScreen__logo'
            />
            {!signIn && (
              <button
                className='btn btn__signin--small'
                onClick={() => setSignIn(true)}
              >
                Sign in
              </button>
            )}
          </header>
          {signIn ? (
            <LoginScreen />
          ) : (
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
                  <p className='signupScreen__demoNotice'>
                    Demo project: please use a test email and a password you
                    don't use anywhere else.
                  </p>
                  <div className='signupScreen__input'>
                    <form action='' className='signupScreen__form'>
                      <label htmlFor='email' className='login__inputLabel'>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          autoComplete='email'
                          minLength='5'
                          maxLength='50'
                          placeholder='Email address'
                        />
                      </label>
                      <button
                        className='signupScreen__getStarted'
                        onClick={() => setSignIn(true)}
                      >
                        GET STARTED
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupScreen;
