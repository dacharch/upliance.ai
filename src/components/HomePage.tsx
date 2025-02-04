import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate(); // Corrected destructuring

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: '100%',
        height: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Counter Box */}
      <Paper
        onClick={() => navigate('/counter')}
        sx={{
          flex: 1,
          margin: '0 10px',
          padding: '20px',
          boxShadow: 3,
          borderRadius: '8px',
          textAlign: 'center',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          cursor: 'pointer', // Adds pointer cursor
          '&:hover': { boxShadow: 6 }, // Hover effect
        }}
      >
        <Typography variant="h5">Counter Page</Typography>
      </Paper>

      {/* Form Box */}
      <Paper
        onClick={() => navigate('/form')}
        sx={{
          flex: 1,
          margin: '0 10px',
          padding: '20px',
          boxShadow: 3,
          borderRadius: '8px',
          textAlign: 'center',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': { boxShadow: 6 },
        }}
      >
        <Typography variant="h5">Form Page</Typography>
      </Paper>

      {/* Editor Box */}
      <Paper
        onClick={() => navigate('/editor')}
        sx={{
          flex: 1,
          margin: '0 10px',
          padding: '20px',
          boxShadow: 3,
          borderRadius: '8px',
          textAlign: 'center',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': { boxShadow: 6 },
        }}
      >
        <Typography variant="h5">Editor Page</Typography>
      </Paper>
    </Box>
  );
};

export default HomePage;
