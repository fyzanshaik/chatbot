// App.jsx
import { useState } from 'react';
import ChatWidget from './ChatWidget';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Typography, Fab } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    primary: {
      main: '#BB86FC',
    },
  },
});

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          backgroundColor: 'background.default',
          color: 'white',
          p: 4,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Our Virtual Museum
        </Typography>
        <Typography variant="h6">
          Dive into the world of art and history. Explore our exhibits and book your tickets today!
        </Typography>

        {!isChatOpen && (
          <Fab
            color="primary"
            aria-label="chat"
            onClick={() => setIsChatOpen(true)}
            sx={{
              position: 'fixed',
              bottom: 32,
              right: 32,
              boxShadow: '0 0 10px #BB86FC',
              animation: 'pulse 2s infinite',
            }}
          >
            <ChatIcon />
          </Fab>
        )}
        {isChatOpen && <ChatWidget onClose={() => setIsChatOpen(false)} />}
      </Box>
    </ThemeProvider>
  );
};

export default App;
