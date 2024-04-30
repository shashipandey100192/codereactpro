import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Mycar() {

  const [mydata , setdata]=useState([])


  const myapi = ()=>{
      fetch("https://jsonplaceholder.typicode.com/posts").then((d)=>{
        return d.json()
      }).then((e)=>{
        console.log(e);
        setdata(e)
      })
    }
  
    useEffect(()=>{
      myapi();

    },[]);




  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <h1 className='h1 text-center text-danger bg-info'>This is car server page</h1>
              <div className='container'>
                <div className='row'>

                
              {mydata.map((e)=>{
                return(
                  <div className='col-sm-3' key={e.id}>
                  <div className="card">
                    <div className="card-body">
                      <h1>{e.id}</h1>
                      <h5 className="card-title">{e.title}</h5>
                      <p className="card-text">{e.body}</p>
                      <Link to="#" className="btn btn-primary">{e.userId}</Link>
                    </div>
                  </div>
                  </div>
                )
              })}
              </div>
              </div>
            
            
            </div>
        </div>
    </div>
  )
}

export default Mycar