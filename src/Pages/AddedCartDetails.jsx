import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Divider, Button, Snackbar, Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../Redux/Action'; // Import the resetCart action

const CartPage = ({ setNotificationBarVisible }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading
  const [paymentStatus, setPaymentStatus] = useState(null); // Track payment success or failure
  const navigate = useNavigate();

  // Use useEffect to set the notification bar visibility on component mount
  useEffect(() => {
    setNotificationBarVisible(false);
  }, [setNotificationBarVisible]); // Only run this effect when setNotificationBarVisible changes

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handlePayment = () => {
    setLoading(true); // Start loading animation

    // Simulate payment processing
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1; // Random success or failure

      if (isSuccess) {
        setPaymentStatus('success');
        setSnackbarOpen(true); // Show success snackbar
        setLoading(false); // Stop loading
        setTimeout(() => {
          navigate('/'); // Redirect to home
          dispatch(resetCart()); // Reset cart state
        }, 2000);
      } else {
        setPaymentStatus('failure');
        setSnackbarOpen(true); // Show failure snackbar
        setLoading(false); // Stop loading
      }
    }, 4000);
  };

  if (cartItems.length === 0) {
    return (
      <Box p={3} minHeight={'80vh'} paddingTop="80px">
        <Typography variant="h5" align="center">
          Your cart is empty.
        </Typography>
      </Box>
    );
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box p={3} width='500px' margin={'auto'} paddingTop="80px" minHeight={'80vh'}   >
      <Typography variant="h5" align="center" mb={2}>
        YOUR CART
      </Typography>
      {cartItems.map((item) => (
        <Box key={item.id} mb={2} p={2} border="2px solid #000" bgcolor='#ffa726' color={'#fff'} borderRadius="8px" fontFamily={'Outfit'}>
          <Typography variant="body1" fontWeight="bold" fontFamily={'Outfit'}>
            {item.title}
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'}>
            Price: ${item.price} x {item.quantity}
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'}>
            Total: ${(item.price * item.quantity).toFixed(2)}
          </Typography>
        </Box>
      ))}
      <Divider />
      <Box mt={2}>
        <Typography variant="h6" align="center" fontFamily={'Outfit'}>
          Total Amount: ${totalAmount.toFixed(2)}
        </Typography>
      </Box>
      <Button  variant="contained" sx={{bgcolor:'#f57c00',fontFamily:'Outfit'}} fullWidth onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : `Pay $${totalAmount.toFixed(2)}`}
      </Button>

      {/* Loading Animation */}
      {loading && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          sx={{ transform: 'translate(-50%, -50%)', zIndex: 1000 }}
        >
          <CircularProgress size={60} />
        </Box>
      )}

      {/* Snackbar Component */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position at the top center
      >
        <Alert onClose={handleSnackbarClose} severity={paymentStatus === 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {paymentStatus === 'success' ? 'Payment Successful!' : 'Payment Failed! Please try again.'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CartPage;
