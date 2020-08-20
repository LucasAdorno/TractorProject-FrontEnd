import React from 'react';
import logoBahia from '../../assets/bahia.svg';
import './styles.css';

const Header = () => {
  return(
    <header>
      <h1>Project Tractor</h1>
      <img src={logoBahia} alt='bandeira da bahia' />
    </header>
  )
}

export default Header;