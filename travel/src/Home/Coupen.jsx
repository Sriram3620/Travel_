import CoupenModal from "./CouponModal"
import { useEffect } from "react";
import {animateScroll as scroll} from 'react-scroll'; 
export default function Coupen()
{
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // You can adjust the threshold based on your needs
      if (scrollY > 1000) {
        document.getElementById('animatedElement').classList.add('animate');
      } else {
        document.getElementById('animatedElement').classList.remove('animate');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
        
        <div className="container pt-5 mt-5">
           
          <div id="animatedElement"  className="row Coupen-con ">
           
           <div className="col-12 col-md-12 order-lg-3 col-lg-7">
             <img className="w-100" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-minimalistic-black-event-promotion-coupon-background-image_262133.jpg"/>
            </div>
            <div className="col-12 col-md-12 p-5 order-md-1 col-lg-5 Apply-con">
                <h1 className="Coupen-des">Enter Valid Coupen and get some Offer <span><i class="fas fa-gifts gift-icon"></i></span></h1>
             <CoupenModal/>
          </div>
          </div>
        </div>
      
    )
}