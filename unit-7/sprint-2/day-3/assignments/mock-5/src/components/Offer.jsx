import React from 'react'
import {Box,Heading,Text} from '@chakra-ui/react'
import ClassesCard from './ClassesCard'

const Offer = () => {
  return (
    <Box bg={'#FCE4EC'} pt={'50px'} mt={'5'}>
        <Box width={{base:'95%',sm:'60%'}} margin={'auto'} >
            <Heading textAlign={'center'} mt='5' fontWeight={'bold'} color={'blue.700'}>Classes We Offer</Heading>
            <Text textAlign={'center'} color={'blue.300'} mt={'4'} >Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</Text>
        </Box>

        <Box mt={'5'} px={'20px'} display={'grid'} gridTemplateColumns={{base:'repeat(1,1fr)',sm:'45% 45%'}}  gap={{base:'0px',sm:"100px"}}  bg={'#FCE4EC'} >
            {
                data?.map((el)=>(
                    <ClassesCard image={el.image} heading={el.heading} content={el.content} agegroup={el.agegroup} classes={el.classes} classprice={el.classPrice} />
                ))
            }
        </Box>

    </Box>
  )
}

export default Offer

let data = [
    {
        image : 'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png',
        heading : "Intelligent Challengers" ,
        content : "Our set he for firmament morning sixth subdue today",
        agegroup :"3-5" ,
        classes : "30",
        classPrice : "10/h",
    },
    {
        image : 'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png',
        heading : "Intelligent Challengers" ,
        content : "Our set he for firmament morning sixth subdue today",
        agegroup :"3-5" ,
        classes : "30",
        classPrice : "10/h",
    },
    {
        image : 'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png',
        heading : "Intelligent Challengers" ,
        content : "Our set he for firmament morning sixth subdue today",
        agegroup :"3-5" ,
        classes : "30",
        classPrice : "10/h",
    },
    {
        image : 'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png',
        heading : "Intelligent Challengers" ,
        content : "Our set he for firmament morning sixth subdue today",
        agegroup :"3-5" ,
        classes : "30",
        classPrice : "10/h",
    }
]