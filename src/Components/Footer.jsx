import React from "react";
import { Box, Grid, Typography, TextField, Button, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Link } from "react-router-dom";
import XIcon from '@mui/icons-material/X';


const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
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
              <Link to={'https://www.facebook.com/chinni.cr.7?mibextid=ZbWKwL'} target="_blank" style={{color:'white'}} >
              <Facebook  />
              </Link>
            </IconButton>
            <IconButton sx={{ color: "white" }}>
            <Link to={'https://x.com/Yaka_hemanth?t=ZsGE1A5degIx09U4DJ5lwg&s=09'} target="_blank" style={{color:'white'}} >
              <XIcon  />
              </Link>
            </IconButton>
            <IconButton sx={{ color: "white" }}>
            <Link to={'https://www.instagram.com/_hemanth_yaka_?igsh=MWV0ZXZvczljN2tpeQ=='} target="_blank" style={{color:'white'}} >
              <Instagram  />
              </Link>
            </IconButton>
            <IconButton sx={{ color: "white" }}>
            <Link to={'https://www.linkedin.com/in/yaka-hemanth-ba111227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target="_blank" style={{color:'white'}} >
              <LinkedIn  />
              </Link>
            </IconButton>
            <IconButton sx={{ color: "white" }}>
            <Link to={'https://youtube.com/@yakahemanth?si=0cu6pNoc08t07UWk'} target="_blank" style={{color:'white'}} >
              <YouTube  />
              </Link>
            </IconButton>
          </Box>
        </Grid>

        {/* Newsletter Subscription */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontFamily={'Outfit'} gutterBottom>
            Subscribe to Our Youtube Channel
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
              sx={{ backgroundColor: "#ff9800", color: "white" }}
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
