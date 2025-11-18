import React from 'react';
import { Typography, Container, Paper, Button } from '@mui/material';
import { useRouteError, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as any;
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom color="error">
          ¡Oops! Página no encontrada
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          La página que buscas no existe o ha ocurrido un error.
        </Typography>
        {error?.statusText && (
          <Typography variant="body2" color="text.secondary">
            Error: {error.statusText}
          </Typography>
        )}
        <Button 
          variant="contained" 
          onClick={() => navigate('/')}
          sx={{ marginTop: 3 }}
        >
          Volver al Login
        </Button>
      </Paper>
    </Container>
  );
};

export default ErrorPage;