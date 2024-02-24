import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
import CruisesPackage from "./CruisesPackage";

export default function Cruises()
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
                  <CruisesPackage/>
              
               </div>
            </div>
        </div>
    </div>  
        </>
    )
}