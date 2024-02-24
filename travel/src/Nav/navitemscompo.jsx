import { useState } from "react";
import DropDown from "./dropdown";
export default function NavItemsCom(props)
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
    <div> 
    <div className="home-con">     
    <label for="home" onClick={isTrue} className="nav-items" href="">{props.name}</label>
    <i onClick={isTrue} id="home" class="fa fa-angle-down drop-icon"></i>
    </div >
    {current && <DropDown sub1={props.sub1} sub2={props.sub2} sub3={props.sub3} sub4={props.sub4} 
    check3={props.check3} check4={props.check4}
    />}
  
    </div>
);
}