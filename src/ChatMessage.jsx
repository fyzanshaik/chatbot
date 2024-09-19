// ChatMessage.jsx
import { Typography, Box } from '@mui/material';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 1.5,
      }}
    >
      <Box
        sx={{
          maxWidth: '70%',
          p: 1.5,
          borderRadius: 2,
          backgroundColor: isUser ? 'primary.main' : '#2A2A2A',
          color: isUser ? '#000' : '#fff',
          boxShadow: isUser ? '0 0 10px #BB86FC' : 'none',
          animation: isUser ? 'fadeIn 0.5s' : 'fadeIn 0.5s',
        }}
      >
        {typeof message.content === 'string' || typeof message.content === 'number' ? (
          <Typography variant="body1">{message.content}</Typography>
        ) : (
          message.content
        )}
      </Box>
    </Box>
  );
};

export default ChatMessage;
