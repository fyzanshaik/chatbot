import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
    Card,
    CardContent,
    CardMedia,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

import hero from '../assets/hero.jpg';
import about from '../assets/about.jpg';
import exhibit1 from '../assets/1.jpg';
import exhibit4 from '../assets/4.jpeg';
import exhibit3 from '../assets/3.jpg';
import events from '../assets/events.jpg';
import ext from '../assets/ext.jpg';

// Create a custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#FF6B6B', // Coral red
        },
        secondary: {
            main: '#4ECDC4', // Mint green
        },
        background: {
            default: '#F7F7F7',
            paper: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
        h2: {
            fontWeight: 700,
        },
        h4: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
    },
});

const LandingPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ backgroundColor: 'background.default' }}>
                {/* Hero Section */}
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Navbar />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Container maxWidth="md">
                            <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
                                Discover India's Rich Heritage
                            </Typography>
                            <Typography variant="h5" sx={{ color: '#fff', mb: 4, textAlign: 'center' }}>
                                Explore the treasures of India's past and present at the Heritage India Museum.
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 30, px: 4, py: 1.5 }}>
                                    Plan Your Visit
                                </Button>
                            </Box>
                        </Container>
                    </Box>
                </Box>

                {/* About Us Section */}
                <Box sx={{ py: 12 }}>
                    <Container>
                        <Grid container spacing={8} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    position: 'relative', '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: -20,
                                        left: -20,
                                        right: 20,
                                        bottom: 20,
                                        backgroundColor: 'secondary.main',
                                        zIndex: -1,
                                    }
                                }}>
                                    <img
                                        src={about}
                                        alt="About Us"
                                        style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}>
                                    About Us
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3 }}>
                                    The Heritage India Museum is dedicated to preserving and showcasing the rich cultural
                                    history of India. From ancient artifacts to contemporary art, our collections span
                                    thousands of years and offer a unique insight into the nation's diverse heritage.
                                </Typography>
                                <Button variant="outlined" color="primary" sx={{ borderRadius: 30, px: 4, py: 1 }}>
                                    Learn More
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Exhibits Section */}
                <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
                    <Container>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center', color: 'primary.main' }}>
                            Our Exhibits
                        </Typography>
                        <Grid container spacing={4}>
                            {[
                                { image: exhibit1, title: "Ancient Sculptures", description: "Explore the intricate craftsmanship of India's ancient sculptors." },
                                { image: exhibit4, title: "Traditional Textiles", description: "Discover the vibrant world of Indian textiles and their historical significance." },
                                { image: exhibit3, title: "Historical Manuscripts", description: "Delve into rare manuscripts that have shaped India's literary heritage." }
                            ].map((exhibit, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-10px)', boxShadow: 3 } }}>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={exhibit.image}
                                            alt={exhibit.title}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                                {exhibit.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {exhibit.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Events Section */}
                <Box sx={{ py: 12, backgroundColor: 'secondary.main' }}>
                    <Container>
                        <Grid container spacing={8} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: 'white' }}>
                                    Upcoming Events
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3, color: 'white' }}>
                                    Join us for a variety of events including cultural performances, workshops, and
                                    lectures that celebrate India's heritage.
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ borderRadius: 30, px: 4, py: 1.5 }}>
                                    View Events
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    position: 'relative', '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 20,
                                        left: 20,
                                        right: -20,
                                        bottom: -20,
                                        backgroundColor: 'primary.main',
                                        zIndex: -1,
                                    }
                                }}>
                                    <img
                                        src={events}
                                        alt="Events"
                                        style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Visit Us Section */}
                <Box sx={{ py: 12 }}>
                    <Container>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center', color: 'primary.main' }}>
                            Visit Us
                        </Typography>
                        <Grid container spacing={8}>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ height: '100%', p: 4, boxShadow: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                                        Location
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        Heritage India Museum,<br />
                                        123 Culture Street,<br />
                                        New Delhi, India
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                                        Hours
                                    </Typography>
                                    <Typography variant="body1">
                                        Monday - Friday: 10:00 AM - 6:00 PM<br />
                                        Saturday - Sunday: 11:00 AM - 7:00 PM
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    position: 'relative', height: '100%', '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: -20,
                                        left: -20,
                                        right: 20,
                                        bottom: 20,
                                        backgroundColor: 'secondary.main',
                                        zIndex: -1,
                                    }
                                }}>
                                    <img
                                        src={ext}
                                        alt="Visit Us"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Footer */}
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default LandingPage;