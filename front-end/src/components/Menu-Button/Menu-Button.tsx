import React from 'react';
import './Menu-Button.css';

export default function MenuButton () {

  return (
    <button id="panel-btn" className="panel-btn hamburger hamburger--emphatic none" type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}