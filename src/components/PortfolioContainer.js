import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Aboutme');

  const renderPage = () => {
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <br></br>
      <Footer></Footer>
    </div>
  );
}
