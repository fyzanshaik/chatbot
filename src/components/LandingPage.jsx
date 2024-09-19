// src/components/LandingPage.jsx
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
} from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: `url('/assets/images/hero.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '80vh',
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
                        backdropFilter: 'rgba(0,0,0,0.5)',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                    }}
                >
                    <Container>
                        <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold', mb: 2 }}>
                            Discover India's Rich Heritage
                        </Typography>
                        <Typography variant="h5" sx={{ color: '#ddd', mb: 4 }}>
                            Explore the treasures of India's past and present at the Heritage India Museum.
                        </Typography>
                        <Button variant="contained" color="primary" size="large">
                            Plan Your Visit
                        </Button>
                    </Container>
                </Box>
            </Box>

            {/* About Us Section */}
            <Box sx={{ py: 8 }}>
                <Container>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <img
                                src="/assets/images/about.jpg"
                                alt="About Us"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                About Us
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                The Heritage India Museum is dedicated to preserving and showcasing the rich cultural
                                history of India. From ancient artifacts to contemporary art, our collections span
                                thousands of years and offer a unique insight into the nation's diverse heritage.
                            </Typography>
                            <Button variant="outlined" color="primary">
                                Learn More
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Exhibits Section */}
            <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                        Exhibits
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/assets/images/exhibit1.jpg"
                                    alt="Exhibit 1"
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Ancient Sculptures
                                    </Typography>
                                    <Typography variant="body2">
                                        Explore the intricate craftsmanship of India's ancient sculptors.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/assets/images/exhibit2.jpg"
                                    alt="Exhibit 2"
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Traditional Textiles
                                    </Typography>
                                    <Typography variant="body2">
                                        Discover the vibrant world of Indian textiles and their historical significance.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/assets/images/exhibit3.jpg"
                                    alt="Exhibit 3"
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Historical Manuscripts
                                    </Typography>
                                    <Typography variant="body2">
                                        Delve into rare manuscripts that have shaped India's literary heritage.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Events Section */}
            <Box sx={{ py: 8 }}>
                <Container>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Upcoming Events
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Join us for a variety of events including cultural performances, workshops, and
                                lectures that celebrate India's heritage.
                            </Typography>
                            <Button variant="outlined" color="primary">
                                View Events
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                src="/assets/images/events.jpg"
                                alt="Events"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Visit Us Section */}
            <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                        Visit Us
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Location
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Heritage India Museum,<br />
                                123 Culture Street,<br />
                                New Delhi, India
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Hours
                            </Typography>
                            <Typography variant="body1">
                                Monday - Friday: 10:00 AM - 6:00 PM<br />
                                Saturday - Sunday: 11:00 AM - 7:00 PM
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                src="/assets/images/visit.jpg"
                                alt="Visit Us"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default LandingPage;
