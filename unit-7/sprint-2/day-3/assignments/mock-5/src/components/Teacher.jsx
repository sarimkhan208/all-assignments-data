import React from 'react'
import TeacherCard from './TeacherCard'
import { Box,Heading,Text } from '@chakra-ui/react'
const Teacher = () => {
  return (
    <Box mt={'100px'} >
        <Box width={'60%'} margin={'auto'} >
            <Heading textAlign={'center'} mt='5' fontWeight={'bold'} color={'blue.700'}>Expert Teacher</Heading>
            <Text textAlign={'center'} color={'blue.300'} mt={'4'} >Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</Text>
        </Box>

        <Box px={'20px'} mt={'10'} display={'grid'} gridTemplateColumns={{base:'repeat(1,1fr)',sm:'45% 45%',md:'repeat(4,1fr)'}} gap={{base:'0px',sm:"10%"}} >
            {
                data.map((el)=>(
                    <TeacherCard name={el.name} subject={el.subject} image={el.image} />
                ))
            }
        </Box>

    </Box>
  )
}

export default Teacher

let data = [
    {
        image : "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png",
        name : 'Mr Juscon Clay',
        subject : 'Sports Instructor'
    },
    {
        image : "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png",
        name : 'Bustor Hyman',
        subject : 'Sports Instructor'
    },
    {
        image : "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png",
        name : 'Mr Juscon Clay',
        subject : 'Sports Instructor'
    },
    {
        image : "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png",
        name : 'Bustor Hyman',
        subject : 'Sports Instructor'
    }
]