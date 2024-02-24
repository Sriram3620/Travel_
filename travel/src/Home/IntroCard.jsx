import "./Home.css";
import MyVerticallyCenteredModal from "./BookModal";
export default function IntroCard()
{
    return(
        <div className="container-fluid Intro-card  p-5">
            <div className="row">

            <div className="col-12 col-lg-6  text-center">
            <img className=" intro-img" src="https://img.freepik.com/free-psd/explore-world-travel-adventure-flyer-template_47987-16879.jpg?w=360&t=st=1702270542~exp=1702271142~hmac=a0b3359fa6f9f4e3cc1cf105c8cc95508ef26e0c98d047d3c7705e877752acba"/>
            </div>
            
            <div className="col-12 p-2 d-flex flex-column justify-content-center text-white col-lg-6">
                <h1 className="Explore-name">Discover the Extraordinary</h1>
                <p className="intro-card-des">
                Beyond the typical tourist attractions,<span>Discover the Extraordinary</span>  opens doors to hidden gems and local secrets. Immerse yourself in the culture, savor exquisite cuisines, and create memories that will last a lifetime. Our travel experts are dedicated to providing insider insights to make your journey truly extraordinary.
                </p>
                <MyVerticallyCenteredModal/>
            </div>

            </div>

        </div>
    )
}