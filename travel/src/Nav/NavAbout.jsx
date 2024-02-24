import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

export default function NavAbout()
{
    const navigate=useNavigate();
    return(
        <>
        <div> 
    <div className="home-con">     
    <label  onClick={()=>navigate('/about')}  for="home"  className="nav-items" href="">About</label>
    </div >
  
    </div>
        </>
    )
}