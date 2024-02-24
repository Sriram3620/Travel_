import { useEffect, useState } from "react";
export default function MalTabInfo(props)
{
    const {infoList}=props
    const [isVisibletop,setIsVisibletop]=useState(false);
    useEffect(() => {
        // Trigger the animation after the component has mounted
        setIsVisibletop(true);
      }, []);

    return(
        <div className={`Info-con shadow fade-in-from-top ${isVisibletop ? 'visible' : ''}`}>
            <h1 className="mal-info-head">{infoList.place}</h1>
            <p className="Been">Been there recently?</p>
            <div>
                <p className="Mal-history">{infoList.Infodes} </p>
                <div className="Mal-icon-con">
                    <div className="Mal-icons col-12 col-md-6 col-lg-3">
                        <i class="fas fa-clock"></i>
                        <p>10Days</p>
                     </div>
                     <div className="Mal-icons col-12 col-md-6 col-lg-3">
                     <i class="fas fa-user "></i>
                        <p>18+ Age</p>
                     </div>
                     <div className="Mal-icons col-12 col-md-6 col-lg-3">
                     <i class="fas fa-map-marker-alt "></i>
                        <p>Maldives</p>
                     </div>
                     <div className="Mal-icons col-12 col-md-6 col-lg-3">
                     <i class="fas fa-bullhorn "></i>
                        <p>Best Deals</p>
                     </div>
                </div>
                <div className="Mal-des-con mt-5">
                    <h1 className="Mal-des col-12  col-md-3">Destination</h1>

                    <p className="Mal-reach col-12 col-md-7">{infoList.place}</p>
                    <hr className="Mal-hr-line"/>
                </div>
                <div className="Mal-des-con mt-2">
                    <h1 className="Mal-des col-12  col-md-3">Departure</h1>
                    <p className="Mal-reach col-12 col-md-7">{infoList.departure}</p>
                    <hr className="Mal-hr-line"/>
                </div>
                <div className="Mal-des-con mt-2">
                    <h1 className="Mal-des col-12  col-md-3">Departure Time</h1>
                    <p className="Mal-reach col-12 col-md-7">Please arrive by 9:15 AM for a departure at 9:30 AM.</p>
                    <hr className="Mal-hr-line"/>
                </div>
                <div className="Mal-des-con mt-2">
                    <h1 className="Mal-des col-12  col-md-3">Return Time</h1>
                    <p className="Mal-reach col-12 col-md-7">Approximately 8:30 PM.</p>
                    <hr className="Mal-hr-line"/>
                </div>
                <div className="Mal-des-con mt-2">
                    <h1 className="Mal-des col-12  col-md-3">Dress Code</h1>
                    <p className="Mal-reach col-12 col-md-7">Casual, comfortable athletic clothing, hat and light jacket.</p>
                    <hr className="Mal-hr-line"/>
                </div>
            </div>
        </div>
    )
}