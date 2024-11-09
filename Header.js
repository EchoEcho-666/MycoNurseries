import React from 'react';
import './Header.css'; // Create a separate CSS file for component styling

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src="assets/logo.png" alt="MycoNurseries Logo" className="logo" />
        <div className="title-section">
          <h1>MycoNurseries</h1>
          <p className="catchphrase">Promoting sustainability through fungiculture</p>
        </div>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About MycoNurseries</a></li>
          <li><a href="#team">Meet the Team</a></li>
          <li><a href="#cta">Get Involved</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
