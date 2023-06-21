import { Heading, Image,Box,Text } from '@chakra-ui/react'
import React from 'react'

const TeacherCard = ({name,image,subject}) => {
  return (
    <Box>
        <Image src={image} />
        <Heading fontSize={'23px'} mt={'3'} textAlign={'center'} >{name}</Heading>
        <Text textAlign={'center'} color={'gray'} >{subject}</Text>
    </Box>
  )
}

export default TeacherCard
