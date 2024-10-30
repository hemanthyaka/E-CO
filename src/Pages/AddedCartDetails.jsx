import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Divider, Button, Snackbar, Alert, CircularProgress, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { resetCart, IncrementQuantity, DecrementQuantity } from '../Redux/Action'; // Import quantity actions
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartPage = ({ setNotificationBarVisible }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const navigate = useNavigate();

  // Conversion rate (example: 1 USD = 83 INR)
  const convertToINR = (usd) => usd * 83;

  useEffect(() => {
    setNotificationBarVisible(false);
  }, [setNotificationBarVisible]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1;
      if (isSuccess) {
        setPaymentStatus('success');
        setSnackbarOpen(true);
        setLoading(false);
        setTimeout(() => {
          navigate('/');
          dispatch(resetCart());
        }, 2000);
      } else {
        setPaymentStatus('failure');
        setSnackbarOpen(true);
        setLoading(false);
      }
    }, 4000);
  };

  const handleIncrement = (id) => {
    dispatch(IncrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(DecrementQuantity(id));
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

  const totalAmount = cartItems.reduce((sum, item) => sum + convertToINR(item.price).toFixed(2) * item.quantity, 0);

  return (
    <Box p={3} width='500px' margin={'auto'} paddingTop="80px" minHeight={'80vh'}>
      <Typography variant="h5" align="center" mb={2} fontFamily={'Outfit'} >
        YOUR CART
      </Typography>
      {cartItems.map((item) => (
        <Box key={item.id} mb={2} position={'relative'} p={2} border="2px solid #000" bgcolor='#ffa726' color={'#fff'} borderRadius="8px" fontFamily={'Outfit'}>
          <Typography variant="body1" fontWeight="bold" fontFamily={'Outfit'}>
            {item.title}
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'}>
            Price:₹{convertToINR(item.price).toFixed(2)} x {item.quantity}
          </Typography>
          <Box display="flex" alignItems="center" mt={1} border="1px solid #fff" borderRadius={'8px'} width="110px" position={'absolute'} right={10} top={30} bgcolor='#fff' >
            <IconButton onClick={() => handleDecrement(item.id)} size="small">
              <RemoveIcon sx={{ color: '#f57c00' }} />
            </IconButton>
            <Typography mx={2}  fontFamily={'Outfit'} color={'#f57c00'} >{item.quantity}</Typography>
            <IconButton onClick={() => handleIncrement(item.id)} size="small">
              <AddIcon sx={{ color: '#f57c00' }} />
            </IconButton>
          </Box>
          <Typography variant="body2" fontFamily={'Outfit'}>
            Total: ₹{(convertToINR(item.price).toFixed(2) * item.quantity).toFixed(2)}
          </Typography>
        </Box>
      ))}
      <Divider />
      <Box mt={2}>
        <Typography variant="h6" align="center" fontFamily={'Outfit'}>
          Total Amount: ₹{totalAmount.toFixed(2)}
        </Typography>
      </Box>
      <Button
  variant="contained"
  sx={{ bgcolor: '#f57c00', fontFamily: 'Outfit' }}
  fullWidth
  onClick={handlePayment}
  disabled={loading}
>
  {loading ? 'Processing...' : `Pay ₹${totalAmount.toFixed(2)}`}
</Button>
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={paymentStatus === 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {paymentStatus === 'success' ? 'Payment Successful!' : 'Payment Failed! Please try again.'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CartPage;
