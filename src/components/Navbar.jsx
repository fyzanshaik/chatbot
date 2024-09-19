// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Heritage India Museum
                </Typography>
                <Box>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About Us</Button>
                    <Button color="inherit">Exhibits</Button>
                    <Button color="inherit">Events</Button>
                    <Button color="inherit">Visit Us</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
