import React from 'react';
import { Link } from 'react-router-dom';

import { CartWidget } from '../cart/CartWidget';

export const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
      <Link to='/' className='navbar__logo'>
  <img src='https://i.postimg.cc/3JXvySgk/logoglobal.png' alt='Logo' />
</Link>
        <ul className='navbar__logo'>
          <Link to='/' className='navbar__logo-item'>
            Inicio
          </Link>
          <Link to='/category/baile' className='navbar__logo-item'>
            Baile
          </Link>
          <Link to='/category/cocina' className='navbar__logo-item'>
            Cocina
          </Link>
          <Link to='/category/idiomas' className='navbar__logo-item'>
            Idiomas
          </Link>
          <Link to='/cart' className='navbar__logo-item'>
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </header>
  );
};
