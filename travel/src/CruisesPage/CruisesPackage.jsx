
const coupleArr=[
    {
        placeName:"European River Cruises",
        img:"https://culturedadventurer.com/wp-content/uploads/2021/02/Europe-Pre-Release1-1-scaled.jpg",
        Destinations:"India | Europe",
        currentPrice:'$5999',
        originalPrice:"$6799"
    },
    {
        placeName:"Eastern Caribbean",
        img:"https://www.ncl.com/sites/default/files/700x475%20magens%20bay%20shutterstock_523821157%20eastern%20carib.jpg",
        Destinations:"India | Eastern Caribbean",
        currentPrice:'$5299',
        originalPrice:"$6199"
    },
    {
        placeName:"Bahamas",
        img:"https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/siqk7vi45zr4g3ifi3nf.jpg",
        Destinations:"India | Bahamas",
        currentPrice:'$4999',
        originalPrice:"$5799"
    },
    {
        placeName:"Ibiza",
        img:"https://cruisingkids.co.uk/wp-content/uploads/2017/10/Cruise-ship-Ibiza-Old-Town.jpg",
        Destinations:"India | Ibiza",
        currentPrice:'$7899',
        originalPrice:"$8799"

    },
    {
        placeName:"Alaska",
        img:"https://www.expeditioncruise.net/wp-content/uploads/2018/11/Alaska-cruise-lines.jpg",
        Destinations:"India | Alaska",
        currentPrice:'$2999',
        originalPrice:"$3999"

    }

  ]

export default function CruisesPackage()
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
                            <p className="couple-tour">CRUISES TOUR</p>
                            <p className="Best-price">Best Price</p>
                        </div>
                        <div>
                            <h1 className="couple-place">{val.placeName}</h1>
                            <p className="couple-days">3 Days | All Places</p>
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