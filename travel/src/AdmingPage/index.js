import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AdminTrendingDetails from "./adminTrending";
import AdminUsers from "./AdminUsers";
import DashBoard from "./DashBoard";
import AdminBookings from "./adminBookings";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import "./index.css"
export default function Admin()
{

    const user=Cookies.get('user')
    const adminCheck=user==="osriram4@gmail.com"
    if(!adminCheck)
    {
        return <Navigate to="/" replace />
    }

    return(
        <>
        <div>
            <ResNav/>
        <div className='bg-con'>
               <Logo/>
            <div className='w-100 Home-bg-con '>
               <Headers/>
               <div className="couple-total-bg">
                <div className="Admin-bg p-3">
               <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                justify
                >
            <Tab className="AdminTab1" eventKey="home" title="TrendingDetails">
              <AdminTrendingDetails/>
            </Tab>
                <Tab eventKey="profile" title="UserDetails">
                    <AdminUsers/>
                </Tab>
                <Tab eventKey="longer-tab" title="DashBoard">
                 <DashBoard/>
                </Tab>
                <Tab eventKey="contact" title="Booking Details" >
                    <AdminBookings/>
                </Tab>
             </Tabs>
             </div>
               </div>
            </div>
        </div>
    </div>  
        </>
    )
}