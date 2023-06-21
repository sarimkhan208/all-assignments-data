import { Box, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Subnavbar = () => {

    const [sort,setSort] = useState("")
    const [lang,setLang] = useState("")
    const [params,setParams] = useSearchParams()


    useEffect(()=>{
        let params = {}
        sort && (params.sort=sort)
        lang && (params.language=lang)
        setParams(params)

    },[lang,sort])


  return (
    <Box height={'50px'} bg={'gray.100'} display={'flex'} justifyContent={'space-around'} >
        <Box  >
        <Select onChange={(e)=>setSort(e.target.value)} >
                <option>Sort by Votes</option>
                <option value='asc' >Ascending by votes</option>
                <option value='desc' >Descending by Votes</option>
        </Select>
            

        </Box>
        <Box>
                <Select onChange={(e)=>setLang(e.target.value)} >
                    <option>Language</option>
                    <option value='java' >JAVA</option>
                    <option value='javascript' >JavaScript</option>
                    <option value='python' >Python</option>
                </Select>
        </Box>
    </Box>
  )
}

export default Subnavbar
