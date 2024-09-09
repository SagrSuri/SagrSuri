// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HexagonalLoader.css';  // Import your CSS file
import Back from '../../Back'

function Hexagonal() {
  return (
    <div className='body'>
      <Back/>
      <div className="hexagon" aria-label="Animated hexagonal ripples">
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
      <div className="hexagon__group">
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
      </div>
      <div className="hexagon__group">
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
      </div>
      <div className="hexagon__group">
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
      </div>
      <div className="hexagon__group">
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
      </div>
    </div>
    </div>
  );
}

export default Hexagonal;
