import React, { useState } from 'react';
import ChatWidget from './components/ChatWidget';
import LandingPage from './components/LandingPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Fab } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8E24AA',
    },
  },
});

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage onOpenChat={handleOpenChat} />
      {!isChatOpen && (
        <Fab
          color="primary"
          aria-label="chat"
          onClick={handleOpenChat}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            boxShadow: '0 0 10px #8E24AA',
            animation: 'pulse 2s infinite',
          }}
        >
          <ChatIcon />
        </Fab>
      )}
      {isChatOpen && <ChatWidget onClose={handleCloseChat} />}
    </ThemeProvider>
  );
};

export default App;