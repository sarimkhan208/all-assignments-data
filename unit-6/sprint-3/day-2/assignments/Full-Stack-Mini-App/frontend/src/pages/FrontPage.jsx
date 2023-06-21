import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    Box,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
  
  export default function FrontPage() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'https://trumpwallpapers.com/wp-content/uploads/Marvel-Wallpaper-04-3840-x-2160.jpg'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={'row'} >
            <Link to='/avengers' >
                <Button
                  bg={'#e23636'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: '#e23636' }}>
                  Avengers
                </Button>
            </Link>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Assemble
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }