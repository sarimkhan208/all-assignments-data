import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box height={'60px'}  fontSize={'20px'} bg={'teal'} color={'white'} fontWeight={'semibold'} display={'flex'} justifyContent={'space-evenly'} >
        <RouterLink to='/' ><Box>Dashboard</Box></RouterLink>
        <RouterLink to='/signup' ><Box>Signup</Box></RouterLink>
        <RouterLink to='/login' ><Box>Login</Box></RouterLink>
    </Box>
  )
}

export default Navbar
