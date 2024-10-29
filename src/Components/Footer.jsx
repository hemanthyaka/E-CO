import React from "react";
import { Box, Grid, Typography, TextField, Button, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import AcUnitIcon from '@mui/icons-material/AcUnit';


const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ff9800",
        color: "white",
        padding: "40px 20px",
        bottom:0,
        width: "100%",
        minWidth:'500px',
      }}
    >
      {/* Footer Grid */}
      <Grid container spacing={5} sx={{width: "100%"}} justifyContent="center">
        {/* Company Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom fontFamily={'Outfit'}>
            Company
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'} sx={{ marginBottom: "10px" }}>
            About Us
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'} sx={{ marginBottom: "10px" }}>
            Careers
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'} sx={{ marginBottom: "10px" }}>
            Press & News
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'}>Contact Us</Typography>
        </Grid>

        {/* Customer Service */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom fontFamily={'Outfit'}>
            Customer Service
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'} sx={{ marginBottom: "10px" }}>
            Help Center
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'} sx={{ marginBottom: "10px" }}>
            Returns & Refunds
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'} sx={{ marginBottom: "10px" }}>
            Shipping & Delivery
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'}>Track Order</Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontFamily={'Outfit'} gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton sx={{ color: "white" }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <Instagram />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>

        {/* Newsletter Subscription */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontFamily={'Outfit'} gutterBottom>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body2" fontFamily={'Outfit'} sx={{ marginBottom: "10px" }}>
            Stay updated with the latest offers and products.
          </Typography>
          <Box component="form" sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              variant="outlined"
              placeholder="Your Email"
              size="small"
              fullWidth
              sx={{
                backgroundColor: "white",
                borderRadius: "4px",
                marginRight: "10px",
              }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FF4081", color: "white" }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: "1px solid #555",
          marginTop: "30px",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" fontFamily={'Outfit'} display={"flex"} justifyContent={"center"} alignItems={"center"} >
          &copy; {new Date().getFullYear()} <AcUnitIcon sx={{marginX:'7px'}} /> E-CO. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
