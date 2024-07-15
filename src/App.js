import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';
import Subnavbar from './Components/Navbar/Subnavbar';
import Sidenavbar from './Components/Navbar/Sidenavbar';
import ChatList from './Components/ChatList';
import ChatMessages from './Components/ChatMessages';
import './App.css';
import BirthdaySection from './Components/Navbar/BirthdaySection';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredChats, setFilteredChats] = useState([]);

    useEffect(() => {
        // Fetch chat data from the API
        axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1')
            .then(response => {
                if (response.data && response.data.data && response.data.data.data) {
                    setChats(response.data.data.data);
                } else if (response.data && response.data.data) {
                    setChats(response.data.data);
                } else if (response.data) {
                    setChats(response.data);
                } else {
                    console.error('Unexpected response structure:', response);
                    setError('No chats found.');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching chats:', error);
                setError('Error fetching chats.');
                setLoading(false);
            });
    }, []);

    // Function to handle search input change
    const handleSearch = (searchTerm) => {
        const filtered = chats.filter(chat =>
            chat.creator.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredChats(filtered);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const closeSidebar = () => {
        setIsSidebarVisible(false);
    };

    const selectChat = (chatId) => {
        setSelectedChatId(chatId);
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    // Calculate counts for ongoing and ended statuses
    const ongoingCount = chats.filter(chat => chat.status === 'ongoing').length;
    const endedCount = chats.filter(chat => chat.status === 'ended').length;

    return (
        <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <Navbar onSearch={handleSearch} toggleSidebar={toggleSidebar} />
            {isSidebarVisible && (
                <>
                    <div className="overlay" onClick={closeSidebar}></div>
                    <Sidenavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </>
            )}
            {loading ? (
                <div className="loading-message">Loading...</div>
            ) : error ? (
                <div className="error-message">{error}</div>
            ) : (
                <>
                    <Subnavbar
                        ongoingCount={ongoingCount}
                        endedCount={endedCount}
                        onFilterChange={handleFilterChange}
                        activeFilter={activeFilter}
                        darkMode={darkMode}
                    />
                    <BirthdaySection />
                    <div className="main-content">
                        <ChatList
                            chats={filteredChats.length > 0 ? filteredChats : chats}
                            selectChat={selectChat}
                            filter={activeFilter}
                        />
                        <ChatMessages chatId={selectedChatId} />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
