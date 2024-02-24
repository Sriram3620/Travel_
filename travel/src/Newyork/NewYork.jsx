import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
import MaldivesSection from "../Maldives/MaldivesSection";
import NewyorkSection from "./NewYorkSection";

export default function Newyork()
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
               <NewyorkSection/>
               </div>
            </div>
        </div>
    </div>  
        </>
    )
}