import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

export default function NavHomeDrop()
{
   const navigate=useNavigate()
   return(
    <div className="drop-con">
            <hr/>
            <h1  onClick={()=>navigate('/')}  className="drop-head">Welcome</h1>
            <hr/>
            <h1 onClick={()=>navigate('/')} className="drop-head">Trending Offer</h1>
            <hr/>
            
        </div>
   )
}