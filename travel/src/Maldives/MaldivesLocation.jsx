import { useEffect, useState } from "react";
import "./Maldives.css"
export default function MaldivesLocation(props)
{
    const {LocationList}=props
    const [isVisibletop,setIsVisibletop]=useState(false);
    useEffect(() => {
        // Trigger the animation after the component has mounted
        setIsVisibletop(true);
      }, []);

    return(
        <div className={`Info-con shadow fade-in-from-top ${isVisibletop ? 'visible' : ''}`}>
           <h1 className="Map-head">Tour Location:</h1>
           <div className="Map-con">
          <iframe className="mt-4 map" src={LocationList.Location}></iframe>
          </div>
          <h1 className="Map-head">History of the Place:</h1>
          <p className="history-para">{LocationList.history}</p>
        </div>
    )
}