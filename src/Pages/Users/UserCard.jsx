import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Avatar, IconButton, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';

const UserCard = ({ user }) => {
  return (
    <Box >
    <Card sx={{ width: 300, borderRadius: 4, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
      <CardMedia
        component="img"
        height="140"
        image={user.coverImage || 'https://source.unsplash.com/random/300x140?store'}
        alt="Cover Image"
      />
      <CardContent sx={{ textAlign: 'center', padding: 3, position: 'relative' }}>
        <Avatar
          alt={user.name}
          src={user.profileImage || 'https://source.unsplash.com/random/150x150?face'}
          sx={{
            width: 80,
            height: 80,
            margin: 'auto',
            border: '4px solid white',
            position: 'absolute',
            top: -40,
            left: 'calc(50% - 40px)',
          }}
        />
        <Typography variant="h6" component="div" fontWeight={600} mt={3}>
          {user.name}
        </Typography>
        <Typography variant="h6" component="div" fontWeight={600} mt={0}>
          {user.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="center" gap={1}>
          <IconButton color="primary" size="small">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="secondary" size="small">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton color="default" size="small">
            <SettingsIcon />
          </IconButton>
        </Box>

      </CardContent>
    </Card>
    </Box>
  );
};

export default UserCard;
