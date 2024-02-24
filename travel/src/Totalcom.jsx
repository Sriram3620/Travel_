import './App.css';
import Logo from './Nav/logo';
import Headers from './Top/Headers';
import BasicExample from './boo';
import ResNav from './resNav/ResNav';
import Home1 from './Home/Home';
export default function Total()

{
    return(
    
            <div>
      <ResNav/>
    <div className='bg-con'>
  <Logo/>
  <div className='w-100 Home-bg-con '>
   <Headers/>
   <div className="Home-bg-con d-flex">
     <Home1/>
   </div>

   </div>
  </div>

  </div>
        
    )
}