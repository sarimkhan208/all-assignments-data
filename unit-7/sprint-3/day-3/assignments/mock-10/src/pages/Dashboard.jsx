import { Box, Button, Icon, useDisclosure,Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {CiEdit} from 'react-icons/ci'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useDispatch,useSelector } from 'react-redux'
import { postcritical, postlow, postmajor, postmedium } from '../redux/Bugs/action'
import Card from '../components/Card'

const Dashboard = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const {criticalData,majorData,mediumData,lowData} = useSelector((state)=>state.bugReducer)
    const [bug,setBug] = useState("")
    const [critical,setCritical] = useState(false)
    const [major,setMajor] = useState(false)
    const [medium,setMedium] = useState(false)
    const [low,setLow] = useState(false)

    const handleCritical = ()=>{
        setCritical(true)
        onOpen()
    }
    const handleMedium = ()=>{
        setMedium(true)
        onOpen()
    }
    const handleMajor = ()=>{
        setMajor(true)
        onOpen()
    }
    const handleLow = ()=>{
        setLow(true)
        onOpen()
    }


    const handlePost = ()=>{

        if(critical){
            dispatch(postcritical(bug))
            setCritical(false)
        }else if(major){
            dispatch(postmajor(bug))
            setMajor(false)
        }else if(medium){
            dispatch(postmedium(bug))
            setMedium(false)
        }else if(low){
            dispatch(postlow(bug))
            setLow(false)
        }
    }

    


  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Report Bug</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type='text'  onChange={(e)=>setBug(e.target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={handlePost} >Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    <Box display={'flex'} justifyContent={'space-around'} >

        <Box width={'18%'} p={'10px'} >
            <Button onClick={handleCritical} >Report Bug</Button>
            <Box bg={'red'} p={'10px'} borderRadius={'10px'} my={'10px'} >Critical Severty</Box>
            {
                criticalData.map((el)=>(
                    <Card task={el} bg={'red'} />
                ))
            }
        </Box>

        <Box width={'18%'} p={'10px'} >
            <Button onClick={handleMajor}>Report Bug</Button>
            <Box bg={'yellow'} p={'10px'} borderRadius={'10px'} my={'10px'} >Major Serverty</Box>
            
            {
                majorData.map((el)=>(
                    <Card task={el} bg={'yellow'} />
                ))
            }
        </Box>

        <Box width={'18%'} p={'10px'} >
            <Button onClick={handleMedium} >Report Bug</Button>
            <Box bg={'orange'} p={'10px'} borderRadius={'10px'} my={'10px'} >Medium Serverty</Box>
            
            {
                mediumData.map((el)=>(
                    <Card task={el} bg={'orange'} />
                ))
            }
        </Box>

        <Box width={'18%'} p={'10px'} >
            <Button onClick={handleLow} >Report Bug</Button>
            <Box bg={'green'} p={'10px'} borderRadius={'10px'} my={'10px'} >Low Serverty</Box>
            
            {
                lowData.map((el)=>(
                    <Card task={el} bg={'green'} />
                ))
            }
        </Box>
    </Box>
    </>
  )
}

export default Dashboard
