import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MaldivesSecHome from './MaldivesSecHome';
import "./Maldives.scss"
import { colors } from '@mui/material';
import MalTabInfo from './MalTabInfo';
import { useState } from 'react';
import MalTabPlan from './MalTabPlan';
import MaldivesLocation from './MaldivesLocation';
import MaldivesGallery from './MaldivesGallery';
export default function MaldivesTabs(props)
{

 const{MalInfoLists,LocationList,GalleryUrls}=props
 

  const [currentInfo,setInfo]=useState(true);
  const [currentPlan,setPlan]=useState(false);
  const [currentLocation,setLoc]=useState(false);
  const [cuurentGallery,setGal]=useState(false);
   const changeInfo=()=>
   {
       setInfo(true);
       setPlan(false);
       setLoc(false);
       setGal(false);
   }
   const changePlan=()=>
   {
       setInfo(false);
       setPlan(true);
       setLoc(false);
       setGal(false);
   }
   const changeLoc=()=>
   {
    setLoc(true);
    setInfo(false);
    setPlan(false);
    setGal(false);
   }
  const changeGal=()=>
  {
    setLoc(false);
    setInfo(false);
    setPlan(false);
    setGal(true)
  }

    return(
      <>
       <div className="MaldivesTab-con">
        <div class="radio-input ">
        <label onClick={changeInfo} className='col-12 col-md-6 col-lg-3'>
        <input value="value-1" name="value-radio" id="value-1" type="radio" defaultChecked />
        <h1 className="Tabs" >Information</h1>
        </label>
        <label onClick={changePlan} className='col-12 col-md-6 col-lg-3'>
          <input value="value-2" name="value-radio" id="value-2" type="radio"/>
        <h1 className="Tabs" >Tour Plan</h1>
        </label>
        <label onClick={changeLoc} className='col-12 col-md-6 col-lg-3'>
          <input value="value-3" name="value-radio" id="value-3" type="radio"/>
        <h1 className="Tabs">Location</h1>
        </label>
        <label onClick={changeGal} className='col-12 col-md-6 col-lg-2'>
          <input value="value-3" name="value-radio" id="value-3" type="radio"/>
        <span className="Tabs">Gallery</span>
        </label>
        <span class="selection"></span>
      
        </div>
      </div>
      <div className='container-fluid' >
         <div className='row'>
             {currentInfo && <MalTabInfo infoList={MalInfoLists}/>}
             {currentPlan && <MalTabPlan/>}
             {currentLocation && <MaldivesLocation LocationList={LocationList}/>}
             { cuurentGallery && <MaldivesGallery GalleryUrls={GalleryUrls}/>}
         </div>
      </div>
      </>
    )
}