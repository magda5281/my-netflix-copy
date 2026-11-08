import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';
import movieBoardIcon from '../src/assets/icons8-movie-projector.png';
import { FaUserCircle } from 'react-icons/fa';

const Nav = () => {
  const [showSolidNav, handleShowSolidNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShowSolidNav(true);
      } else handleShowSolidNav(false);
    });
    return window.removeEventListener('scroll', handleShowSolidNav(false));
  }, []);
  return (
    <nav className={`nav ${showSolidNav ? 'nav__solid' : 'nav__faded'}`}>
      <div className='nav__logoContainer'>
        <img
          src={movieBoardIcon}
          alt='Reelbox logo'
          className='nav__logo'
          onClick={() => navigate('/')}
        />
      </div>
      <ul className='nav__primary'>
        <li className='nav__tab'>Main page</li>
        <li className='nav__tab'>Series and Tv</li>
        <li className='nav__tab'>Movies</li>
        <li className='nav__tab'>New</li>
        <li className='nav__tab' onClick={() => navigate('/myList')}>
          My list
        </li>
      </ul>
      <div>
        <FaUserCircle
          aria-label='Profile'
          className='nav__avatar'
          color='white'
          size={30}
          onClick={() => navigate('/profile')}
        />
      </div>
    </nav>
  );
};

export default Nav;
