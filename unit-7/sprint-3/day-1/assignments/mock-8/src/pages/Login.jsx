import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../redux/auth/action';
import { Navigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { BaseURL } from '../BaseURL';
  
  export default function Login() {


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()

    const {isAuth} = useSelector((state)=>state.authReducer)


    

    const handleClick = ()=>{
        let userData = []
        axios.get(`${BaseURL}/users`)
        .then((res)=>{
            userData.push(res.data)
            console.log(userData)

            for(let i=0; i<userData[0].length; i++){
                if(userData[0][i].email==email && userData[0][i].password == password){

                    dispatch(loginSuccess(userData[0][i]))
                }
            }
        })
        .catch((err)=>console.log(err))

        
    }

    if(isAuth){
        alert("login successull")
        return <Navigate to='/' />
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={'white'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>

                <Button
                    onClick={handleClick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              <RouterLink to='/signup' >
                Dont Have an Account? Sign up
              </RouterLink>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }