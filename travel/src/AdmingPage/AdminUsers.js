import axios from "axios";
import { useState,useEffect } from 'react';

const trackingData=[
    {
        trackingNumber:"325252525",
        status:"kdfjjf"
    },
    {
        trackingNumber:"325252525",
        status:"kdfjjf"
    },
]
const AdminUsers=()=>
{
  const[adminUserData,setAdminUserData]=useState([])
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get("http://localhost:3001/adminuserdata");
            setAdminUserData(res.data);
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
                      <th scope="col" className="AdminTrendingName">Name</th>
                      <th scope="col" className="AdminTrendingName">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminUserData.length===0 && <h1 className="nodata-admin">No data Found Add below</h1>}
                    {adminUserData.map((each)=>{
                    
                       return(
                       <tr key={each._id}>
                       <th scope="row" className="AdminTrendId">{each._id}</th>
                       <td>{each.name}</td>
                       <td type="button" className="updatebtn ">
                       <td>{each.email}</td>

                

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

export default AdminUsers