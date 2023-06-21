import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <Box widht='100%' height={'80px'} bg={'teal'} display={'flex'} p={'10px'} justifyContent={'space-between'} >
        <Box>
        <Heading>
            Social Media App
        </Heading>
        </Box>
        <Box>
            <RouterLink to='signin' ><Button mr={'20px'} >Sign In</Button></RouterLink>
            <RouterLink to='signup'><Button>Sign Up</Button></RouterLink>
        </Box>
    </Box>

  )
}

export default Navbar
