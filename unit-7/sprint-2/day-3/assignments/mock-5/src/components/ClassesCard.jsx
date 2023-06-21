import { Heading,Box,Image,Text } from '@chakra-ui/react'
import React from 'react'

const ClassesCard = ({image,heading,content,agegroup,classprice,classes}) => {
  return (
    <Box bg={'white'} borderRadius={'32px'} mb={'7'} >
        <Image src={image} width={'100%'} />
        <Heading px={'4'} pt={'5'} fontSize={'25px'}  color={"blue"} >{heading}</Heading>
        <Text px={'4'} pt={'2'}  color={"blue.300"}>{content}</Text>

        <Box p={'4'} display={'flex'} justifyContent={'space-around'} >
            <Box>
                <Box   color={"pink"} fontWeight={'bold'}>{agegroup}</Box>
                <Box>Age Group</Box>
            </Box>

            <Box>
                <Box color={"yellow"} fontWeight={'bold'}>{classes}</Box>
                <Box >Classes</Box>
            </Box>

            <Box>
                <Box color={"blue"} fontWeight={'bold'}>{classprice}</Box>
                <Box >Class Price</Box>
            </Box>
        </Box>
    </Box>
  )
}

export default ClassesCard
