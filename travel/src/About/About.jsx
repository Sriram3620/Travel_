import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
import AboutPage from "./Aboutpage";
export default function About()
{
    return(
        <>
        <div>
            <ResNav/>
        <div className='bg-con'>
               <Logo/>
            <div className='w-100 Home-bg-con '>
               <Headers/>
               <div className="About-total-bg">
              <AboutPage/>
               </div>
            </div>
        </div>
    </div>  
        </>
    )
}