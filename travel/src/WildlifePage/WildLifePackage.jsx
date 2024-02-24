

const coupleArr=[
    {
        placeName:"ETOSHA NATIONAL PARK",
        img:"https://static.toiimg.com/thumb/msid-46109893,width=1200,height=900/46109893.jpg",
        Destinations:"India | Etosha",
        currentPrice:'$1599',
        originalPrice:"$2399"
    },
    {
        placeName:"OKAVANGO DELTA (BOTSWANA)",
        img:"https://greenglobaltravel.com/wp-content/uploads/Two_white_rhino_BJoubert_Botswanajpg.jpg",
        Destinations:"India | Okavango",
        currentPrice:'$1299',
        originalPrice:"$1999"
    },
    {
        placeName:"BANDHAVGARH NATIONAL PARK",
        img:"https://greenglobaltravel.com/wp-content/uploads/2022/04/1.jpg",
        Destinations:"India | Park",
        currentPrice:'$3299',
        originalPrice:"$4299"
    },
    {
        placeName:"KOMODO NATIONAL PARK (INDONESIA)",
        img:"https://www.indonesia.travel/content/dam/indtravelrevamp/en/news-events/news/10-reasons-to-visit-the-magnificent-komodo-national-park/dcd837c723d980d06b0b75b094d316c80bfde1a9-6727f.jpg",
        Destinations:"India | Indonesia",
        currentPrice:'$3499',
        originalPrice:"$4799"

    },
    {
        placeName:"BARRIER REEF MARINE PARK",
        img:"https://media.istockphoto.com/id/1280337869/photo/the-great-barrier-reef.jpg?s=612x612&w=0&k=20&c=pZ31GDckXq-FVDzjNzycryN-qx2JD0VLFC0ZVZ1ITw0=",
        Destinations:"India | Australia",
        currentPrice:'$2999',
        originalPrice:"$3999"

    }

  ]

export default function WildLifePackage()
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
                            <p className="couple-tour">WILDLIFE</p>
                            <p className="Best-price">Best Price</p>
                        </div>
                        <div>
                            <h1 className="couple-place">{val.placeName}</h1>
                            <p className="couple-days">2 Days | All Places</p>
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
                        <p className="per-couple">Per person</p>
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