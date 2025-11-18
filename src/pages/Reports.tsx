import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Reports = () => {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Página Reports de Óscar
        </Typography>
        <Typography variant="body1">
          Esta es la página de reportes.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Reports;