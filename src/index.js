import React,{lazy,Suspense} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import "./style.css";
import Cusnavbar from './modules/shares/Cusnavbar';

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
import Mycontactpage from './modules/dashboard/Mycontactpage';
import Myreduxdashboad from './modules/reduxjs/Myreduxdashboad';
import { Provider } from 'react-redux';
import { Mystore } from './modules/reduxjs/Mystore';
import Loginpage from './modules/jsoncrud/Loginpage';
import Myregistorpage from './modules/jsoncrud/Myregistorpage';
import Mylandingpage from './modules/jsoncrud/Mylandingpage';
import Mycreatenew from './modules/jsoncrud/Mycreatenew';
import Myeditpage from './modules/jsoncrud/Myeditpage';

// import Mylazyloading from './Mylazyloading';
const Myladyload = lazy(()=>import('./Mylazyloading'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Mystore}>
    <Cusnavbar/>
      <Routes>
        <Route path='' element={<Loginpage/>}/>
        <Route path='registor' element={<Myregistorpage/>}/>
        <Route path='about' element={<Cusaboutpage/>}/>
        <Route path='dashboard' element={<Mylandingpage/>}/>
        <Route path='dashboard/addrecord' element={<Mycreatenew/>}/>
        <Route path='dashboard/edit/:id' element={<Myeditpage/>}/>
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
        <Route path='contact' element={<Mycontactpage/>}/>
        <Route path='lazyloding' element={
          <Suspense fallback={<h1 style={{color:'red',fontSize:'60px',position:'fixed',backgroundColor:'orange',margin:'100px'}}>Loding page...</h1>}> 
              <Myladyload></Myladyload>
          </Suspense>
        }/>
        <Route path='reduxpage' element={<Myreduxdashboad/>}/>

        <Route path='*' element={<Cuserror/>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


