import "./Header.css"
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import DropdownItemTagsExample from "./Place";
import Help from "./Help";
import Contact from "./ContactUs";
export default function Headers()
{
    return(
        <div className="shadow Home-con">

         <div className="Home-search ">
         <div className="container">
            <div className="row">
            <div className="search-input-con text-center p-2 d-flex col-12 col-md-4 col-lg-3">
                <input className="text-center search-input" type="text" />
                <button className="search-btn" >Search</button>
            </div>
            <div className="place-btn-con text-center p-2 col-12 col-md-2 m-3 col-lg-3">
               <DropdownItemTagsExample/>
            </div>
           <div className="help-top-con text-left p-2 col-12 col-md-2 m-2 col-lg-2">
            <Help/>
           </div>
           <div className="help-top-con text-left p-2 col-12 col-md-2 m-1 col-lg-3">
             <Contact/>
           </div>


            </div>
            </div>
            </div>
        
         

        </div>
    )
}