import { Box,Icon,Image,Text,Heading } from '@chakra-ui/react'
import React from 'react'
import {BiBasketball} from 'react-icons/bi'
import {FaEnvira} from 'react-icons/fa'
import {AiOutlineVideoCameraAdd} from 'react-icons/ai'
const Sports = () => {
    
  return (
    <Box>
        <Box width={{base:'95%',sm:'60%'}} margin={'auto'} >
    <Heading textAlign={'center'} mt='5' fontWeight={'bold'} color={'blue.700'}>Welcome To Our <span style={{color:'pink'}} >Kindergarten</span> </Heading>
    <Text textAlign={'center'} color={'blue.300'} mt={'4'} >Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.</Text>
</Box>
        <Box display={'flex'} flexDirection={{base:"column",sm:"row",md:"row"}} width={'90%'} margin={'auto'} mt={'5'} >
        <Box pt={'50px'} >
            <Box display={'grid'} gridTemplateColumns={'25% 75%'} mb={'8'}>
                <Box >
                    <Icon as={BiBasketball} fontSize={'60px'} />
                </Box>
                <Box>
                    <Box color={'blue'} fontWeight={'bold'} fontSize={'25px'} >Inter School Sports</Box>
                    <Box color={'blue.300'} lineHeight={'30px'} >The words you use in your written communica speak volumes.</Box>
                </Box>
            </Box>

            <Box display={'grid'} gridTemplateColumns={'25% 75%'} mb={'8'}>
                <Box >
                    <Icon color={'yellow'} as={FaEnvira} fontSize={'60px'} />
                </Box>
                <Box>
                    <Box color={'yellow'} fontWeight={'bold'} fontSize={'25px'} >Friendly Environment</Box>
                    <Box color={'blue.300'} lineHeight={'30px'} >The words you use in your written communica speak volumes.</Box>
                </Box>
            </Box>

            <Box display={'grid'} gridTemplateColumns={'25% 75%'} mb={'8'}>
                <Box >
                    <Icon as={AiOutlineVideoCameraAdd} fontSize={'60px'} />
                </Box>
                <Box>
                    <Box color={'blue'} fontWeight={'bold'} fontSize={'25px'} >Inter School Sports</Box>
                    <Box color={'blue.300'} lineHeight={'30px'} >The words you use in your written communica speak volumes.</Box>
                </Box>
            </Box>

        </Box>
        <Box>
            <Box>
                <Image src='https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png' alt='image' />
            </Box>
        </Box>
    </Box>
    </Box>
  )
}

export default Sports
