import "./About.css";
import AboutProfile from "./AboutProfile";
export default function AboutPage()
{
    return(
        <>
        <div className="container">
            <div className="row">
            <h1 className="text-center aboutUs-name">About Us</h1>
                <div className="col-12 col-lg-5 ">
                    <h1 className="about-quote">Let's journey together, where <span className="quote-span">every adventure is a tale waiting </span> to be told</h1>
                    <p className="about-para">
                    we understand the transformative power of travel because we've lived it. Having explored numerous corners of the globe, we've embraced the profound impact that each journey can have on one's life. Fueled by our passion for exploration and a deep-rooted belief that travel should be an enriching and accessible experience for all, we embarked on a mission to share the wonders of the world at affordable prices. Our company was born from a wealth of personal experiences, and we are committed to curating exceptional travel adventures that not only fit your budget but also leave you with priceless memories. Join us on a voyage where affordability meets awe-inspiring destinations, and let's create unforgettable moments together. 
                    </p>
             </div>
             <div className="col-12 col-lg-6 d-md-none d-lg-block">
                <img className="about-img" src="https://www.searchenginejournal.com/wp-content/uploads/2018/08/About-2x_619996714.webp"/>
             </div>
          <div className="col-12 col-md-6 col-lg-4 mt-3">
          <AboutProfile Name={"SRIRAM"} Position={"FOUNDER"} profile={"https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png"} Link={"https://www.linkedin.com/in/sriram-maruthamuthu-772068260/"} insta={""} tweet={""}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-3">
          <AboutProfile Name={"AJAY"} Position={"CHEIF MANAGER"} profile={"https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png"} Link={""} insta={""} tweet={""}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-3">
          <AboutProfile Name={"RAGHUL"} Position={"CHEIF EDITOR"} profile={"https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png"} Link={""} insta={""} tweet={""}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
          <AboutProfile Name={"MUTHU"} Position={"MANAGING DIRCTOR"} profile={"https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png"} Link={""} insta={""} tweet={""}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
          <AboutProfile Name={"HARISH"} Position={"TRIP MANAGER"} profile={"https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png"} Link={""} insta={""} tweet={""}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
          <AboutProfile Name={"THAMIZH"} Position={"TRIP DIRECTOR"} profile={"https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png"} Link={""} insta={""} tweet={""}/>
          </div>
            </div>
        </div>
        </>
    )
}