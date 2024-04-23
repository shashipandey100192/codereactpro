import React from 'react';
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Cusnavbar/>
      <Routes>
        <Route path='' element={<Cuslandingpage/>}/>
        <Route path='about' element={<Cusaboutpage/>}/>
        <Route path='*' element={<Cuserror/>}/>
      </Routes>
   
    </BrowserRouter>
  </React.StrictMode>
);


