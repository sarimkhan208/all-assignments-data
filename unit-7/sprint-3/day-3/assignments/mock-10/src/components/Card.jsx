import React from 'react'
import {Box,Icon} from '@chakra-ui/react'

import {AiOutlineDelete} from 'react-icons/ai'
import {CiEdit} from 'react-icons/ci'


const Card = ({bg,task,}) => {
  return (
    <>
            
            <Box bg={bg} p={'10px'} borderRadius={'10px'} my={'10px'} display={'flex'} justifyContent={'space-around'} >
                <Box>
                    {task}
                </Box>
               <Box>
                    <Icon as={AiOutlineDelete} mr={'20px'} />
                    <Icon as={CiEdit} />
               </Box>
            </Box>
    
    </>
  )
}

export default Card
