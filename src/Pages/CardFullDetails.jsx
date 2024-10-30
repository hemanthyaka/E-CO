/* eslint-disable no-unused-vars */
// FullCardPage.js
import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, useTheme, Rating, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart, IncrementQuantity, DecrementQuantity } from '../Redux/Action';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FullCardPage = ({ products, setNotificationBarVisible }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const theme = useTheme();
  const product = products.find((prod) => prod.id === parseInt(id));
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const [isHovered, setIsHovered] = useState(false);

  const convertToINR = (usd) => usd * 83;

  if (!product) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <Typography variant="h5">Product not found.</Typography>
      </Box>
    );
  }

  const handleAddToCart = () => {
    dispatch(AddToCart(product));
    setNotificationBarVisible(true);
  };

  const handleRemoveFromCart = () => {
    dispatch(RemoveFromCart(product.id));
  };

  const handleIncrement = () => {
    dispatch(IncrementQuantity(product.id));
  };

  const handleDecrement = () => {
    dispatch(DecrementQuantity(product.id));
  };

  return (
    <Box padding={{ xs: 2, md: 4 }} marginTop="70px">
      <Card
        sx={{
          width: '100%',
          minHeight: '500px',
          margin: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          boxShadow: 8,
          borderRadius: 4,
          overflow: 'hidden',
          border: "1px solid #f57c00",
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 10,
          },
        }}
      >
        {/* Product Image Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            width: { xs: '100%', md: '30%' },
            borderRight: '1px solid #e0e0e0',
            py: '20px',
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              width: { xs: '100%', md: '50%' },
              height: { xs: '300px', md: '100%' },
              objectFit: 'contain',
              transition: 'transform 0.4s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          />
        </Box>

        {/* Product Details Section */}
        <CardContent
          sx={{
            flex: 1,
            padding: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: '#ffe0b2',
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom fontFamily={'Outfit'}>
            {product.title}
          </Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <Rating value={product.rating?.rate || 0} precision={1} readOnly />
            <Typography variant="body2" color="text.secondary" ml={1} fontFamily={'Outfit'}>
              ({product.rating?.count} sold)
            </Typography>
          </Box>
          <Typography fontFamily={'Outfit'}> <strong>Category:</strong> {product.category}</Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            fontFamily={'Outfit'}
            sx={{
              mb: 3,
              fontSize: '1rem',
              lineHeight: 1.6,
              textAlign: 'justify',
              overflowY: 'auto',
              maxHeight: { xs: '150px', md: '200px' },
            }}
            className='custom-scrollbar'
          >
            {product.description}
          </Typography>
          <Typography
            fontFamily={'Outfit'}
            variant="h5"
            color="black"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Price: ₹{convertToINR(product.price).toFixed(2)}
          </Typography>

          {/* Cart Button Section */}
          <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            {cartItem ? (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
                width="100%"
              >
               <Box display="flex" justifyContent={"space-between"} alignItems="center" sx={{width:'120px',border:'3px solid #f57c00',borderRadius:'10px',bgcolor:'rgba(255, 255, 255, 0.8)'}} >
            <IconButton
              onClick={handleDecrement}
              color="primary"
              size="small"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <RemoveIcon sx={{color:'black'}} />
            </IconButton>
            <Typography variant="body1" mx={2}>
              {cartItem.quantity}
            </Typography>
            <IconButton
              onClick={handleIncrement}
              color="primary"
              size="small"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AddIcon sx={{color:'black'}} />
            </IconButton>
          </Box>
                <Button
                  onClick={handleRemoveFromCart}
                  size="small"
                  variant="contained"
                  sx={{
                    width: '85%',
                    backgroundColor: "#f57c00",
                    color: 'white',
                    borderRadius: '10px',
                  }}
                >
                  Remove from Cart
                </Button>
              </Box>
            ) : (
              <Button
                variant="contained"
                color="primary"
                size="large"
                fontFamily={'Outfit'}
                onClick={handleAddToCart}
                sx={{
                  mt: 'auto',
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '500px' },
                  alignSelf: 'center',
                  backgroundColor: '#f57c00',
                  transition: 'all 0.3s ease',
                }}
              >
                Add to Cart
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FullCardPage;
