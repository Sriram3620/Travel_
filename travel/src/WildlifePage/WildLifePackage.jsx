import PackageDetails from "../PackageDetails"

const coupleArr=[
    {
        id:"ETOSHA",
        type:"WILDLIFE",
        placeName:"ETOSHA NATIONAL PARK",
        img:"https://static.toiimg.com/thumb/msid-46109893,width=1200,height=900/46109893.jpg",
        Destinations:"India | Etosha",
        currentPrice:'$1599',
        originalPrice:"$2399"
    },
    {
        id:"OKAVANGO",
        type:"WILDLIFE",
        placeName:"OKAVANGO DELTA (BOTSWANA)",
        img:"https://greenglobaltravel.com/wp-content/uploads/Two_white_rhino_BJoubert_Botswanajpg.jpg",
        Destinations:"India | Okavango",
        currentPrice:'$1299',
        originalPrice:"$1999"
    },
    {   id:"BANDHAVGARH",
        type:"WILDLIFE",
        placeName:"BANDHAVGARH NATIONAL PARK",
        img:"https://greenglobaltravel.com/wp-content/uploads/2022/04/1.jpg",
        Destinations:"India | Park",
        currentPrice:'$3299',
        originalPrice:"$4299"
    },
    {   id:"KOMODO",
        type:"WILDLIFE",
        placeName:"KOMODO NATIONAL PARK (INDONESIA)",
        img:"https://www.indonesia.travel/content/dam/indtravelrevamp/en/news-events/news/10-reasons-to-visit-the-magnificent-komodo-national-park/dcd837c723d980d06b0b75b094d316c80bfde1a9-6727f.jpg",
        Destinations:"India | Indonesia",
        currentPrice:'$3499',
        originalPrice:"$4799"

    },
    {   id:"BARRIER",
        type:"WILDLIFE",
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
        {coupleArr.map((each)=><PackageDetails val={each} key={each.id}/>)}
</>
)

}