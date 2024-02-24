import "./Newyork.css"
import MaldivesTabs from "../Maldives/MaldivesTabSwitch";

const MalInfoLists=
{
    id:"NEWYORK",
   place:"New York",
   Infodes:"New York City, city and port located at the mouth of the Hudson River, southeastern New York state, northeastern U.S. It is the largest and most influential American metropolis, encompassing Manhattan and Staten islands, the western sections of Long Island, and a small portion of the New York state mainland to the north of Manhattan. New York City is in reality a collection of many neighbourhoods scattered among the city’s five boroughs—Manhattan, Brooklyn, the Bronx, Queens, and Staten Island—each exhibiting its own lifestyle. Moving from one city neighbourhood to the next may be like passing from one country to another. New York is the most populous and the most international city in the country. Its urban area extends into adjoining parts of New York, New Jersey, and Connecticut. Located where the Hudson and East rivers empty into one of the world’s premier harbours, New York is both the gateway to the North American continent and its preferred exit to the oceans of the globe. ",
    departure:"Airport, NewYork" 
}

const LocationList={
    Location:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1704703360637!5m2!1sen!2sin`,
    history:"The history of New York is rich and diverse, encompassing the experiences of Native American tribes, European colonization, the American Revolution, and its evolution into one of the most populous and influential states in the United States. Here's a brief overview of key periods in New York's history.Before European contact, the region now known as New York was inhabited by various Native American tribes, including the Lenape, Mohican, and Iroquois Confederacy (which included the Mohawk, Oneida, Onondaga, Cayuga, and Seneca nations). Dutch explorer Henry Hudson, in the service of the Dutch East India Company, sailed up the river that now bears his name in 1609. In 1624, the Dutch West India Company established the colony of New Netherland, with its capital at New Amsterdam (present-day New York City).The English, under the command of Colonel Richard Nicolls, captured New Amsterdam in 1664 without much resistance. The territory was then renamed New York in honor of James, Duke of York, who later became King James II of England.New York played a significant role in the American Revolution. The state hosted major battles, including the Battle of Saratoga in 1777, a turning point in the war. New York City was occupied by the British for much of the conflict, making it a focal point for both military and political activities. After the American Revolution, New York became one of the original thirteen states and played a crucial role in the development of the new nation. The Erie Canal, completed in 1825, connected the Great Lakes to the Hudson River, facilitating trade and contributing to New York City's rise as a major port and commercial center. The 19th century saw significant industrialization and an influx of immigrants to New York, particularly to New York City. The Statue of Liberty, a gift from France, was dedicated in 1886 and became a symbol of freedom and opportunity for arriving immigrants.New York continued to thrive economically and culturally in the 20th century. The city became a global financial hub, and the Harlem Renaissance in the 1920s contributed to the city's cultural prominence. The construction of iconic landmarks like the Empire State Building and the United Nations Headquarters also marked this period."
}
const GalleryUrls={
    img1:"https://media.gettyimages.com/id/117178590/photo/new-york-skyline.jpg?s=612x612&w=0&k=20&c=BMI-NX_WrnAaZn1ojoXITOTAw0jBhlswT3WL0mpJXdo=",
    img2:"https://media.gettyimages.com/id/591407351/photo/indian-couple-admiring-new-york-cityscape-new-york-united-states.jpg?s=612x612&w=0&k=20&c=6U6GkOdsLJLKUptX9zadGgmO95ERtfSBVae26_xRo6Y=",
    img3:"https://media.gettyimages.com/id/841123468/photo/exploring-city.jpg?s=612x612&w=0&k=20&c=K49a1OAE4lHmyKtoahuJYmq_ywtqc_OtICm8YdUUdwY=",
    img4:"https://media.gettyimages.com/id/846410892/photo/manhattan-skyline-on-a-sunny-day-empire-state-building-on-the-right-new-york-united-states.jpg?s=612x612&w=0&k=20&c=w4m63haa8J1mm7tq-CZgmh-bSDVcHr6RYId75cXVOhM=",
    img5:"https://media.gettyimages.com/id/511361198/photo/group-of-friends-making-selfie.jpg?s=612x612&w=0&k=20&c=u1FYvkcCydzdafIG8aiId5iof1Z_2ZEkSffPWeqPR-c=",
    img6:"https://media.gettyimages.com/id/1321690745/photo/woman-watches-the-statue-of-liberty.jpg?s=612x612&w=0&k=20&c=oiF8FkuCpSdIYhfUCyY139jPuUvW7UwodXriONnEo_I="
}
export default function NewyorkSection()
{
   const ChangeInfo = ()=>
   {
      const TabInfo=document.getElementById("TabInfo");
      TabInfo.classList.add("bg-white")
   }


    return(
        <div className="container NewYork-total-bg">
            <div className="row">
              <div className="Maldives-bg">
               <MaldivesTabs key={MalInfoLists.id} MalInfoLists={MalInfoLists} LocationList={LocationList} GalleryUrls={GalleryUrls}  />
              </div>
            </div>
        </div>
    )
}