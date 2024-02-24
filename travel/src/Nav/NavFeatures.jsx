import NavFeaturesDrop from "./NavFeaturesDrop";
import { useState } from "react";
export default function NavFeatures()
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
    <label for="home" onClick={isTrue} className="nav-items" href="">Features</label>
    <i onClick={isTrue} id="home" class="fa fa-angle-down drop-icon"></i>
    </div >
    {current && <NavFeaturesDrop/>}
  
    </div>
        </>
    )
}