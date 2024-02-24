import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
export default function NavFeaturesDrop()
{
    const navigate=useNavigate();
    return(
        <div className="drop-con">
                <hr/>
                <h1 onClick={()=>navigate('/couple')} className="drop-head">COUPLE</h1>
                <hr/>
                <h1 onClick={()=>navigate('/grouptour')} className="drop-head">GROUP TOUR</h1>
                <hr/>
                <h1 onClick={()=>navigate('/cruises')}  className="drop-head">CRUISES</h1>
                <hr/>
                <h1 onClick={()=>navigate('/wildlife')} className="drop-head">WILDLIFE </h1>
                <hr/>
            </div>
       )
}