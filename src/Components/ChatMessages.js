import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChatMessage.css';

const ChatMessages = ({ chatId }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        setLoading(true); // Set loading state to true when fetching starts
        setError(null); // Reset error state

        if (chatId) {
            axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`)
                .then(response => {
                    console.log('API Response:', response.data); // Log API response for debugging
                    if (response.data.status === "success") {
                        setMessages(response.data.data); // Set messages state with data from API response
                        setLoading(false); // Set loading state to false after fetching completes
                    } else {
                        setError('Failed to fetch messages'); // Handle API error states
                        setLoading(false); // Set loading state to false on error
                    }
                })
                .catch(error => {
                    console.error('Error fetching messages:', error);
                    setError('Error fetching messages');
                    setLoading(false); // Set loading state to false on error
                });
        }
    }, [chatId]);

    if (loading) {
        return <div>Loading messages...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (messages.length === 0) {
        return <div>No messages available</div>;
    }

    return (
        <div className="chat-messages">
            {messages.map(message => (
                <div key={message.id} className="message-item">
                    <div className="message-sender">{message.sender.name}</div>
                    <div className="message-content">{message.message}</div>
                    <div className="message-timestamp">{new Date(message.created_at).toLocaleString()}</div>
                </div>
            ))}
            <div className="message-input">
                <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                />
            </div>
        </div>
    );
}

export default ChatMessages;
