
import NavItemsCom from "./navitemscompo";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NavHome from "./NavHome";
import NavFeatures from "./NavFeatures";
import NavAbout from "./NavAbout";
import NavBookings from "./NavBookings";
import Cookie from 'js-cookie'
import Cookies from "js-cookie";
function NavItems()
{
    const navigate=useNavigate();
    const userName=Cookies.get('user')
    const checkAdmin=userName==="osriram4@gmail.com"

 const OnLogout=()=>
 {
    Cookies.remove('jwt_token')
    Cookies.remove('user')
    navigate('/login', { replace: true });
 }   
 
    return (
        <div className="nav-items-con">
          <div>
                <NavHome/>
                <NavFeatures/>
                {/* <NavBookings/> */}
                <NavAbout/>
                {checkAdmin && (<div className="home-con">     
                <label  onClick={()=>navigate('/admin')}  for="home"  className="nav-items" href="">Admin</label>
                </div >)}
                </div>
                <div   className="Login-Con">
                    <div className="d-flex">
                    <h1 onClick={OnLogout} className="mr-2 login-name">Logout</h1>
                    <i class="fas fa-user-circle profile-icon"></i>
                    </div>
                    <div className="d-flex profile-icon-con">
                   
                    <i class="fas fa-chevron-right profile-icon"></i>
                    </div>
                </div>
        </div>
    )
}

export default NavItems;