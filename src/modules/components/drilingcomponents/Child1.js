import React from 'react'

function Child1(props) {
  return (
    <div className='container-fluid bg-danger'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='border'>
                    <h1>child element</h1>
                    <h3>{props.username}</h3>
                    <input type='button' value="alertfunc" onClick={props.cusfunc}></input>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Child1