import React, { useState, useEffect } from 'react';
import { sendMessage, getChatHistory } from '../utils/api';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const history = await getChatHistory();
        setMessages(history.messages);
      } catch (error) {
        console.error('Error retrieving chat history:', error);
      }
    };

    fetchChatHistory();
  }, []);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');

    try {
      const response = await sendMessage(input);
      setMessages([...messages, newMessage, { text: response.reply, sender: 'bot' }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 p-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage} className="mt-2 w-full p-2 bg-blue-500 text-white rounded">Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;