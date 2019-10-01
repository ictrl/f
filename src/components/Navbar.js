import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

import logo from '../images/logo.png';
import account from '../images/acoount.png';
import search from '../images/search.png';
import cart from '../images/cart.png';

export default function Navbar() {
  return (
    <nav
      id='header'
      className='navbar navbar-inverse sticky-nav'
      style={{ marginTop: '0', paddingTop: '0' }}>
      <div className='navbar-header' style={{}}>
        <button
          type='button'
          data-target='#navbarCollapse'
          data-toggle='collapse'
          className='navbar-toggle'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <Link to='/' className='navbar-brand' style={{ marginLeft: '3rem' }}>
          <img
            style={{ marginLeft: '3rem' }}
            className='logo'
            src={logo}
            alt='Galleriq'
          />
        </Link>
      </div>
      <div id='navbarCollapse' style={{}} className='collapse navbar-collapse'>
        <ul className='nav navbar-nav nav-center '>
          <li>
            <Link className='navb' to='#'>
              Canvas Prints
            </Link>
          </li>
          <li>
            <Link className='navb' to='/CanvasPrint'>
              Wall Art
            </Link>
          </li>
          <li>
            <Link className='navb' to='/CanvasPrint'>
              Premium Prints
            </Link>
          </li>
          <li>
            <Link className='navb' to='/CanvasPrint'>
              Canvas Ideas
            </Link>
          </li>
          <li>
            <Link className='navb' to='/catalog'>
              Offers
            </Link>
          </li>
          <li>
            <Link className='navb' to='/filter'>
              Blog{' '}
            </Link>
          </li>
          &nbsp;
          <li>
            <Link className='btn btn-warning nav-btn' to='/CreateYourPrint'>
              &nbsp;Create a Canvas
            </Link>
          </li>
        </ul>
        <ul className='nav navbar-nav navbar-right'>
          <li>
            <Link to='#' className='img-bg-rm'>
              <img src={search} alt='' />
            </Link>
          </li>
          <li>
            <Link to='/cart' className='img-bg-rm'>
              <img style={{ marginRight: '2.4rem' }} src={cart} alt='' />
            </Link>
          </li>
          <li>
            <Link className='login-nav' to>
              <img src={account} alt='' />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
