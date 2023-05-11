import React,{useState} from 'react'
import axios from 'axios'
// import Navbar from './Navbar'

export default function SearchMed() {

    const [mName, setmName]= useState("");
    const [uid, setUid]= useState(0);
    const [disease, setDisease]= useState("");
    const [cpu, setCpu]= useState(0.0);
    const [stock, setstock]= useState(0);
    const [allergy, setAllergy]= useState("");

    const [newStock, setNewStock]= useState(0);

    
    const getMed=()=>{
        axios.post('http://localhost:8000/findMedicine', mName)
        .then(res=>{
            setUid(res.uid);
            setDisease(res.uid);
            setCpu(res.cpu);
            setstock(res.stock);
            setAllergy(res.allergy);
        })
        .catch(err => console.error(err));
    }

    const check=(event)=>{
        setmName(event.target.value);
        getMed();
    }


  return (
    <>
       {/* <Navbar/> */}

        <form className='container my-5'>
        <div className="row mb-3">        
        <label for="inputMed" className="col-sm-2 col-form-label">Enter Medicine Name</label>
            <div className="col-sm-10">
                <input type="email" className="form-control" onChange={check} id="inputMed"/>
            </div>
        </div>
        </form>

        <div className='container my-3'>
        <h3>Description - </h3>
        <br/>

            <div className="col-12">
                <label for="inputAddress" className="form-label">Medicine Name :</label>
                
            </div>

            <div className="col-md-12">
                <label className="form-label">UID : {uid} </label>
                
            </div>

            <div className="col-md-12">
                <label className="form-label">For Disease : {disease}</label>
                
            </div>
            <div className="col-md-6">
                <label className="form-label">Cost per Unit : {cpu}</label>
                
            </div>

            <div className="col-md-6">
                <label className="form-label">Current Stock : {stock}</label>
                
            </div>

            <div className="col-md-6">
                <label className="form-label">Allergy Warning : {allergy} </label>
                
            </div>
                
        </div>
       
    </>
  )
}