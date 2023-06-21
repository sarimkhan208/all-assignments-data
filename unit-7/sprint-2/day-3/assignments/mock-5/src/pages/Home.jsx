import React from 'react'
import { Box, Heading ,Icon,Image,Text} from '@chakra-ui/react'
import Navbar from '../components/Navbar'

import Sports from '../components/Sports'
import Offer from '../components/Offer'
import Teacher from '../components/Teacher'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <Box>
        {/* Navbar */}
        <Navbar/>

        {/* Welcome */}
       


        {/* Intern School Sport */}
        <Sports/>
        {/* Offer Section */}
        <Offer/>
        {/* Teacher Section */}
        <Teacher/>
        {/* Footer Section */}
        <Footer/>
        


    </Box>
  )
}

export default Home

