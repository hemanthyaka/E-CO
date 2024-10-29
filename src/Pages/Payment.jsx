// PaymentForm.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <Box>
      <Typography variant="h4">Payment Information</Typography>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Button type="submit" disabled={!stripe}>Pay Now</Button>
      </form>
    </Box>
  );
};

export default PaymentForm;
