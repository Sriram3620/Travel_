import "./Couple.css"

const coupleArr=[
    {
        placeName:"Maldives Couple Tour",
        img:"https://static.toiimg.com/photo/msid-80845685,width-96,height-65.cms",
        Destinations:"India | Manali",
        currentPrice:'$2999',
        originalPrice:"$3648"
    },
    {
        placeName:"Manali",
        img:"https://5.imimg.com/data5/JP/BG/MY-54429930/kullu-manali-honeymoon-tour-pimple-saudagar-2c-pune-500x500.jpg",
        Destinations:"India | Manali",
        currentPrice:'$1499',
        originalPrice:"$2345"
    },
    {
        placeName:"Paris",
        img:"https://www.planetware.com/wpimages/2019/02/world-most-romantic-places-paris.jpg",
        Destinations:"India | Paris",
        currentPrice:'$3299',
        originalPrice:"$4299"
    },
    {
        placeName:"Venice, Italy",
        img:"https://www.planetware.com/wpimages/2019/02/world-most-romantic-places-venice.jpg",
        Destinations:"India | Italy",
        currentPrice:'$3499',
        originalPrice:"$4799"

    },
    {
        placeName:"Krabi, Thailand",
        img:"https://www.planetware.com/wpimages/2019/02/world-most-romantic-places-krabi.jpg",
        Destinations:"India | Thailand",
        currentPrice:'$2999',
        originalPrice:"$3999"

    }

  ]

export default function CoupleCard()
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
                            <p className="couple-tour">COUPLE TOUR</p>
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