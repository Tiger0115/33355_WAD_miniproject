import React,{useState} from 'react'
import axios from 'axios'
import StockAlert from './StockAlert';
// import Navbar from './Navbar'

export default function Home() {

  const [mName, setmName]= useState("");
  const [uid, setUid]= useState(0);
  const [disease, setDisease]= useState("");
  const [cpu, setCpu]= useState(0.0);
  const [stock, setstock]= useState(0);
  const [allergy, setAllergy]= useState("");
  const [sellStock,setSellStock]=useState(0);

  const [data,setData]=useState([])
  const [sellMed, setSellMed] = useState([])


  const checkName=(event)=>{
    setmName(event.target.value);
    const getMed=()=>{
      axios.post('http://localhost:8000/findMed', mName)
      .then(res=>{
        setUid(res.uid);
        setDisease(res.uid);
        setCpu(res.cpu);
        setstock(res.stock);
        setAllergy(res.allergy);         
      })
      .catch(err => console.error(err));
    }
  }

  const addItem=()=>{
    if(uid===0 || sellStock>stock)
    {
      alert("Something went wrong, recheck the inputs");
    }
    else
    {
      let temp={
        "mName": mName,
        "uid": uid,
        "cpu": cpu,
        "stock": sellStock
      }
     setSellMed(JSON.parse(temp));
     
     
    }
  }

  const checkQuantity=(event)=>{
    setSellStock(event.target.value)
    if(uid===0)
    {
      alert("Medicine Name Not Found")
    }
    else if(sellStock>stock)
    {
      alert("Quantity more than stock");
    }    
  }

  return (
    <>
        {/* <Navbar/> */}
        <center>
        <div className='container my-5'>
            <table className='table table-bordered border-primary'>
              <thead>
              <tr>
                  <th>Sr. No.</th>
                  <th>Med Name</th>
                  <th>UID</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
              </tr>
              </thead>

              <tbody>
              {sellMed.map((med, index)=>(                 
                  
                  <tr key={index}>
                      <td>{med.uid}</td>
                      <td>{med.mName}</td>                        
                      <td>{med.stock}</td>
                  </tr>
                ))
              }
              </tbody>

            </table>
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">Medicine Name</span>
              <input type="text" class="form-control" onChange={checkName} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>

              <span class="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
              <input type="number" class="form-control" onChange={checkQuantity}  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
              <button type="button" class="btn btn-primary" onClick={addItem}>+ Add Medicine</button>
            </div>
            <button type="button" class="btn btn-primary">Complete Order</button>
        </div>
        </center>
    </>
  )
}
