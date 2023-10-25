import React from 'react';
import './UtilityNav.css';

function UtilityNav({ activeItem }) {
  const links = [
    { name: 'Personal', url: 'https://example.com' },
    { name: 'Small Business', url: 'https://business.example.com' },
    { name: 'Wealth Management', url: 'https://wealth.example.com' },
    { name: 'Businesses & Institutions', url: 'https://business.example.com' },
    { name: 'Security', url: 'https://security.example.com' },
    { name: 'About', url: 'https://about.example.com' },
  ];

  return (
    <nav className="UtilityNav" role="navigation" aria-label="Top Menu">
      <ul className="UtilityNav-menu" role="menu">
        {links.map((link, index) => (
          <li 
            key={index} 
            className={`UtilityNav-item ${link.name === activeItem ? 'active' : ''}`} 
            role="menuitem"
          >
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default UtilityNav;