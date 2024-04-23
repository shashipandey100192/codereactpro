import React from 'react'
import { Link } from 'react-router-dom'

function Cuserror() {
  return (
    <div className='container mt-5 border'>
    <div className='row'>
        <div className='col-12 text-center p-5 '>
            <h1>Error Page</h1>
            <h2>404</h2>
            <h5>Note Found Page</h5>
            <Link to="" className='btn btn-danger'>Back to Home</Link>
        </div>
    </div>
   </div>
  )
}

export default Cuserror