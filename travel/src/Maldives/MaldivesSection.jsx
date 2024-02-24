import "./Maldives.css"
import MaldivesTabs from "./MaldivesTabSwitch"

const MalInfoLists=
{
   place:"Maldives",
   Infodes:"Maldives, independent island country in the north-central Indian Ocean. It consists of about 1,200 low-lying small coral islands and sandbanks, only some 200 of which are inhabited, the most populous of which is Male. The country’s largest industries include fishing, tourism, and shipping. The population of Maldives belongs almost entirely to the Maldivian ethnic group, which is the result of various peoples settling in the islands successively through the country’s history. The first settlers, it is generally believed, were Tamil and Sinhalese peoples from southern India and Sri Lanka. Traders from Arab countries, Malaya, Madagascar, Indonesia, and China visited the islands through the centuries. The official language is an Indo-European language called Dhivehi (or Maldivian); Arabic, Hindi, and English are also spoken. Islam is the state religion.",
    departure:"Main Street, Taiwan" 
}
const LocationList={
    Location:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561417.097409055!2d71.12534431385085!3d0.8444492037015204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sin!4v1704253589941!5m2!1sen!2sin"   height="350"   referrerpolicy="no-referrer-when-downgrade`,
    history:"The history of the Maldives is intertwined with the history of the broader Indian subcontinent and the surrounding regions, comprising the areas of South Asia and Indian Ocean; and the modern nation consisting of 26 natural atolls, comprising 1194 islands. Historically, the Maldives had a strategic importance because of its location on the major marine routes of the Indian Ocean. The Maldives' nearest neighbours are the British Indian Ocean Territory, Sri Lanka and India. The United Kingdom, Sri Lanka and some Indian kingdoms have had cultural and economic ties with the Maldives for centuries. In addition to these countries, Maldivians also traded with Aceh and many other kingdoms in, what is today, Indonesia and Malaysia. The Maldives provided the main source of cowrie shells, then used as a currency throughout Asia and parts of the East African coast. Most probably Maldives were influenced by Kalingas of ancient India who were earliest sea traders to Sri Lanka and the Maldives from India and were responsible for the spread of Buddhism. Stashes of Chinese crockery found buried in various locations in the Maldives also show that there was direct or indirect trade contact between China and the Maldives. In 1411 and 1430, the Chinese admiral Zheng He 鄭和 visited the Maldives. The Chinese also became the first country to establish a diplomatic office in the Maldives, when the Chinese nationalist government based in Taipei opened an embassy in Malé in 1966. This office has since been replaced by the embassy of the People's Republic of China."
}
const GalleryUrls={
    img1:"https://www.gettingstamped.com/wp-content/uploads/2016/07/Maldives-Pictures-How-to-Maldives-photo-guide-Drone-Photography-couple-holding-hands-1.jpg",
    img2:"https://wallpapercave.com/wp/wp4088766.jpg",
    img3:"https://www.swantour.com/blogs/wp-content/uploads/2018/12/culture-of-maldives.jpg",
    img4:"https://blog.goway.com/globetrotting/wp-content/uploads/2016/02/Couple-on-a-Tropical-Beach-Jetty-Maldives_137193326.jpg",
    img5:"https://newtimezz.com/wp-content/uploads/2022/08/Best-Things-To-Do-In-Maldives-1-2048x1145.jpg",
    img6:"https://wallpapercave.com/wp/wp6925613.jpg"
}

export default function MaldivesSection()
{
   const ChangeInfo = ()=>
   {
      const TabInfo=document.getElementById("TabInfo");
      TabInfo.classList.add("bg-white")
   }


    return(
        <div className="container Maldives-total-bg">
            <div className="row">
              <div className="Maldives-bg">
               <MaldivesTabs MalInfoLists={MalInfoLists} LocationList={LocationList} GalleryUrls={GalleryUrls} />
              </div>
            </div>
        </div>
    )
}