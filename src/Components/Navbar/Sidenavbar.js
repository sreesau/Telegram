import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faMoon, faSun, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Sidenavbar.css';

const Sidenavbar = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className={`sidebar ${darkMode ? 'dark' : 'light'}`}>
            <div className="profile-section">
                <div className="profile-info">
                    <img src='https://pngimg.com/uploads/telegram/telegram_PNG12.png' alt="Profile" className="profile-pic" />
                    <div className="profile-action" onClick={toggleDarkMode}>
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    </div>
                </div>
                <div className="profile-name">Name</div>
                <div className="profile-number">Number</div>
            </div>
            <div className="menu-section">
                <div className="menu-item">
                    <FontAwesomeIcon icon={faUser} />
                    <span>My Profile</span>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>Calls</span>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faCog} />
                    <span>Settings</span>
                </div>
            </div>
        </div>
    );
}

export default Sidenavbar;
