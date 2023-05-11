import React,{useState, useEffect} from 'react'
import axios from 'axios'
// import Navbar from './Navbar'

export default function StockAlert() {


  const [data,setData]=useState([])

  const display=()=>{
    axios.get('http://localhost:8000/stockAlert')
        .then(res=>{
            setData(res)
        })
        .catch(err=> console.log(err));
  }

  useEffect(() => {
    display();
  }, []);

  return (
    <>
     {/* <Navbar/> */}
     <div className='container my-5'>
     <table className='table table-bordered border-primary'>
              <thead>
              <tr>
                  <th>Sr. No.</th>
                  <th>Med Name</th>
                  <th>UID</th>
                  <th>Current Stock</th>
                  
              </tr>
              </thead>

              <tbody>
                {data.map((med, index)=>(                 
                  
                    <tr key={index}>
                        <td>{med.uid}</td>
                        <td>{med.mName}</td>                        
                        <td>{med.stock}</td>
                    </tr>
                  ))
                }
              </tbody>

        </table> 
        </div>
    </>
  )
}