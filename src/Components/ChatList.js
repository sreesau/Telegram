import React from 'react';
import './ChatList.css';
import ChatMessages from './ChatMessages'; // Import ChatMessages component

const ChatList = ({ chats, selectChat,selectedChatId, filter, darkMode }) => {
    if (!chats) {
        console.log("Chats are undefined or null:", chats);
        return null;
    }

    const filteredChats = chats.filter(chat => {
        if (filter === 'all') return true;
        if (filter === 'regular') return chat.type === 'regular';
        if (filter === 'unread') return chat.status === 'ongoing';
        if (filter === 'personal') return chat.type === 'personal';
        return true;
    });

    return (
        <div className={`chat-list ${darkMode ? 'dark' : 'light'}`}>
            {filteredChats.length > 0 ? (
                filteredChats.map(chat => (
                    <div key={chat.id} className={`chat-item ${darkMode ? 'dark' : 'light'}`} onClick={() => selectChat(chat.id)}>
                        <div className="chat-info">
                            <span className={`chat-name ${darkMode ? 'dark' : 'light'}`}>{chat.creator.name || 'Unknown'}</span>
                            <span className="chat-last-message">{chat.message}</span>
                        </div>
                        {chat.msg_count > 0 && (
                            <span className={`chat-msg-count ${darkMode ? 'dark' : 'light'}`}>{chat.msg_count}</span>
                        )}
                        {/* Render ChatMessages component for the selected chat */}
                        {chat.id === selectedChatId && (
                            <ChatMessages chatId={chat.id} />
                        )}
                    </div>
                ))
            ) : (
                <div className={`empty-message ${darkMode ? 'dark' : 'light'}`}>No chats available</div>
            )}
        </div>
    );
}

export default ChatList;
