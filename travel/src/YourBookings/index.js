import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
import "./index.css"
import axios from "axios";
import { useState,useEffect } from "react";
import Cookies from "js-cookie";
const YourBookings=()=>
{

     const [bookings,setbookings]=useState([])
     useEffect(() => {
        const user=Cookies.get("user")
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:3001/yourbookings/${user}`);
            setbookings(res.data);
            console.log(res.data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, []);


    const onCancel=async(id)=>
    {
        const user=Cookies.get("user")
        try {
            const res = await axios.delete(`http://localhost:3001/yourbookings/${id}`);
            console.log(res.data)
            const response = await axios.get(`http://localhost:3001/yourbookings/${user}`);
            setbookings(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }


    return(
        <>
        <div>
            <ResNav/>
        <div className='bg-con'>
               <Logo/>
            <div className='w-100 Home-bg-con '>
               <Headers/>
  
               <div className="your-bk-bg">
                {bookings.length===0 && (<div className="text-center">
                  <img className="your-bk-nodata" src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-8867280-7265556.png" />
                </div>)}
                {bookings.map((each)=>
                (
                    <div key={each._id} className="container">
                    <div className="row m-2 p-3">
                        <img className="yourbk-img col-12 col-md-5" src={each.img} /> 
                        <div className="col-12 col-md-6 mt-3">
                            <h1 className="your-bk-destination">Destination: <span className="your-bk-destination-span">{each.destination}</span></h1>
                            <p className="your-bk-price">Price: <span className="your-bk-price-span">${each.price}</span></p>
                            <p className="your-bk-type">Type: <span className="your-bk-type-span">{each.type}</span></p>
                            <p className="your-bk-type">Booked Time: <span className="your-bk-type-span">{each.time}</span></p>
                            <button onClick={()=>{onCancel(each._id)}} className="your-bk-cancel">Cancel</button>
                        </div>
                        </div>
            
                    
                   </div>
                ))}
               
               </div>
            </div>
        </div>
    </div>  
        </>
    )
}
export default YourBookings