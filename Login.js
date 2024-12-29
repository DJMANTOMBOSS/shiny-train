import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';

const Login = () => {
    const handleAuth = (platform) => {
        const baseURL =
            platform === 'YouTube'
                ? 'https://accounts.google.com/o/oauth2/auth'
                : 'https://accounts.spotify.com/authorize';

        const clientId = platform === 'YouTube' ? 'YOUR_YOUTUBE_CLIENT_ID' : 'YOUR_SPOTIFY_CLIENT_ID';
        const redirectUri = 'http://localhost:3000/auth/callback';
        const scopes =
            platform === 'YouTube'
                ? 'https://www.googleapis.com/auth/youtube.upload'
                : 'playlist-modify-public user-library-modify';

        window.location.href = `${baseURL}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${encodeURIComponent(
            scopes
        )}`;
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    ZAMUSIC-XFIRE Login
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAuth('YouTube')}
                    sx={{ margin: '10px', padding: '10px 20px', width: '200px' }}
                >
                    Login with YouTube
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleAuth('Spotify')}
                    sx={{ margin: '10px', padding: '10px 20px', width: '200px' }}
                >
                    Login with Spotify
                </Button>
            </Box>
        </Container>
    );
};

export default Login;