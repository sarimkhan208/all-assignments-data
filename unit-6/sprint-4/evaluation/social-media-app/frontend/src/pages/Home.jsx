import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Base_URL } from '../components/Base_URL'
import { AuthContext } from '../authContext'
import { useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react'


const Home = () => {

    const {isAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const [data,setData]=  useState([])

    

    useEffect(()=>{
        axios.get(`${Base_URL}/post`,{
            headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}
        }).then((res)=>{
            setData([...res.data])
            console.log(res)
        }).catch((err)=>console.log(err))
    },[])

    // if(!isAuth){
    //     navigate("/signin")
    //     return 
    // }

  return (
    <div>
      {
        data.map((el)=>(
            <Box border='1px solid black'>
                <div>{el.body}</div>
                <div>{el.device}</div>
                <div>{el.title}</div>
            </Box>
        ))
      }
    </div>
  )
}

export default Home
