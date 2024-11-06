import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/authSlice';

const LoginForm = () => {
//   const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     dispatch(login({ email }));
//     // Redirect logic here if needed
//   };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Login
        </Typography>
        <Box component="form" sx={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            // onClick={handleLogin}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
