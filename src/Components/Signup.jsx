import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/authSlice';

const SignupForm = () => {
//   const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     dispatch(login({ name, email }));
//     // Add signup logic and redirect if needed
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
          Sign Up
        </Typography>
        <Box component="form" sx={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Full Name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
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
            // onClick={handleSignup}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupForm;
