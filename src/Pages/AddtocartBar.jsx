import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartNotificationBar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.length;
  const navigate = useNavigate();

  if (itemCount === 0) return null; // Only show bar when there are items in the cart

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#ffb74d',
        border:'2px solid #fff',
        color: 'white',
        textAlign: 'center',
        boxShadow: 3,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="subtitle1" sx={{fontSize:{xs:'14px', md:'18px'}}} >
        {itemCount} item{itemCount > 1 ? 's' : ''} added to the cart
      </Typography>
      <Button sx={{fontSize:{xs:'14px', md:'18px'}}}  variant="outlined" color="inherit" onClick={() => navigate('/cart')}>
        View Cart
      </Button>
    </Box>
  );
};

export default CartNotificationBar;
