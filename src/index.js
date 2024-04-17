import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc from './About';
import Mycontact, { Mycontact1, Mycontact2 } from './Contactus';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Abc></Abc>
    <Mycontact></Mycontact>
    <Mycontact1></Mycontact1>
    <Mycontact2></Mycontact2>
  </React.StrictMode>
);


