import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Container, Typography, Paper, Box } from '@mui/material';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            window.location.href = '/';
        }
    }, [user]);

    if (!user) return <div>Loading...</div>;

    return (
        <Container>
            <Paper sx={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    Welcome, {user.email}
                </Typography>
                <Box sx={{ marginBottom: '10px' }}>
                    <Typography variant="h6">Platform: {user.platform}</Typography>
                </Box>
                <button onClick={logout}>Logout</button>
            </Paper>
        </Container>
    );
};

export default Dashboard;