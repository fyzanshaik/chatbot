import { useState } from 'react';
import ChatWidget from './ChatWidget';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative h-screen bg-gray-100">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Our Museum</h1>
        <p>Explore our exhibits and book your tickets today!</p>
      </div>

      <div className="fixed bottom-4 right-4">
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        )}
        {isChatOpen && <ChatWidget onClose={() => setIsChatOpen(false)} />}
      </div>
    </div>
  );
};

export default App;


