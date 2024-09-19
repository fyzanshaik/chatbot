// ChatWidget.jsx
import ChatMessage from '../ChatMessage';
import useChatLogic from '../useChatLogic';
import monaLisa from '../assets/monalisa-icon.png';
import {
    Box,
    IconButton,
    TextField,
    InputAdornment,
    Paper,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

// eslint-disable-next-line react/prop-types
const ChatWidget = ({ onClose }) => {
    const { messages, sendMessage, isTyping } = useChatLogic();

    return (
        <Paper
            elevation={12}
            sx={{
                position: 'fixed',
                bottom: 80,
                right: 32,
                width: 360,
                height: 520,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#1E1E1E',
                borderRadius: 2,
                overflow: 'hidden',
            }}
        >
            {/* Chat header */}
            <Box
                sx={{
                    backgroundColor: 'primary.main',
                    color: '#FFFFFF',
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={monaLisa}
                        alt="Chatbot Icon"
                        style={{ width: 30, height: 30, marginRight: 8 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
                        Chat Bot
                    </Typography>
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon sx={{ color: '#FFFFFF' }} />
                </IconButton>
            </Box>


            {/* Messages */}
            <Box
                sx={{
                    flex: 1,
                    p: 2,
                    overflowY: 'auto',
                    backgroundColor: '#121212',
                }}
            >
                {messages.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                ))}
                {isTyping && (
                    <Typography variant="body2" sx={{ color: 'gray', fontStyle: 'italic' }}>
                        The assistant is typing...
                    </Typography>
                )}
            </Box>

            {/* Input field */}
            <Box sx={{ p: 1.5, backgroundColor: '#1E1E1E' }}>
                <form onSubmit={sendMessage}>
                    <TextField
                        fullWidth
                        placeholder="Type your message..."
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton type="submit" color="primary">
                                        <SendIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            sx: {
                                backgroundColor: '#2A2A2A',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#2A2A2A',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#2A2A2A',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#2A2A2A',
                                    },
                                },
                            },
                        }}
                        inputProps={{
                            style: {
                                color: 'white',
                            },
                            placeholder: 'Type your message...',
                        }}
                    />
                </form>
            </Box>

        </Paper>
    );
};

export default ChatWidget;
