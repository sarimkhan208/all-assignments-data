import { useState ,  useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [params,setParams] = useSearchParams()
  let initialBatch = params.getAll('batch')
  let initialPage= params.get('page')

  const [batch,setBatch] = useState(initialBatch || [])
  const [page,setPage] = useState(Number(initialPage))

  
  const handleChange = (e)=>{
    
    let newBatch = [...batch]
    let value = e.target.value
    
    if(newBatch.includes(value)){
      newBatch = newBatch.filter((el)=>el!=value)
    }
    else{
      newBatch.push(value)
    }
    setBatch(newBatch)
  }
  const handlePage = (val)=>{
    setPage(page+val)

  }

  useEffect(()=>{
    let params = {
      page,
      batch
    }
    
    setParams(params)
  },[batch,page])



  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input data-testid="batch-web101" type="checkbox"  value={'WEB101'} onChange={handleChange} checked={batch.includes('WEB101')} />
        <label>WEB-101</label>
        <br />
        <br />
        <input data-testid="batch-js201" type="checkbox" value={'JS201'} onChange={handleChange} checked={batch.includes('JS201')} />
        <label>JS-201</label>
        <br />
        <br />
        <input data-testid="batch-rct101" type="checkbox"  value={'RCT101'} onChange={handleChange} checked={batch.includes('RCT101')}/>
        <label>RCT101</label>
        <br />
        <br />
        <input data-testid="batch-rct211" type="checkbox" value={'RCT211'} onChange={handleChange} checked={batch.includes('RCT211')} />
        <label>RCT211</label>
        <br />
        <br />
        <input data-testid="batch-nxm101" type="checkbox" value={'NXM101'} onChange={handleChange} checked={batch.includes('NXM101')} />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button disabled={page==1} data-testid="page-prev" onClick={()=>handlePage(-1)}  >Previous</button>
        <button disabled={page==5} data-testid="page-next"  onClick={()=>handlePage(1)}  >Next</button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
