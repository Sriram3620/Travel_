import { useNavigate } from "react-router-dom"
export default function Contact()
{
    const navigate=useNavigate()
    return(
        <div onClick={()=>navigate("/contactus")} className="Help-con ">
           <i class="fas fa-phone-square-alt help-icon"></i>
            <p className="help-name">ContactUs</p>
        </div>
    )
}