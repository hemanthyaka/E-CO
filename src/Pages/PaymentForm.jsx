import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Box, Button, CircularProgress, Typography } from '@mui/material';

const PaymentForm = ({ totalAmount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    // Create a payment intent on your backend and retrieve client secret
    // Here we assume you have an endpoint that returns a client secret
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: totalAmount * 100 }), // Stripe uses smallest currency unit
    });
    const { clientSecret } = await response.json();

    // Confirm payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    if (result.error) {
      alert(`Payment failed: ${result.error.message}`);
      setLoading(false);
    } else if (result.paymentIntent.status === 'succeeded') {
      alert('Payment successful!');
      onSuccess();
      setLoading(false);
    }
  };

  return (
    <Box width="400px" mx="auto" mt={5} minHeight={'100vh'} pt={10} >
      <Typography variant="h5" align="center">
        Pay ₹{totalAmount.toFixed(2)}
      </Typography>
      <form onSubmit={handleSubmit}>
        <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={!stripe || loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : `Pay ₹${totalAmount.toFixed(2)}`}
        </Button>
      </form>
    </Box>
  );
};

export default PaymentForm;
