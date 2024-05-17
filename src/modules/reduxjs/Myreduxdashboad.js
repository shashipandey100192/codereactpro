import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './Myactions';


function Myreduxdashboad() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12'>
                    <h1>redux page </h1>
                    <div>
                        <div>
                            <button onClick={() => dispatch(increment())}>Increment</button>
                                    <span>{count}</span>
                            <button onClick={() => dispatch(decrement())}>Decrement </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myreduxdashboad