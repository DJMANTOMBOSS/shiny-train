import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';

const UploadMusic = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleUpload = () => {
        axios
            .post('http://localhost:3000/upload', { title, description })
            .then((response) => setMessage(response.data))
            .catch((error) => setMessage('Upload failed. Try again.'));
    };

    return (
        <Container>
            <Paper sx={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    Upload Your Music
                </Typography>
                <Box sx={{ marginBottom: '20px' }}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ marginBottom: '20px' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleUpload}
                        sx={{ padding: '10px' }}
                    >
                        Upload
                    </Button>
                </Box>
                {message && <Typography variant="body1">{message}</Typography>}
            </Paper>
        </Container>
    );
};

export default UploadMusic;