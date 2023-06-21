import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({avatar,username,language,date,title}) => {
    const {userDetail} = useSelector((state)=>state.authReducer)
  return (
    <Box ml={'10px'}  width={'60%'} display={'grid'}  gridTemplateColumns={'20% 60% 20%'} border='1px solid gray' mb={'10px'} >
        <Box>
            <Image height='100px' width={'100px'} src={avatar} />
            <Heading textAlign={'center'} fontSize={'20px'}>
                {username}
            </Heading>
            <Box display={userDetail.username==username?"block":"none"}>
                <Button   bg={'blue'}  >Edit</Button>
                <Button bg={'red'} >Delete</Button>
            </Box>
        </Box>

        <Box >
            <Box mt={'30px'} ><Heading>{title}</Heading></Box>
            <Box display={'flex'} mt={'20px'}>
                <Box bg={'gray'} >{language}</Box>
                <Box marginX={'20px'}  bg={'gray'} >457859</Box>
                <Box bg={'gray'} >5Ansss</Box>
            </Box>
        </Box>

        <Box>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiG5hKDGybszoi9_1ePZgzqDKdNcKMfRN2aO4_JE26JQ&s'/>
            <Heading textAlign={'center'} fontSize={'15px'}>
                300 Upvotes
            </Heading>
        </Box>

    </Box>
  )
}

export default Card
