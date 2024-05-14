import React from 'react'

const a="morning"
function Mycontactpage() {
 if(a==="morning")
    {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-danger'>Contact Morning page </h1>
                    </div>
                </div>
            </div>
          )
    }
    else if(a==="evening")
        {
            return (
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='text-success'>Contact Evening page </h1>
                        </div>
                    </div>
                </div>
              )
        }
        else
        {
            return (
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>Errore page </h1>
                        </div>
                    </div>
                </div>
              )
        }
}

export default Mycontactpage