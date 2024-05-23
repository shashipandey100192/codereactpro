import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function Loginpage() {
    const abc = useRef(null);

    const myfunc = ()=>{
        abc.current.placeholder="password";
        abc.current.focus();
    }

    return (
        <div className='container mt-5 p-3 shadow bg-light' style={{width:'300px'}}>
            <div className='row'>
                <div className='col-12'>
                    <h1>Login page</h1>
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
                        <input type="password" className="form-control" ref={abc}/>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="mb-3 text-center">
                        <input type="submit" className="btn btn-outline-success btn-sm" value="submit" onClick={myfunc}/>
                        <Link to="registor" className='me-3 ms-3'>New Registor</Link>
                        <Link to="dashboard">dashboard</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginpage