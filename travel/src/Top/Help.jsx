import { useNavigate } from "react-router-dom"

import FavouritesContext from "../Context/FavouritesContext"
export default function Help()
{
    const navigate=useNavigate()
    return(
        <FavouritesContext.Consumer>
            {value=>{
                const {Cart}=value
                return(
                    <a onClick={()=>navigate("/FavouritesPage")}  className="Help-con ">
                    <i class="fas fa-heart help-icon"></i>
                        <p  className="help-name">Favourites{Cart.length!==0 && <sup className="favourites-count">{Cart.length}</sup>}</p>

                    </a>
                  
                )
            }}
        </FavouritesContext.Consumer>
        
    )
}