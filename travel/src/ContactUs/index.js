import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
import "./index.css"
const ContactUs=()=>
{
    return(

        <>
        <div>
            <ResNav/>
        <div className='bg-con'>
               <Logo/>
            <div className='w-100 Home-bg-con '>
               <Headers/>
               <div className="couple-total-bg">
               <div className="contact-bg">
            <section id="contact">
  
  <h1 class="section-header">Contact Us</h1>
  
  <div class="contact-wrapper">
  
 
    
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    

    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Trichy, TamilNadu</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:+91-9087953266" title="Give me a call">+919087953266</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="" title="Send me an email">osriram4@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul class="social-media-list">
          <li><a href="https://github.com/Sriram3620" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="https://www.linkedin.com/in/sriram-maruthamuthu-772068260/" target="_blank" class="contact-icon">
            <i class="fab fa-linkedin" aria-hidden="true"></i></a>
            
          </li>
          <li><a href="" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr/>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
</section>  
  
  
        </div>
               </div>
            </div>
        </div>
    </div>  
        </>


    
    )
}

export default ContactUs