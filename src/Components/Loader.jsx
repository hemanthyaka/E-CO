import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AcUnitIcon from '@mui/icons-material/AcUnit';


const Loader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5" // light background for subtlety
    >
      <Box display="flex" alignItems="center" gap={2}>
        <AcUnitIcon sx={{ fontSize: 40, color: '#000' }} />
        <Typography variant="h5" color="#000" sx={{ fontWeight: 500 }}>
          E-CO
        </Typography>
      </Box>
      <CircularProgress
        size={60}
        thickness={5}
        sx={{
          color: '#f57c00',
          mt: 3,
          animation: 'spin 2s linear infinite',
          '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        }}
      />
      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
        Loading your shopping experience...
      </Typography>
    </Box>
  );
};

export default Loader;
