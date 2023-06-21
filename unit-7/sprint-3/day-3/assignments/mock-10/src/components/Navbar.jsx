import React from 'react'
import {Link} from 'react-router-dom'
import {Box} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box height={'50px'} bg={'teal'} color={'white'} display={'flex'} justifyContent={'space-around'} >
        <Box><Link to='/' >Dashboard</Link></Box>
        <Box><Link to='/login' >Login</Link></Box>
    </Box>
  )
}

export default Navbar
