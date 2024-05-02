import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";



function Detailspage() {
    const {id}=useParams();

    const [singdata, setsingledata]=useState([]);
    const [company,setcompany]=useState([]);
    const Viewdetails = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((d) => {
          console.log(d.data);
          setsingledata(d.data);
          setcompany(d.data.company);
        })                                                              
      }
    
      useEffect(() => {
        Viewdetails();
      }, []);                               


  return (
   <div className='container'>
    <div className='row bg-info'>
        <div className='col-8'>
        <h3>Details Page of Particular Id</h3>
        </div>
        <div className='col-4 text-end'>
            <Link to="/service/bike" className="btn btn-primary"> <IoMdArrowRoundBack/>Back</Link>
        </div>
    </div>

    <div className='row'>
        <div className='col-md-5 border'>
        <h1>Product image</h1>
        </div>
        <div className='col-md-7 border'>
            <p>Product Id: {singdata.id}</p>
            <p>Company Name: {company.name}</p>
            <p>Address: </p>
            <p>Phone No: {singdata.phone}</p>
            <p>Email id: {singdata.email}</p>
            <p>ZipCode: </p>
        </div>
    </div>
   </div>
  )
}

export default Detailspage