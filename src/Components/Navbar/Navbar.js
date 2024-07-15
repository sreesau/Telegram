import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Example CSS file for styling

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="hamburger-menu" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className="navbar-center">
                Telegram
            </div>
            <div className="navbar-right">
                <div className="search-icon">
                    
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
