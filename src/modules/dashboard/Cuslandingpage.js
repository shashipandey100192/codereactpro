import React, { Fragment, useState } from 'react'
import Cusfooter from '../shares/Cusfooter'

function Cuslandingpage() {

const [statevalue, statefunction]=useState("mydefaultvalue");
const [a,b]=useState("username")

const abc =()=>{
  statefunction("change data");
}
const xyz = (p)=>{
  b(p.target.value);
  // console.log(p);
  console.log(p.target.value);
}

const abcd=(myelement)=>{
  console.log(myelement);
}

  return (
    <Fragment>
   <div className='container mt-5 border'>
    <div className='row'>
        <div className='col-12 border' onClick={abcd}>
            <h1>landing page</h1>
            <h1>this is ggg  name : {statevalue}</h1>
            <input type='button' value="change" onClick={abc}/>
            <input type='text' value={a} onInput={xyz}/>
            <div>this is </div>
        </div>
    </div>
   </div>
   <Cusfooter/>
   </Fragment>
  )
}

export default Cuslandingpage