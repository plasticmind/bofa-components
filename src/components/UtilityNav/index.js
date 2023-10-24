import React from 'react';
import './UtilityNav.css';

function UtilityNav() {
  return (
    <nav className="UtilityNav" role="navigation" aria-label="Top Menu">
      <ul className="UtilityNav-menu" role="menu">
        <li className="UtilityNav-item" role="menuitem"><a href="https://example.com">Personal</a></li>
        <li className="UtilityNav-item" role="menuitem"><a href="https://business.example.com">Small Business</a></li>
        <li className="UtilityNav-item" role="menuitem"><a href="https://wealth.example.com">Wealth Management</a></li>
        <li className="UtilityNav-item" role="menuitem"><a href="https://business.example.com">Businesses & Institutions</a></li>
        <li className="UtilityNav-item" role="menuitem"><a href="https://security.example.com">Security</a></li>
        <li className="UtilityNav-item" role="menuitem"><a href="https://about.example.com">About</a></li>
      </ul>
    </nav>
  );
}

export default UtilityNav;