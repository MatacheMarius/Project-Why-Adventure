import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            Why Adventure
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <div className='footer-logo'>
            <p className='social-logo'>
              Join the Adventure!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
