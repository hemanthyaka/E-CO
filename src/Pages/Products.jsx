import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import ResponsiveCard from './Cards'; // Your existing card component
import CartNotificationBar from './AddtocartBar'; // Assuming you have this

const Products = ({ products }) => {
  const [groupedProducts, setGroupedProducts] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Group products by category
    const grouped = products.reduce((acc, product) => {
      const category = product.category || 'Other'; // Default to 'Other' if no category exists
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});

    setGroupedProducts(grouped);
  }, [products]);

  // Categories to display on buttons (include "All" for displaying all products)
  const categories = ['All', ...Object.keys(groupedProducts)];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const productsToDisplay = selectedCategory === 'All' 
    ? products 
    : groupedProducts[selectedCategory] || [];

  return (
    <Box width="100%" minHeight="100vh" paddingTop="89px" pb="50px">
      {/* Category Buttons */}
      <Box 
        display="flex" 
        justifyContent="center" 
        gap={2} 
        mb={4} 
        flexWrap="wrap"
        width={"100%"}
        minWidth={"400px"}
      >
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleCategoryClick(category)}
            sx={{
              fontWeight: 'bold',
              borderRadius: '20px',
              padding: '8px 10px',
              fontSize: '13px',
              transition: 'background-color 0.3s, transform 0.3s',
              backgroundColor: selectedCategory === category ? '#FF6F00' : 'transparent',
              color: selectedCategory === category ? 'white' : '#FF6F00',
              '&:hover': {
                backgroundColor: '#FF6F00',
                color: 'white',
                transform: 'scale(1.05)',
              },
              '&.MuiButton-outlined': {
                border: '1px solid #FF6F00',
              }
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Display Products for the Selected Category */}
      <Box  display="flex" flex={10} flexWrap={"wrap"} gap={4} justifyContent="space-evenly">
        {productsToDisplay.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ResponsiveCard data={product} />
          </Grid>
        ))}
      </Box>

      <CartNotificationBar />
    </Box>
  );
};

export default Products;
