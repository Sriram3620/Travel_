import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
import FavouritesContext from "../Context/FavouritesContext";
import FavouriteItem from ".";
import { useNavigate } from "react-router-dom"
export default function FavouritesPage()
{
    const navigate=useNavigate()
    return(
        <FavouritesContext.Consumer>
            {value=>
            {
                const {Cart}=value
                return(
                    <>
                    <div>
                        <ResNav/>
                        <div className='bg-con'>
                            <Logo/>
                                <div className='w-100 Home-bg-con '>
                                <Headers/>
                                    <div className="Favorites-total-bg">
                                        {Cart.map((each)=><FavouriteItem items={each} key={each.id} />)}
                                        {Cart.length===0 && (<div className="no-favorites-con">
                                         <img className="" src="https://cdn.dribbble.com/users/12570/screenshots/13987694/media/1635918fab6854e489723a301619b7b2.jpg?compress=1&resize=400x300" alt="NoFavorites"/>
                                        <button  onClick={()=>navigate("/couple")} className="search-btn">Add</button>
                                        </div>)}
                                    </div>
                                </div>
                        </div>
                    </div>
                    </>
                )
            }}
        </FavouritesContext.Consumer>
      
    )
}