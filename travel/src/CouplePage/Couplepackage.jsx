import "./Couple.css"
import PackageDetails from "../PackageDetails"
const coupleArr=[
    {
        id:"MALDIVES",
        type:"COUPLE TOUR",
        placeName:"Maldives",
        img:"https://static.toiimg.com/photo/msid-80845685,width-96,height-65.cms",
        Destinations:"India | Maldives",
        currentPrice:'$2999',
        originalPrice:"$3648"
    },
    {   id:"MANALI",
        type:"COUPLE TOUR",
        placeName:"Manali",
        img:"https://5.imimg.com/data5/JP/BG/MY-54429930/kullu-manali-honeymoon-tour-pimple-saudagar-2c-pune-500x500.jpg",
        Destinations:"India | Manali",
        currentPrice:'$1499',
        originalPrice:"$2345"
    },
    {   id:"PARIS",
        type:"COUPLE TOUR",
        placeName:"Paris",
        img:"https://www.planetware.com/wpimages/2019/02/world-most-romantic-places-paris.jpg",
        Destinations:"India | Paris",
        currentPrice:'$3299',
        originalPrice:"$4299"
    },
    {   id:"ITALY",
        type:"COUPLE TOUR",
        placeName:"Italy",
        img:"https://www.planetware.com/wpimages/2019/02/world-most-romantic-places-venice.jpg",
        Destinations:"India | Italy",
        currentPrice:'$3499',
        originalPrice:"$4799"

    },
    {   id:"THAILAND",
        type:"COUPLE TOUR",
        placeName:"Thailand",
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
     
         {coupleArr.map((each)=><PackageDetails key={each.id} val={each}/>)}
       

</>
)

}