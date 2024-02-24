import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
import WildLifePackage from "./WildLifePackage";
export default function WildLife()
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
                 <WildLifePackage/>
               </div>
            </div>
        </div>
    </div>  
        </>
    )
}