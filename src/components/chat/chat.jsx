import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './chat.css';

const socket = io('http://localhost:5000'); // Backend server URL

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'User1', text: 'Hi! How can I help you today?' },
    { user: 'User2', text: 'I\'m looking for information on vertical farming.' }
  ]);

  useEffect(() => {
    // Listen for messages from the server
    socket.on('receive message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Get chat history when connected
    socket.on('chat history', (history) => {
      setMessages(history);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('receive message');
      socket.off('chat history');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { user: 'User1', text: message }; // Customize with username
      socket.emit('send message', newMessage);
      setMessage(''); // Clear input field
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user === 'User1' ? 'user1' : 'user2'}`}>
            <strong>{msg.user}: </strong>{msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
