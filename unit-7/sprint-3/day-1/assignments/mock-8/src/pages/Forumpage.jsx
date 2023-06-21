import React, { useEffect, useState } from 'react'
import { Box, Button, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react'


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getQuestions } from '../redux/questions/action'
import Card from '../components/Card'
import { useLocation, useSearchParams } from 'react-router-dom'
import Subnavbar from '../components/Subnavbar'
import { BaseURL } from '../BaseURL'

const Forumpage = () => {
    const [params,setParams] = useSearchParams()
    const dispatch = useDispatch()
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [lang,setLang] = useState("")
    const [page,setPage] = useState(1)
    const {userDetail} = useSelector((state)=>state.authReducer)
    const {questions} = useSelector((state)=>state.questionsReducer)
    const location = useLocation()
    const [flag,setFlag] = useState(false)
    
    const { isOpen, onOpen, onClose } = useDisclosure()


    let obj = {
        params : {
        language : params.get("language"),
        _sort : params.get("sort"),
         _limit : 5,
         _page : page
        }
     }
     console.log(obj)

    

    const handlePage = (val)=>{
        setPage(page+val)
    }


    const handlePost = ()=>{
        const date = new Date()
        const obj = {
            username : userDetail.username,
            title : title,
            description : desc,
            language : lang ,
            date : date,
            avatar : userDetail.avatar

        }
        axios.post(`${BaseURL}/questions`,obj)
        .then((res)=>setFlag(!flag))
    }

    useEffect(()=>{
        dispatch(getQuestions(obj))
    },[page,location,flag])




  return (
    <Box justifyContent={'right'} >
        <Subnavbar/>
        <Button onClick={onOpen} >Ask Question</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Input type='text' value={userDetail.username} />
                <Input type='text' placeholder='Question Title' onChange={(e)=>setTitle(e.target.value)} />
                <Textarea type='text' placeholder='Question Description' onChange={(e)=>setDesc(e.target.value)} />
                <Select onChange={(e)=>setLang(e.target.value)} >
                    <option value='java' >JAVA</option>
                    <option value='javascript' >JavaScript</option>
                    <option value='python' >Python</option>
                </Select>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
                <Button variant='ghost' onClick={handlePost} >POST</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>

        <Box mt={'20px'} >
            {
                questions.map((el)=>(
                    <Card key={el.id} avatar={el.avatar} username={el.username} title={el.title} date={el.date} language={el.language}  />
                ))
            }
        </Box>

        <Box>
            <Button onClick={()=>handlePage(-1)} >Prev</Button>
            <Button>{page}</Button>
            <Button onClick={()=>handlePage(1)} >Next</Button>

        </Box>




    </Box>
  )
}

export default Forumpage
