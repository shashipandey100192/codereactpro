import React, { useState } from 'react';
import { useForm} from 'react-hook-form';

function Myforms() {

const [msg,setmsg]=useState(0)

const customvalidation = (e)=>
{
    setmsg(e.target.value);
    console.log(e.target.value);
}


    const {register,handleSubmit, formState: { errors }} = useForm()
    const mysubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(mysubmit)}> 
        <div className='container border p-5 shadow'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        {/* <input type="text" className="form-control" {...register("firstname",{required: true,maxLength: 10,minLength:5})}/>
                        {errors.firstname && <div className="text-danger">required first name</div>} */}
                       

                        <input type="text" className="form-control" {...register("firstname",{required: true})}/>
                        {/* {msg.length >=5 ? "too logn":"too sort"} */}
                        {/* {msg.length >=10 ? "too logn": msg.length >=5 ? "too medi":"min 5 dig required"} */}
                        {/* {msg.length >=10 ?  <div className="text-danger">Too Logn</div>: msg.length >=5 ? "too medi":"min 5 dig required"} */}
                        {errors.firstname && <div className="text-danger">required first name</div>}
                        {/* {errors.firstname.length>=10 && <div className="text-success">Too sort</div>}
                        {errors.firstname.length>=5 && <div className="text-warning">required first name</div>} */}
                        
                        
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control"  {...register("lastname",{required: true })} />
                        {errors.lastname && <div className="text-danger">required Last name</div>}


                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label className="form-label">DOB</label>
                        <input type="date" className="form-control" {...register("dob",{required: true })} />
                        {errors.dob && <div className="text-danger">required dob of user</div>}
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label className="form-label">Email Id</label>
                        <input type="email" className="form-control" {...register("email",{required: true })}/>
                        {errors.email && <div className="text-danger">required user email id</div>}
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select className='form-control' {...register("gender",{required: true})}>
                        <option hidden></option>
                            <option>Male</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                        {errors.gender && <div className="text-danger">required gender </div>}
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="mb-3">
                        <label className="form-label">Working status</label><br/>
                        <input type="radio" {...register("working_status")}/>
                    </div>
                </div>
                <div className='col-md-12 text-center'>
                    <div className="mb-3">
                        <button type='submit' className='btn btn-primary'>submit</button>
                    </div>
                </div>

            </div>
        </div>
        </form>
    )
}

export default Myforms