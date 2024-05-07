import React from 'react';
import { useForm} from 'react-hook-form';

function Myforms() {

    const {register,handleSubmit, formState: { errors }} = useForm()
    const mysubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(mysubmit)}> 
        <div className='container border p-5 shadow'>
            <div className='row'>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" {...register("firstname",{required: true })}/>
                        {errors.firstname && <div class="form-text text-danger">We'll never share your email with anyone else.</div>}
                        
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control"  {...register("lastname")}/>
                        <div class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <label class="form-label">DOB</label>
                        <input type="date" class="form-control" />
                        <div class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <label class="form-label">Email Id</label>
                        <input type="email" class="form-control" />
                        <div class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class="mb-3">
                        <label class="form-label">Gender</label>
                        <select className='form-control'>
                            <option>Male</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                        <div class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class="mb-3">
                        <label class="form-label">Working status</label><br/>
                        <input type="radio"/>
                        <div class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>
                <div className='col-md-12 text-center'>
                    <div class="mb-3">
                        <button type='submit' className='btn btn-primary'>submit</button>
                    </div>
                </div>

            </div>
        </div>
        </form>
    )
}

export default Myforms