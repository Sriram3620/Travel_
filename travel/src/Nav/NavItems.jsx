
import NavItemsCom from "./navitemscompo";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NavHome from "./NavHome";
import NavFeatures from "./NavFeatures";
import NavAbout from "./NavAbout";
import NavBookings from "./NavBookings";
function NavItems()
{
    const navigate=useNavigate();
    return (
        <div className="nav-items-con">
          <div>
                <NavHome/>
                <NavFeatures/>
                <NavBookings/>
                <NavAbout/>
    
                </div>
                <div   className="Login-Con">
                    <div className="d-flex">
                    <h1 onClick={()=>navigate('/login')} className="mr-2 login-name">Login</h1>
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