import React, { useState } from 'react';
import './Subnavbar.css';

const Subnavbar = ({ ongoingCount, endedCount, onFilterChange, activeFilter, darkMode }) => {
    const [activeItem, setActiveItem] = useState(activeFilter || 'all');

    const handleItemClick = (item) => {
        setActiveItem(item);
        onFilterChange(item); 
    };

    return (
        <div className={`subnavbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div 
                className={`subnavbar-item ${activeItem === 'all' ? 'active' : ''}`} 
                onClick={() => handleItemClick('all')}
            >
                All
                <span className="badge">{ongoingCount + endedCount}</span>
            </div>
            <div 
                className={`subnavbar-item ${activeItem === 'regular' ? 'active' : ''}`} 
                onClick={() => handleItemClick('regular')}
            >
                Regular
                <span className="badge">{ongoingCount}</span>
            </div>
            <div 
                className={`subnavbar-item ${activeItem === 'unread' ? 'active' : ''}`} 
                onClick={() => handleItemClick('unread')}
            >
                Unread
                <span className="badge">{endedCount}</span>
            </div>
            <div 
                className={`subnavbar-item ${activeItem === 'personal' ? 'active' : ''}`} 
                onClick={() => handleItemClick('personal')}
            >
                Personal
                <span className="badge">{ongoingCount + endedCount}</span>
            </div>
        </div>
    );
}

export default Subnavbar;
