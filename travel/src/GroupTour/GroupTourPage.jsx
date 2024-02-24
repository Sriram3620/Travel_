import Logo from "../Nav/logo"
import Headers from "../Top/Headers";
import ResNav from "../resNav/ResNav";
import GroupPackage from "./GroupPackage";
export default function GroupTourPage()
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
                   <GroupPackage/>
               </div>
            </div>
        </div>
    </div>  
        </>
    )
}