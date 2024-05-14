import React from 'react';
import ChatInterface from '../components/ChatInterface';

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <ChatInterface />
      </div>
    </div>
  );
};

export default Home;
