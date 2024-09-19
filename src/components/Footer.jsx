// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1E1E1E', color: '#fff', p: 4, mt: 8 }}>
            <Typography variant="body1" align="center">
                &copy; {new Date().getFullYear()} Heritage India Museum. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
