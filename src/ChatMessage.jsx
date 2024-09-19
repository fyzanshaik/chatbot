/* eslint-disable react/prop-types */
const ChatMessage = ({ message }) => {
    const isUser = message.sender === 'user';

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-[70%] p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
            >
                {message.content}
            </div>
        </div>
    );
};

export default ChatMessage;
