import { Box } from '@mui/material'
import React from 'react'
import UserCard from './UserCard'

const Users = ({ user }) => {
  return (
    <Box width="100%" minHeight="100vh" paddingTop="69px" pb="50px">
    {/* <Typography variant="h6" align="center" sx={{bgcolor:'#ffa726',p:2}}>PRODUCTS</Typography> */}
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} p={2}>
      {user.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </Box>
  </Box>
  )
}

export default Users
