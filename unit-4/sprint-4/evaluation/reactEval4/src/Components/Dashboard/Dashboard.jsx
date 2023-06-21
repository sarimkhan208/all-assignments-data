// Note : import the the mentioned components from chakra UI and remove the follwoing once imported

import { Box , Button , Center , Img , SimpleGrid , Text , VStack , Select , Spinner } from "@chakra-ui/react";

import axios from "axios";
import { useEffect , useReducer , useState } from "react";



// let Box = () => <div />;
// let Button = () => <div />;
// let Center = () => <div />;
// let Img = () => <div />;
// let SimpleGrid = () => <div />;
// let Text = () => <div />;
// let VStack = () => <div />;
// let Select = () => <div />;
// let Spinner = () => <div />;

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state , {type,payload}) => {
  switch(type){
    case "fetchSuccess" : return {
      ...state , data : payload , isLoading : false
    }
    case "fetchRequest":return {
      isLoading:true
    }
    case 'fetchFailure' : return{
      error : "Error Bad Request"
    }
    default :{
      return state
    }
  }
};

export default function Dashboard() {

  const [state , dispatch] = useReducer(reducer , initialState)
  const [order,setOrder] = useState("asc")
  const [flag,setFlag] = useState(true)
  


  const fetchData = (order) =>{
    dispatch({type:"fetchRequest"})
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats?_sort=cost&_order=${order}`)
    .then((res)=>dispatch({type : "fetchSuccess" , payload:res.data}))
    .catch((err)=>dispatch({type : "fetchFailure"}))
  }

  useEffect(()=>{
    fetchData(order)
    
  },[order,flag])

  const { data , isLoading } = state;
  console.log(data)

  
  const handleCostOrderAsc= ()=>{
    setOrder("asc")
  }

  const handleCostOrderDes = ()=>{
    setOrder("desc")

  }

  const handleDelete = (id)=>{
    setFlag(!flag)
    axios({
      method : 'delete',
      url : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats/${id}`
    })
    fetchData(order)
  }

  


  return (
    <div>
      <div className="sortingButtons">
        <Button colorScheme={"green"} className="sortByCostAsc" onClick={()=>handleCostOrderAsc()} >
          Sort by Asc
        </Button>
        <Button colorScheme={"red"} className="sortByCostDesc" m={2} onClick={()=>handleCostOrderDes()}>
          Sort by Desc
        </Button>
      </div>
      <Center>
        <Select placeholder="select option">
          <option value="Peterbald">Peterbald</option>
          <option value="Nebelung">Nebelung</option>
          <option value="Persian">Persian</option>
          <option value="Birman">Birman</option>
          <option value="Himalayan">Himalayan</option>
        </Select>
      </Center>

      {/* Map the below container against your data */}

      

      {
        isLoading?<Spinner/> : data?.map((el)=>(
          <SimpleGrid className="main_container" key={el.id}>
        <Box className="catsDetails">
          <Center>
            <Img src={el.image} />
          </Center>

          <VStack spacing={2} p={2}>
            <Text className="name" fontSize={"20px"} fontWeight="bold">{el.name}</Text>
            <Text className="cost">{el.cost}</Text>
            <Text className="likes">{el.like}</Text>
            <Text className="breed">{el.breed}</Text>
            <Text className="description">{el.description}</Text>
            <Button className="delete" onClick={()=>handleDelete(el.id)} >Delete</Button>
          </VStack>
        </Box>
      </SimpleGrid>
        ))
      }
      
    </div>
  );
}
