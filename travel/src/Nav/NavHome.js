import { useState } from "react";
import NavHomeDrop from "./NavHomeDrop";

export default function NavHome()
{
    const[current,setval]=useState(false);

    function isTrue(){
     if(current==false)
     {
         setval(true)
     }
     else{
         setval(false)
     }
    }
 

    return(
        <>
        <div> 
    <div className="home-con">     
    <label for="home" onClick={isTrue} className="nav-items" href="">Home</label>
    <i onClick={isTrue} id="home" class="fa fa-angle-down drop-icon"></i>
    </div >
    {current && <NavHomeDrop/>}
  
    </div>
        </>
    )
}