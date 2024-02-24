import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
import MaldivesSection from "./MaldivesSection";
export default function Maldives()
{
    return(
        <>
        <div>
            <ResNav/>
        <div className='bg-con'>
               <Logo/>
            <div className='w-100 Home-bg-con '>
               <Headers/>
               <div className="Maldives-sec-bg">
               <MaldivesSection/>
               </div>
            </div>
        </div>
    </div>  
        </>

    )
}