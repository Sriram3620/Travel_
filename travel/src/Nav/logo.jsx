import NavItems from "./NavItems";
import Nav2Items from "../Nav2/nav2_items";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function Logo()
{
  let navCon=document.getElementById("navCon");
  let nav2Con=document.getElementById("nav2Con");
  const navigate=useNavigate();
   function navDisplay()
   {
      
      navCon.classList.add("nav-hide");
      nav2Con.classList.add("nav-display");
      
   }

  function nav2Display()
  {
    navCon.classList.toggle("nav-hide");
    nav2Con.classList.toggle("nav-display");
  }

    return(
        <div>
            <nav id="navCon"  className="nav-con shadow d-none d-lg-block pt-3">
                <div className="logo-con">
                <div className="logo-name-con">
              <img onClick={()=>navigate('/')} className="logo-img" alt="" src="https://skyrimromance.com/wp-content/uploads/2016/05/Skyrimromancelogo.png" />  
              <h1 className="logo-name">Tourism</h1>
              </div>
              
              </div>
           
              <NavItems/>
            </nav>
            <div id="nav2Con" className="icon-con ">
        <i onClick={nav2Display} class="fas fa-bars bar2"></i>
        <i class="fas fa-home nav-icon"></i>
        <i class="fas fa-voicemail nav-icon"></i>
        <i class="fas fa-home nav-icon"></i>
          </div>
        </div>
    )
}

export default Logo;