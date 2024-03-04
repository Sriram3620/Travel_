import PackageDetails from "../PackageDetails"
const coupleArr=[
    {
        id:"EUROPEANRIVER",
        type:"CRUISES TOUR",
        placeName:"European River Cruises",
        img:"https://culturedadventurer.com/wp-content/uploads/2021/02/Europe-Pre-Release1-1-scaled.jpg",
        Destinations:"India | Europe",
        currentPrice:'$5999',
        originalPrice:"$6799"
    },
    {   id:"EASTERN",
        type:"CRUISES TOUR",
        placeName:"Eastern Caribbean",
        img:"https://www.ncl.com/sites/default/files/700x475%20magens%20bay%20shutterstock_523821157%20eastern%20carib.jpg",
        Destinations:"India | Eastern Caribbean",
        currentPrice:'$5299',
        originalPrice:"$6199"
    },
    {   id:"BAHAMAS",
        type:"CRUISES TOUR",
        placeName:"Bahamas",
        img:"https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/siqk7vi45zr4g3ifi3nf.jpg",
        Destinations:"India | Bahamas",
        currentPrice:'$4999',
        originalPrice:"$5799"
    },
    {   id:"IBIZA",
        type:"CRUISES TOUR",
        placeName:"Ibiza",
        img:"https://cruisingkids.co.uk/wp-content/uploads/2017/10/Cruise-ship-Ibiza-Old-Town.jpg",
        Destinations:"India | Ibiza",
        currentPrice:'$7899',
        originalPrice:"$8799"

    },
    {   id:"ALASKA",
        type:"CRUISES TOUR",
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
        {coupleArr.map((each)=><PackageDetails val={each} key={each.id}/>)}
</>
)

}