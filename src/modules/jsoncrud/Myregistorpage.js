import React from 'react'

function Myregistorpage() {
  return (
    <div className='container mt-5 p-3 shadow bg-light' style={{width:'300px'}}>
            <div className='row'>
                <div className='col-12'>
                    <h1>Registor page</h1>
                </div>
                <div className='col-md-12'>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="mb-3">
                        <label className="form-label">Email id</label>
                        <input type="email" className="form-control" />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="mb-3">
                        <label className="form-label">userame</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="mb-3">
                        <label className="form-label">password</label>
                        <input type="password" className="form-control" />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="mb-3 text-center">
                      
                        <input type="submit" className="btn btn-outline-success" value="Registor Now" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Myregistorpage