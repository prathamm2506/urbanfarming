import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './chat.css';

const socket = io('http://localhost:5000'); // Backend server URL

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'User1', text: 'Hi! How can I help you today?' },
    { user: 'User2', text: 'I\'m looking for information on vertical farming.' },
    { user: 'User1', text: 'Then you are the right place.' }
  ]);

  useEffect(() => {
    socket.on('receive message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    socket.on('chat history', (history) => {
      setMessages(history);
    });

    return () => {
      socket.off('receive message');
      socket.off('chat history');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { user: 'User1', text: message };
      socket.emit('send message', newMessage);
      setMessage('');
    }
  };

  return (
        
        <div id='chat'>
          <h1 className='mainh1'>Engage With Community</h1>
    <div className='chat-layout'>
      <div className='text-side'>
      <h2>Welcome to the Community Chat!</h2>
<p>Engage with fellow members and share your ideas.</p>
<p><strong>How to Use This Chat:</strong></p>
<ul>
  <li>Type your message in the input box below.</li>
  <li>Click "Send" to share your thoughts with others.</li>
  <li>Feel free to ask questions and provide feedback!</li>
</ul>
<p><strong>Community Guidelines:</strong></p>
<ul>
  <li>Be respectful and courteous to all members.</li>
  <li>No spamming or offensive language.</li>
  <li>Help maintain a positive environment for everyone.</li>
</ul>
<p>Happy chatting!</p>
      </div>
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
    </div>
    </div>
  );
};

export default Chat;
