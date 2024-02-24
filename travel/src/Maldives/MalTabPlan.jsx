import { useEffect, useState } from "react";

const dep=[
    {
     dayCount:1,
     desHead:"Departure",
     des:"Your journey begins as you arrive in the Maldives, greeted by the vibrant hues of the coral reefs and the smiling faces of the locals. The moment you set foot on the velvety sands, you'll feel the embrace of this idyllic destination. Whether you arrive in the daylight, with the sun casting a golden glow on the palm-fringed beaches, or in the evening, under a canvas of stars, the Maldives welcomes you with open arms.Indulge in the seamless transition from the airport to your chosen accommodation, where overwater bungalows and beachfront villas become your private sanctuaries. The arrival experience is not just a check-in; it's an introduction to a world of luxury, relaxation, and the natural wonders of the Maldives.As your time in this paradise draws to a close, the departure is a bittersweet farewell to the sun-kissed shores and the tranquil lagoons. The departure time marks the end of an unforgettable chapter filled with moments of awe and wonder."
    },
    {
        dayCount:2,
        desHead:"Adventure Begins",
        des:"Get ready for the ultimate adventure as you step into the 'Adventure Begins' chapter of your travel tale. This is not just a departure; it's the commencement of a journey filled with adrenaline, exploration, and the promise of extraordinary experiences.As you gear up for your adventure, the air is charged with excitement, and the possibilities are as vast as the landscapes you're about to discover. Picture yourself at the starting point, where every step forward opens the door to new horizons, unknown trails, and thrilling escapades.Whether you're a thrill-seeker craving the rush of outdoor activities or an explorer eager to uncover hidden gems, this is where your heart quickens with anticipation. The adventure begins not just with the first step, but with every heartbeat that echoes the thrill of the unknown.Feel the pulse of excitement as you embark on a journey that transcends boundaries and challenges your comfort zone. From scaling majestic peaks to diving into the depths of vibrant underwater worlds, every adventure is a unique story waiting to unfold."
    },
    {
      dayCount:3,
      desHead:"Hidden Gems",
      des:" we invite you to embark on a journey off the beaten track, where the magic lies in the undiscovered and the extraordinary awaits those with a keen sense of curiosity. Imagine winding through labyrinthine streets, stumbling upon hidden cafes, and stumbling upon breathtaking vistas known only to a fortunate few.These secret spots, tucked away from the crowds, offer a glimpse into the authentic soul of a locale. Whether it's an ancient alleyway adorned with street art or a secluded cove with pristine waters, each hidden place tells a story waiting to be unveiled.As you explore these off-the-grid gems, you'll find that the real beauty often lies where few have ventured before. The Hidden Places section is an ode to the thrill of exploration, where the reward is not just the destination but the journey of uncovering the extraordinary in the seemingly ordinary."
    },
    {
        dayCount:4,
        desHead:"Historical Places",
        des:"we invite you to wander through the hallowed halls of ancient structures, walk the cobblestone streets where history was written, and marvel at the remnants of civilizations long gone. The Historical Places section is a gateway to a bygone era, where every step is a pilgrimage through the annals of time.Feel the weight of history as you stand before majestic castles, grand palaces, and time-worn ruins that whisper tales of triumphs and tribulations. Whether it's the awe-inspiring architecture of a medieval cathedral or the serenity of an ancient temple, each historical site is a living testament to the indomitable spirit of human ingenuity.As you explore these historical treasures, envision the lives that unfolded within these walls, the empires that rose and fell, and the events that shaped the course of history. This section is not just an itinerary; it's an invitation to witness the beauty and resilience of our shared human narrative."
    },
    {
        dayCount:5,
        desHead:"Shopping",
        des:"The Shopping section is your guide to uncovering fashion-forward pieces, authentic handmade crafts, and culinary delights that will serve as tangible reminders of your travel escapade. Whether you're a fashion enthusiast seeking the latest trends or a connoisseur of local flavors, the shopping experience is a delightful fusion of discovery and indulgence.As you peruse through boutique-lined streets or navigate through bustling marketplaces, anticipate the thrill of finding hidden gems and taking home more than just material possessions. Each purchase becomes a cherished memory, a piece of the destination that you can carry with you long after your journey concludes.So, set aside time to explore the Shopping section, where every storefront is a gateway to cultural expression, and every transaction is a small act of supporting local economies. Whether you're seeking the perfect memento or simply enjoying the browsing experience, let the joy of shopping add a vibrant chapter to your travel narrative."
    }
]

export default function MalTabPlan()
{
    const [isVisibletop,setIsVisibletop]=useState(false);
    useEffect(() => {
        // Trigger the animation after the component has mounted
        setIsVisibletop(true);
      }, []);
    return(
        <div className={`Info-con shadow fade-in-from-top ${isVisibletop ? 'visible' : ''}`}>

   {
    dep.map((des)=>
    {
        return(
            <>
             <div className="container ">
                <div className="row tourPlan-con">  
                <h1 className="col-12 col-md-2 plan-no"><span className="days-count">{des.dayCount}</span></h1>
                 <div className="departure-des col-12 col-md-10">
                 <h1 className="departure-days">Day {des.dayCount} :<span className="depature-span-des">{des.desHead}</span></h1>
                <p className="day1-des">{des.des}</p>
                </div>
                </div>
            </div>
            </>
        )
    })
   }
      
           

                
        </div>
    )
}