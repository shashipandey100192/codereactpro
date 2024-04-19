import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc from './About';
import Mycontact, { Mycontact1, Mycontact2 } from './Contactus';
import Mycustomdesign from './Mycustomdesign';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import "./style.css";
import Mybootstrap from './Mybootstrap';
import Myreactbootstrap from './Myreactbootstrap';
import Mymui from './Mymui';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Abc></Abc>
    <Mycontact></Mycontact>
    <Mycontact1></Mycontact1>
    <Mycontact2></Mycontact2>
    <Mycustomdesign/>
    <Mybootstrap/>
    <Myreactbootstrap/>
    <Mymui/>
    
  </React.StrictMode>
);


