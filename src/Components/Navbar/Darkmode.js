import React, { useState } from 'react';
import Navbar from './Navbar/navbar';
import Subnavbar from './Navbar/Subnavbar';
import Sidenavbar from './Navbar/Sidenavbar'; 
import ChatList from '../ChatList';
import './App.css'; 

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
        // Optionally perform any cleanup or additional actions upon closing the sidebar
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <Navbar/>
            <Sidenavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Subnavbar darkMode={darkMode} onClose={handleCloseSidebar} />
            <ChatList darkMode={darkMode}  />
        </div>
    );
}

export default App;
