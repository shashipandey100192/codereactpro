import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Mybike() {
  const [mydata, setmydata] = useState([]);
  const [address, setaddress] = useState([]);


  const myapi = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((d) => {
      console.log(d.data);
      setmydata(d.data);
      setaddress(d.data.address);
    })
  }

  useEffect(() => {
    myapi();
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='h1 text-center text-success bg-danger'>This is Bike server page</h1>

          <table class="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">s.no</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">website</th>
             
                <th scope="col">Zipcode</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
             {mydata.map((d,s=1)=>{
              return(
                <tr>
                <th scope="row">{++s}</th>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.website}</td>
                <td>{d.address.zipcode}</td>
                <td>
                  <Link to="#" className="btn btn-sm btn-info">View</Link>
                  <Link to="#" className="btn btn-sm btn-warning">Edit</Link>
                  <Link to="#" className="btn btn-sm btn-danger">Del</Link>
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

export default Mybike