import React from 'react';
import { Typography, Container, Paper, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../store';
import { authActions } from '../store/authSlice';

const Home = () => {
  const userData = useSelector((state: RootState) => state.authenticator);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log('Datos del usuario:', userData);

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Página Home de Óscar
        </Typography>
        
        <Typography variant="body1">
          Bienvenido <b>{userData.userName}</b> — Rol: {userData.userRol}
        </Typography>
        
        <Typography variant="body1" sx={{ mt: 2 }}>
          ¡Bienvenido a la página principal!
        </Typography>

        <Button variant="contained" color="error" sx={{ mt: 3 }} onClick={handleLogout}>
          SALIR
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;