import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Box,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image,
    Select,
    Input,
  } from '@chakra-ui/react'

  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { Button } from '@chakra-ui/react'
import axios from 'axios'

import { useDisclosure } from '@chakra-ui/react'

const Home = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData] = useState([])
    const [singleData,setSingleData] = useState([])
    const [page,setPage] = useState(1)
    const [searchInput,setSearchInput] = useState("")
    

    
    const getData = (currency)=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
        
        .then((res)=>{
            setData([...res.data])
        })
        .catch((err)=>console.log(err))
    }

    const getSingleBitcoinData = (id)=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((res)=>{

            setSingleData([res.data])
        })
        .catch((err)=>console.log(err))
    }



    useEffect(()=>{
        getData("INR")
    },[])

    const handleModal = (id)=>{
        getSingleBitcoinData(id)
        onOpen()

    }

    const handleSort = (val)=>{
        if(val == "asc"){
            let temp = data.sort((a,b)=>a.market_cap-b.market_cap)
            setData([...temp])
        }else if(val == "desc"){
            let temp2 = data.sort((a,b)=> b.market_cap- a.market_cap)
            setData([...temp2])
        }
    }
    const handleCurrency = (e)=>{
        let val = e.target.value
        if(val=="INR"){
            getData("INR")
        }else if(val=="USD"){
            getData("USD")
        }else if(val=="EUR"){
            getData("EUR")
        }
    }


    const handleSearch = ()=>{
        axios.get(`https://api.coingecko.com/api/v3/search?query=${searchInput}`)
        .then((res)=>{
            setData([...res.data.coins])
        })
        .catch((err)=>console.log(err))
    }
    


  return (
    <Box>

        <Box display={'flex'} justifyContent={'space-around'}  bg='#FB8C00' py={'20px'} >
            <Box  bg='#FB8C00' color={'white'}>
                <Button mr={'2'} onClick={()=>handleSort("asc")} >Sort by Asc</Button>
                <Button onClick={()=>handleSort("desc")}>Sort by Desc</Button>
            </Box>

            <Box>
                <Select onChange={(e)=>handleCurrency(e)} >
                    <option>Currency</option>
                    <option value='INR' >INR</option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                </Select>
            </Box>
            <Box display={'flex'} >
                <Input type="text" onChange={(e)=>setSearchInput(e.target.value)} />
                <Button onClick={()=>handleSearch()} >Search</Button>
            </Box>
        </Box>


            {/* POP-UP MODAL */}
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Box>
                    <Image src={singleData[0]?.image.small} alt='image' />
                </Box>
                </ModalBody>

                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Tbody>
                            <Tr>
                                <Td fontWeight={'700'}>Market Cap Rank</Td>
                                <Td>{singleData[0]?.market_cap_rank}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>Name</Td>
                                <Td>{singleData[0]?.name}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>Symbol</Td>
                                <Td>{singleData[0]?.symbol}</Td>
                            </Tr>
                            <Tr>
                                <Td>Current Price</Td>
                                <Td>{singleData[0]?.market_data.current_price.aed}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>Price Change 24 Hour</Td>
                                <Td>{singleData[0]?.market_data.price_change_24h}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>Total Volume</Td>
                                <Td>fsdf</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>Low 24 hour</Td>
                                <Td>{singleData[0]?.market_data.low_24h.aed}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>High 24 Hour</Td>
                                <Td>{singleData[0]?.market_data.high_24h.aed}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>Total Supply</Td>
                                <Td>{singleData[0]?.market_data.total_supply}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>Max Supply</Td>
                                <Td>{singleData[0]?.market_data.max_supply}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>Circulating Supply</Td>
                                <Td>{singleData[0]?.market_data.circulating_supply}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>All Time High (ath)</Td>
                                <Td>{singleData[0]?.market_data.total_supply}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'700'}>Last Updated Date</Td>
                                <Td>{singleData[0]?.last_updated}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    </TableContainer>

                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>

            {/* MAIN TABLE CONTAINER */}
        <TableContainer>
        <Table>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
            <Tr bg='#FB8C00' color={'white'} >
                <Th>Coin</Th>
                <Th>Price</Th>
                <Th>24hr Change</Th>
                <Th>Market Cap</Th>
            </Tr>
            </Thead>
            <Tbody>
            {
                data.map((el)=>(
                    <Tr bg='black' key={el.id} onClick={()=>handleModal(el.id)} >
                        <Td>
                            <Box display={'flex'} >
                                <Box mr={'5'} >
                                    <Image height={'10'} width={'10'} src={el.image} alt='image' />
                                </Box>
                                <Box>
                                    <Box color={'white'} fontWeight={'700'} >{el.symbol}</Box>
                                    <Box color={'white'}>{el.name}</Box>
                                </Box>
                            </Box>
                        </Td>
                        <Td color={'white'}>{el.current_price}</Td>
                        <Td color='green' >{el.price_change_24h?parseFloat(el.price_change_24h.toFixed(2)):"NaN"}%</Td>
                        <Td color={'white'}>{el.market_cap}</Td>
                    </Tr>
                ))
            }
            {/* parseFloat(el.price_change_24h.toFixed(2)) */}
            </Tbody>
        </Table>
        </TableContainer>

        <Box width={'20%'} m='auto' >
            <Button>Prev</Button>
            <Button>{page}</Button>
            <Button>Next</Button>
        </Box>
    </Box>
  )
}

export default Home
