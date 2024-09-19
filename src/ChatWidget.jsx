import ChatMessage from "./ChatMessage";
import useChatLogic from "./useChatLogic";
// eslint-disable-next-line react/prop-types
const ChatWidget = ({ onClose }) => {
    const { messages, sendMessage, isTyping } = useChatLogic();

    return (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[32rem] flex flex-col">
            {/* Chat header */}
            <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h2 className="font-bold">Museum Chatbot</h2>
                <button onClick={onClose} className="text-white hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                ))}
                {isTyping && <div className="text-gray-500 italic">Chatbot is typing...</div>}
            </div>

            <div className="p-4 border-t">
                <form onSubmit={sendMessage} className="flex">
                    <input
                        type="text"
                        className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Type your message..."
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatWidget;