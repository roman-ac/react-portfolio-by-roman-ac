import React from 'react';
import './styles/style.css';



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="navigator">
      <div>
        <h1 className='nav-head'>Roman<span> Ac</span></h1>
      </div>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#Aboutme"
              onClick={() => handlePageChange('Aboutme')}

              className={currentPage === 'Aboutme' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')}

              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#blog"
              onClick={() => handlePageChange('Contact')}

              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Resume"

              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavTabs;
