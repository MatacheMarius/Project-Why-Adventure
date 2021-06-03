import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LoginOrLogoutButton from "../LoginOrLogoutButton";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Why Adventure
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/PlanYourTrip' className='nav-links' onClick={closeMobileMenu}>Plan Your Trip</Link>
            </li>
            <li>

             <Link to='/trips' className='nav-links' onClick={closeMobileMenu}>Trips</Link>

            </li>
            <li className='nav-item'>
            <Link to='/mission'className='nav-links' onClick={closeMobileMenu}>Mission</Link>
            </li>
          
             
            <li className='nav-item'>
              <LoginOrLogoutButton />
            </li>
            

         
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
