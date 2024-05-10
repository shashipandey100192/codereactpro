import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import "./style.css";
import Cusnavbar from './modules/shares/Cusnavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cusfooter from './modules/shares/Cusfooter';
import Cuslandingpage from './modules/dashboard/Cuslandingpage';
import Cusaboutpage from './modules/dashboard/Cusaboutpage';
import Cuserror from './modules/shares/Cuserror';
import Myservicelandingpage from './modules/components/service/Myservicelandingpage';
import Myservicepage from './modules/components/service/Myservicepage';
import Mycar from './modules/components/service/Mycar';
import Mybike from './modules/components/service/Mybike';
import Detailspage from './modules/components/service/Detailspage';
import Prants from './modules/components/drilingcomponents/Prants';
import Myforms from './modules/dashboard/Myforms';
import Mycharts from './modules/dashboard/Mycharts';
// import Mylazyloading from './Mylazyloading';
const Myladyload = lazy(()=>import('./Mylazyloading'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Cusnavbar/>
      <Routes>
        <Route path='' element={<Cuslandingpage/>}/>
        <Route path='about' element={<Cusaboutpage/>}/>
        <Route path='props' element={<Prants/>}/>
        <Route path='service' element={<Myservicelandingpage/>}>
            <Route path='' element={<Myservicepage/>}/>
            <Route path='car' element={<Mycar/>}/>
            <Route path='bike' element={<Mybike/>}/>
            <Route path='bike/view/:id' element={<Detailspage/>}/>
            <Route path='*' element={<Cuserror/>}/>
        </Route>
        <Route path='forms' element={<Myforms/>}/>
        <Route path='chart' element={<Mycharts/>}/>
        <Route path='lazyloding' element={
          <Suspense fallback={<h1 style={{color:'red',fontSize:'60px',position:'fixed',backgroundColor:'orange',margin:'100px'}}>Loding page...</h1>}> 
              <Myladyload></Myladyload>
          </Suspense>
        }/>
        <Route path='*' element={<Cuserror/>}/>
      </Routes>
   
    </BrowserRouter>
  </React.StrictMode>
);


