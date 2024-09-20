import React, { useRef, useEffect } from 'react';
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
    ThemeProvider,
    createTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#BB86FC',
        },
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
});

const ChatWidget = ({ onClose }) => {
    const { messages, sendMessage, isTyping } = useChatLogic();
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <ThemeProvider theme={theme}>
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
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                {/* Chat header */}
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'background.default',
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
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Museum Assistant
                        </Typography>
                    </Box>
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Messages */}
                <Box
                    sx={{
                        flex: 1,
                        p: 2,
                        overflowY: 'auto',
                        backgroundColor: 'background.default',
                    }}
                >
                    {messages.map((message, index) => (
                        <ChatMessage key={index} message={message} />
                    ))}
                    {isTyping && (
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                            The assistant is typing...
                        </Typography>
                    )}
                    <div ref={messagesEndRef} />
                </Box>

                {/* Input field */}
                <Box sx={{ p: 1.5, backgroundColor: 'background.paper' }}>
                    <form onSubmit={sendMessage}>
                        <TextField
                            fullWidth
                            placeholder="Type your message..."
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton type="submit" color="primary" size="small">
                                            <SendIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                sx: {
                                    backgroundColor: 'background.default',
                                    borderRadius: 2,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(255, 255, 255, 0.23)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(255, 255, 255, 0.23)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'primary.main',
                                        },
                                    },
                                },
                            }}
                            inputProps={{
                                style: {
                                    color: 'white',
                                },
                            }}
                        />
                    </form>
                </Box>
            </Paper>
        </ThemeProvider>
    );
};

export default ChatWidget;