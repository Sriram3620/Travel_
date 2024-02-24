import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
 import CoupleCard from "./Couplepackage";
 export default function CouplePage()
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
                <CoupleCard/>
              
               </div>
            </div>
        </div>
    </div>  
        </>
    )
 }