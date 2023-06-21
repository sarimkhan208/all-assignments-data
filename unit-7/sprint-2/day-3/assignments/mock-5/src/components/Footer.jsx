import { Box, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {GrTwitter,GrLinkedin} from 'react-icons/gr'
// import {BsFacebook,BsPinterest} from 'react/icons/bs'

const Footer = () => {
  return (
    <Box  bg={'blue.500'}>
        <Box color={'white'} gap={'20px'} display={'grid'} gridTemplateColumns={{base:'repeat(1,1fr)',sm:'repeat(3,1fr)'}} p={'10'} >
        <Box>
            <Image src='https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo2_footer.png' />
            <Text color={'white'} >
            Users and submit their own items. You can create different packages and by connecting with your PayPal or Stripe account charge users for registration
            </Text>

            <Box display={'flex'} ju >
                <Icon mr={'5'} color={'white'} as={GrTwitter}/>
                <Icon mr={'5'} color={'white'} as={GrLinkedin}/>
                <Icon mr={'5'} color={'white'} as={GrLinkedin}/>
                <Icon mr={'5'} color={'white'} as={GrTwitter}/>
            </Box>
        </Box>

        <Box textAlign={'center'} >
            <Box fontSize={'20px'} fontWeight={'bold'} >Quick Link</Box>
            <Box mt={'2'}>Class</Box>
            <Box mt={'2'}>Join Us</Box>
            <Box mt={'2'}>About</Box>
            <Box mt={'2'}>Blog</Box>
            <Box mt={'2'}>Event</Box>

        </Box>

        <Box textAlign={'center'} >
            <Box fontSize={'20px'} fontWeight={'bold'} >Quick Link</Box>
            <Box mt={'2'}>Class</Box>
            <Box mt={'2'}>Join Us</Box>
            <Box mt={'2'}>About</Box>
            <Box mt={'2'}>Blog</Box>
            <Box mt={'2'}>Event</Box>

        </Box>
    </Box>

    <Box fontWeight={'semibold'} textAlign={'center'} color={'white'} mt={'4'} px={'20px'} pb={'20px'} >
    Copyright ©2023 All rights reserved | This template is made with  by Colorlib
    </Box>
    </Box>
  )
}

export default Footer
