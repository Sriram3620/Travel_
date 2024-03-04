import PackageDetails from "../PackageDetails"
const coupleArr=[
    {
        id:"BALI",
        type:"GROUP TOUR",
        placeName:"Bali",
        img:"https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZW5kcyUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        Destinations:"India | Bali",
        currentPrice:'$2899',
        originalPrice:"$4399"
    },
    {   id:"NORTHAMERICA",
        type:"GROUP TOUR",
        placeName:"North Ameica",
        img:"https://www.businessinsider.in/thumb.cms?msid=67031802&width=1200&height=900",
        Destinations:"India | North America",
        currentPrice:'$4499',
        originalPrice:"$6345"
    },
    {   id:"AUSTRALIA",
        type:"GROUP TOUR",
        placeName:"Australia",
        img:"https://etimg.etb2bimg.com/photo/89740602.cms",
        Destinations:"India | Australia",
        currentPrice:'$3299',
        originalPrice:"$4299"
    },
    {   id:"LONDON",
        type:"GROUP TOUR",
        placeName:"London",
        img:"https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
        Destinations:"India | London",
        currentPrice:'$3499',
        originalPrice:"$4799"

    },
    {   id:"GOA",
        type:"GROUP TOUR",
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
        {coupleArr.map((each)=><PackageDetails val={each} key={each.id}/>)}
        </>
)
}