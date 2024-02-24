
const coupleArr=[
    {
        placeName:"Bali",
        img:"https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZW5kcyUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        Destinations:"India | Bali",
        currentPrice:'$2899',
        originalPrice:"$4399"
    },
    {
        placeName:"North Ameica",
        img:"https://www.businessinsider.in/thumb.cms?msid=67031802&width=1200&height=900",
        Destinations:"India | North America",
        currentPrice:'$4499',
        originalPrice:"$6345"
    },
    {
        placeName:"Australia",
        img:"https://etimg.etb2bimg.com/photo/89740602.cms",
        Destinations:"India | Australia",
        currentPrice:'$3299',
        originalPrice:"$4299"
    },
    {
        placeName:"London",
        img:"https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
        Destinations:"India | London",
        currentPrice:'$3499',
        originalPrice:"$4799"

    },
    {
        placeName:"Goa,India",
        img:"https://royalsamrattravels.in/wp-content/uploads/2023/02/k6tdwcd0iuhdypxpa5ctex35i61i_1589442003_frnds.jpg",
        Destinations:"India | Goa",
        currentPrice:'$1799',
        originalPrice:"$2399"

    }

  ]




export default function GroupPackage()
{
    return(
        <>
        {coupleArr.map((val,id)=>
            {
                console.log(id);
                return( 
        <div className="container-fluid couple-bg"> 
            <div className="row card-con shadow">
                    <div className="col-12 col-md-6 col-lg-5">
                  <img className="w-100 couple-img" src={val.img}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-3">
                        <div className="d-flex">
                            <p className="couple-tour">GROUP TOUR</p>
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
                        <p className="per-couple">Per Person</p>
                        <button className="coupe-add-btn">Add</button>
                    </div>
                </div>
            </div>
            )
        })
       
}
</>
)
}