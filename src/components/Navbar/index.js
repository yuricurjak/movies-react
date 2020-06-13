import React from 'react';
import pipoca from '../../assets/cinema.svg';
import './index.css';

export default function Sidebar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top py-3 box-shadow color-nav">
      <div className="container p-0">
        <a className="navbar-brand logo" href="index.html">
          <img className="img-fluid h-100 w-100" src={pipoca} alt="Logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}