import React, { useRef } from 'react';
import { auth } from '../firebase';
import db from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../genericStyles/fonts.scss';
import './LoginScreen.scss';
import '../genericStyles/button.scss';

const LoginScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((cred) => {
        // Add a new document(user) in collection "users"
        db.collection('users')
          .doc(cred.user.uid)
          .set({
            userId: cred.user.uid,
            favourites: [],
          })
          .then(() => {
            console.log('Hello');
          });
      })
      .then(() => {
        alert('Your Reelbox demo account has been created.');
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error writing document: ', error);
      });
  };

  const logIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser.user.uid);
      })
      .catch((error) => {
        alert(error.message);
      });
    return navigate('/');
  };

  return (
    <section className='loginScreen '>
      <div className='loginScreen__body'>
        <div className='loginScreen__container'>
          <div className='loginScreen__main'>
            <h1>Sign in</h1>
            <form action='' className='loginScreen__form'>
              <div className='loginScreen__inputField'>
                <label htmlFor='email' className='loginScreen__inputLabel'>
                  <input
                    ref={emailRef}
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    placeholder='Email'
                    minLength='5'
                    maxLength='50'
                    className='loginScreen__input'
                  />
                </label>
              </div>
              <p className='loginScreen__inputError'>
                Please enter a valid email address or phone number.
              </p>

              <div className='loginScreen__inputField'>
                <label htmlFor='password' className='login__inputLabel'>
                  <input
                    ref={passwordRef}
                    type='password'
                    name='password'
                    id='password'
                    minLength='5'
                    maxLength='60'
                    placeholder='Password'
                    className='loginScreen__input'
                  />
                </label>
              </div>
              <p className='loginScreen__inputError'>
                Your password must contain between 4 and 60 characters.
              </p>

              <button type='submit' className='btn btn__login' onClick={logIn}>
                Sign in
              </button>
              <h4>
                <span className='loginScreen__signup__now'>
                  New to Reelbox?{' '}
                </span>
                <a href='/' className='loginScreen__link' onClick={register}>
                  Sign up now
                </a>
              </h4>
            </form>
          </div>
          <div className='loginScreen__formOther'>
            <div className='loginScreen__termsOfUse'>
              <p>
                <span>
                  Reelbox is a student portfolio demo. Please use a test email
                  and a password you don't use anywhere else.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          fontSize: '12px',
          color: 'gray',
          textAlign: 'center',
          marginTop: '10px',
        }}
      >
        Reelbox is an independent, non-commercial educational project.
      </p>
    </section>
  );
};

export default LoginScreen;
