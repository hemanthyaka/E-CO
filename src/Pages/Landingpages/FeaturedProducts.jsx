// FeaturedProducts.js
import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const products = [
  { name: 'Product 1', price: '$99', image: 'https://source.unsplash.com/random/400x400?product' },
  { name: 'Product 2', price: '$129', image: 'https://source.unsplash.com/random/400x400?product' },
  { name: 'Product 3', price: '$89', image: 'https://source.unsplash.com/random/400x400?product' },
  { name: 'Product 4', price: '$59', image: 'https://source.unsplash.com/random/400x400?product' },
];

const FeaturedProducts = () => (
  <Box sx={{ my: 4 }}>
    <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
      Featured Products
    </Typography>
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardMedia component="img" image={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {product.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default FeaturedProducts;
