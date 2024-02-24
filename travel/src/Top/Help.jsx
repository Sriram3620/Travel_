import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

export default function Help()
{
    const navigate=useNavigate()
    return(
        <a href="#" className="Help-con ">
        <i class="fas fa-heart help-icon"></i>
            <p onClick={()=>navigate("/FavouritesPage")} className="help-name">Favourites<sup>0</sup></p>
        </a>
    )
}