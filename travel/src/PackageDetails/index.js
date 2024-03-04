import FavouritesContext from "../Context/FavouritesContext"
const PackageDetails=(props)=>
{
    const {val}=props
    const {id}=val
   
    return(
        <FavouritesContext.Consumer>
            {value=>
            {
                const {addFavourites,Cart}=value
                
                const show=()=>
                {
                    addFavourites(val)
                }
                return(
                    <div  className="container-fluid couple-bg"> 
                    <div className="row card-con shadow">
                            <div className="col-12 col-md-6 col-lg-5">
                          <img className="w-100 couple-img" src={val.img}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 p-3">
                                <div className="d-flex">
                                    <p className="couple-tour">{val.type}</p>
                                    <p className="Best-price">Best Price</p>
                                </div>
                                <div>
                                    <h1 className="couple-place">{val.placeName}</h1>
                                    <p className="couple-days">10 Days | All Places</p>
                                </div>
                                <div>
                                    <p className="couple-destinations">DESTINATIONS</p>
                                    <p className="couple-destinations-place">{val.Destinations} </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 p-3">
                                <p className="couple-Inclusions">INCLUSIONS:</p>
                              <div className="d-flex justify-content-around">
                                <div className="hotels-icon-con">
                                <i class="fas fa-hotel hotels-icon"></i>
                                <p className="hotel-name">Hotels</p>
                                </div>
                                <div className="hotels-icon-con">
                                <i class="fas fa-plane hotels-icon"></i>
                                <p className="hotel-name">Flight</p>
                                </div>
                                </div>
                                <div className="d-flex justify-content-around">
                                <div className="hotels-icon-con">
                                <i class="fas fa-utensils hotels-icon"></i>
                                <p className="hotel-name">Food</p>
                                </div>
                                <div className="hotels-icon-con">
                                <i class="fas fa-binoculars hotels-icon"></i>
                                <p className="hotel-name">SightView</p>
                                </div>
                                </div> 
                                <p className="couple-deal-price">SUPER DEAL PRICE</p>
                                <h1 className="couple-price">{val.currentPrice}/ <span className="lined-price">{val.originalPrice}</span></h1>
                                <p className="per-couple">Per Couple</p>
                                <button className="coupe-add-btn" onClick={show}>Add</button>
                            </div>
                        </div>
                    </div>
                )
            }}
        </FavouritesContext.Consumer>
        
    )
}
export default PackageDetails