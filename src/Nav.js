import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Nav.scss';
import movieBoardIcon from '../src/assets/icons8-movie-projector.png';
import { FaUserCircle } from 'react-icons/fa';

const tabs = [
  { to: '/', label: 'Main page' },
  { to: '/tv', label: 'Series and TV' },
  { to: '/movies', label: 'Movies' },
  { to: '/new', label: 'New' },
  { to: '/myList', label: 'My list' },
];

const Nav = () => {
  const [showSolidNav, setShowSolidNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setShowSolidNav(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    // Remove the listener when the nav unmounts (the old code never did).
    return () => window.removeEventListener('scroll', onScroll);
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
        {tabs.map((tab) => (
          <li key={tab.to}>
            {/* NavLink adds the "active" class to the tab for the current page */}
            <NavLink
              to={tab.to}
              end
              className={({ isActive }) => `nav__tab ${isActive ? 'nav__tab--active' : ''}`}
            >
              {tab.label}
            </NavLink>
          </li>
        ))}
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
