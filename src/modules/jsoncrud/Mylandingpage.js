import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Mylandingpage() {
  const [myd, mysetd] = useState([]);

  const myalldata = () => {
    axios('http://localhost:3333/student').then((d) => {
      console.log(d.data);
      mysetd(d.data);
    })
  }

  useEffect(() => {
    myalldata();
  },[])


  const delrecord =(id)=>{
    axios.delete(`http://localhost:3333/student/${id}`).then((d)=>{
        console.log(d);
        window.location.reload();
    })
}


  return (
    <div className='container mt-5 p-3 shadow bg-light'>
      <div className='row'>
        <div className='col-12'>
          <h1>Landing page / Home </h1>
          <Link to="addrecord" className='btn btn-success'> Add New Records</Link>
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">s.no</th>
                <th scope="col">#id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {myd.map((d) => {
                return (
                  <tr key={d.id}>
                    <th scope="row">{d.sno}</th>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.age}</td>
                    <td>
                      <Link to={`view/${d.id}`} className="btn btn-sm btn-info">View</Link>
                      <Link to="#" className="btn btn-sm btn-warning">Edit</Link>
                      <button className='btn btn-danger btn-sm ms-2' onClick={e=> delrecord(d.id)}>del</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Mylandingpage