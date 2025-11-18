import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Página Home de Óscar
        </Typography>
        <Typography variant="body1">
          ¡Bienvenido a la página principal!
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;