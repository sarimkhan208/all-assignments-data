import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";
import { useState , useEffect} from "react";

function Countries() { 
  // return <LoadingIndicator />;
  // data={contrData} current={current}  total={total} onChange={onChange}
  // {data,current,total,onChange}

  const [contrData,setContrData] = useState([])
  const [loading,setLoading] = useState(true)
  const [current,setCurent] = useState(1)
  const [total,setTotal] = useState(0)

  const getData = (url)=>{
    return fetch(url).then((res)=>res.json())

  }

  const fetchData = async (page)=>{
    setLoading(true)
    
    let data  = await getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
    setContrData(data.data)
    setTotal(data.totalPages)
    setLoading(false)
  }


  useEffect(()=>{
    fetchData(current)
  },[current])


  const onChange = (val)=>{
    setCurent(current+val)
  }

  return loading?<LoadingIndicator/>: (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {contrData.map((el)=>(
          <CountriesCard key={el.id} country={el.country} population={el.population} />
        ))}
      </div>
      <div>
      <Pagination current={current}  total={total} onChange={onChange} loading={loading} setLoading={setLoading}/>
      </div>
    </div>
  );
}

export default Countries;
