// ResponsiveCard.js
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
  IconButton,
  // useTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart, IncrementQuantity, DecrementQuantity } from '../Redux/Action';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';

const ResponsiveCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const theme = useTheme();
  const cartItems = useSelector((state) => state.cart.items);
  const lastAddedProductId = useSelector((state) => state.cart.lastAddedProductId);
  const cartItem = cartItems.find((item) => item.id === data.id);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch(AddToCart(data));
  };

  const handleRemoveFromCart = (event) => {
    event.stopPropagation();
    dispatch(RemoveFromCart(data.id));
  };

  const handleIncrement = (event) => {
    event.stopPropagation();
    dispatch(IncrementQuantity(data.id));
  };

  const handleDecrement = (event) => {
    event.stopPropagation();
    dispatch(DecrementQuantity(data.id));
  };

  const handleCardClick = () => {
    navigate(`/product/${data.id}`);
  };

  return (
    <Card
      sx={{
        width: { xs: '90%', sm: '250px', md: '350px' },
        minWidth:'250px',
        maxWidth:'350px',
        m: 'auto',
        boxShadow: 6,
        borderRadius: 4,
        border: '4px solid #f57c00',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 10,
        },
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={handleCardClick}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // height: { xs: '180px', sm: '200px', md: '250px' },
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '4px 4px 0 0',
          '&:hover .image': { transform: 'scale(0.7)' },
          width: '100%',
          height:'250px',
          p:10,
        }}
      >
        <CardMedia
          component="img"
          image={data.image}
          alt="Product Image"
          className="image"
          sx={{
            width: '100%',
            height: '350px',
            objectFit: 'contain',
            transition: 'transform 0.5s ease',
          }}
        />
      </Box>
      <CardContent sx={{ padding: 3,bgcolor:'#ffa726',fontFamily:'Outfit' }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          fontFamily={'Outfit'}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '100%',
          }}
        >
          {data.title}
        </Typography>
        <Typography fontFamily={'Outfit'} fontWeight={600} >${data.price}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            minHeight: '80px',
            height:'81px',
            overflowY: 'auto',
            fontSize: '0.95rem',
            overflow:'auto'
          }}
          className='custom-scrollbar'
        >
          {data.description}
        </Typography>
      </CardContent>
      <CardActions
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pb: 2,
        px: 2,
        width: '100%',
        fontFamily:'Outfit',
        backgroundColor: isHovered ? '#ffa726' : '#ffa726', // Change background color on hover
      }}
    >
      {cartItem && lastAddedProductId === data.id ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          gap={1}
        >
          <Box display="flex" justifyContent={"space-between"} alignItems="center" sx={{width:'120px',border:'3px solid #fff',borderRadius:'10px',bgcolor:'rgba(255, 255, 255, 0.2)'}} >
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
            color="#f57c00"
            variant="contained"
            sx={{
              width: '85%',
              backgroundColor: "#f57c00",
              mt: 1,
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#f57c00',
                border: '#fff',
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Remove from Cart
          </Button>
        </Box>
      ) : (
        <Button
          onClick={handleAddToCart}
          size="medium"
          color="primary"
          variant="contained"
          sx={{
            width: '100%',
            borderRadius: '10px',
            mt: 1,
            backgroundColor: '#f57c00',
            '&:hover': { backgroundColor: '#f57c00' },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Add to Cart
        </Button>
      )}
    </CardActions>
    </Card>
  );
};

export default ResponsiveCard;
