import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Prants() {

    const name="mohan singh";
    const [a,b]=useState("bg-success")
    
    const myfunc = ()=>{
        alert("abcdfsfsdfsdfsdfsdf");
        b("bg-warning")
    }





  return (
    <div className='container-fluid'>
        
        <div className='row'>
            <div className={`col-12 border text-center ${a}`}>
                <h1>This is parent Element</h1>
                <h3>{name}</h3>
            </div>
            <div className='col-md-6'>
                <div className='border p-3'>
                    <h1>first Child element</h1>
                    <Child1 username={name} cusfunc = {myfunc}></Child1>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='border p-3'>
                    <h1>second child element</h1>
                    <Child2 ></Child2>
                
                </div>   
             </div>
        </div>
    </div>
    
  )
}

export default Prants