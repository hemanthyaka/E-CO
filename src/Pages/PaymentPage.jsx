import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { resetCart } from '../Redux/Action';
import PaymentForm from './PaymentForm';
import { Button, Typography, Box } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';


const stripePromise = loadStripe('YOUR_PUBLIC_STRIPE_API_KEY');

const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const convertToINR = (usd) => usd * 83;
  const totalAmount = cartItems.reduce((sum, item) => sum + convertToINR(item.price).toFixed(2) * item.quantity, 0);

  const handlePaymentSuccess = () => {
    dispatch(resetCart());
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const handleStripePayment = () => {
    setPaymentMethod('card');
  };

  const handleUPIPayment = () => {
    // Check if Razorpay is loaded
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please check your internet connection.");
      return;
    }
  
    const options = {
      key: 'https://api.razorpay.com/v1', 
      amount: totalAmount * 100,
      currency: 'INR',
      name: 'E-CO',
      description: 'Payment for your order',
      image: <AcUnitIcon />,
      handler: (response) => {
        handlePaymentSuccess();
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '1234567890'
      },
      theme: {
        color: '#3399cc'
      }
    };
    
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <Box mt={15} width="400px" mx="auto" minHeight="80vh">
      {!paymentMethod ? (
        <Box textAlign="center">
          <Typography variant="h5" mb={3}>
            Select Payment Method
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleStripePayment}
            sx={{ mb: 2, width: '100%' }}
          >
            Pay with Credit/Debit Card
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleUPIPayment}
            sx={{ width: '100%' }}
          >
            Pay with UPI (PhonePe, GPay, Paytm)
          </Button>
        </Box>
      ) : (
        <Elements stripe={stripePromise}>
          <PaymentForm totalAmount={totalAmount} onSuccess={handlePaymentSuccess} />
        </Elements>
      )}
    </Box>
  );
};

export default PaymentPage;
