import React from 'react';
import './Navigation.css';

const Navigation = ({ handleLocationChange }) => (
  <div className="navbar-container">
    <ul>
      <li onClick={() => handleLocationChange('Home')}>Home</li>
      <li onClick={() => handleLocationChange('Translation')}>Translation</li>
      <li onClick={() => handleLocationChange('WordsOfDay')}>
        {' '}
        Words Of The Day
      </li>
    </ul>
  </div>
);

export default Navigation;
