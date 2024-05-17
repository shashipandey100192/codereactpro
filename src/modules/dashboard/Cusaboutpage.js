import React,{Fragment} from 'react'
import Cusfooter from '../shares/Cusfooter'
import { myinc } from '../reduxjs/Mysecondaction'
import { useSelector,useDispatch } from 'react-redux';

function Cusaboutpage() {
  const a = useSelector((state) => state.mysecond.value)
  const dispatch = useDispatch()


  return (
    <Fragment>
    <div className='container mt-5 border'>
    <div className='row'>
        <div className='col-12'>
            <h1>About  page</h1>
            <button onClick={() => dispatch(myinc())}>custom inc</button>
            <h1>{a}</h1>

        </div>
    </div>
   </div>
   <Cusfooter/>
   </Fragment>
  )
}

export default Cusaboutpage