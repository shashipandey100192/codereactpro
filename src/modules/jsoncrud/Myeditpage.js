import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Myeditpage() {

    const navigat = useNavigate();
    const {id}=useParams();

    const [myfiled, changefld] = useState({
        name: "",
        email: "",
        pass: "",
        age: ""
    });
    
const fetchsinglerecord = ()=>{
    axios.get(`http://localhost:3333/student/${id}`).then((d)=>{
        changefld(d.data);
    })
}




   useEffect(()=>{
    fetchsinglerecord();
   },[]);

    const myupdate = (data) => {
        data.preventDefault();
        axios.put(`http://localhost:3333/student/${id}`, myfiled).then((a) => {
            console.log(a);
            navigat("/dashboard");
        })

    }
  return (
    <form onSubmit={myupdate}>
    <div className='container mt-5 p-3 shadow bg-light' style={{width:'300px'}}>
    <div className='row'>
        <div className='col-12'>
            <h4>Edit page</h4>
        </div>
        <div className='col-md-12'>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={myfiled.name} name='name' onInput={ e=> changefld({...myfiled, name:e.target.value})}/>
            </div>
        </div>
        <div className='col-md-12'>
            <div className="mb-3">
                <label className="form-label">Email id</label>
                <input type="email" className="form-control" name="email"  value={myfiled.email} onInput={ e=> changefld({...myfiled, email:e.target.value})}/>
            </div>
        </div>
        <div className='col-md-12'>
            <div className="mb-3">
                <label className="form-label">age</label>
                <input type="text" className="form-control" name="age"  value={myfiled.age}  onInput={ e=> changefld({...myfiled, age:e.target.value})}/>
            </div>
        </div>
        <div className='col-md-12'>
            <div className="mb-3">
                <label className="form-label">password</label>
                <input type="password" className="form-control"  value={myfiled.pass} name="pass" onInput={ e=> changefld({...myfiled, pass:e.target.value})}/>
            </div>
        </div>
        <div className='col-md-12'>
            <div className="mb-3 text-center">
              
                <input type="submit" className="btn btn-outline-success" value="Edit record" />
            </div>
        </div>
    </div>
</div>
</form>
  )
}

export default Myeditpage