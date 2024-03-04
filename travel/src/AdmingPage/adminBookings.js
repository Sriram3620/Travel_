import { useState,useEffect } from "react"
import axios from "axios"
const AdminBookings=()=>
{

    const [adminBookingData,setData]=useState([])


    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get("http://localhost:3001/dashboard");
            setData(res.data);
            console.log(res.data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, []);

    return(
        <div>
            <div className="table-alignment mt-4 shadow adminbookingTable">
                <table className="table   caption-top table-hover">
                  <thead>
                    <tr className="">
                      <th scope="col" className="AdminTrendingName">UserId</th>
                      <th scope="col" className="AdminTrendingName">User</th>
                      <th scope="col" className="AdminTrendingName">destination</th>
                      <th scope="col" className="AdminTrendingName">price</th>
                      <th scope="col" className="AdminTrendingName">Type</th>
                      <th scope="col" className="AdminTrendingName">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminBookingData.length===0 && <h1 className="nodata-admin">No data Found Add below</h1>}
                    {adminBookingData.map((each)=>{
                    
                       return(
                       <tr key={each._id}>
                       <th scope="row" className="AdminTrendId">{each._id}</th>
                       <td>{each.user}</td>
                       <td className="updatebtn ">
                       <td>{each.destination}</td>
                       </td>
                       <td  className="updatebtn ">
                       <td>${each.price}</td>
                       </td>
                       <td  className="updatebtn ">
                       <td>{each.type}</td>
                       </td>
                       <td  className="updatebtn ">
                       <td>{each.time}</td>
                       </td>
                     </tr>
                       )
                    })}
                  </tbody>
                </table>
              </div>
        </div>
    )
}
export default AdminBookings