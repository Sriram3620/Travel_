import { useEffect, useState } from "react";

export default function MaldivesGallery(props)
{
    const {GalleryUrls}=props
    const [isVisibletop,setIsVisibletop]=useState(false);
    useEffect(() => {
        // Trigger the animation after the component has mounted
        setIsVisibletop(true);
      }, []);
    return(
        <div className={`Info-con shadow fade-in-from-top ${isVisibletop ? 'visible' : ''}`}>
            <h1 className="Map-head">Make Your Memories here:</h1>
            <div className="container">
               <div className="row">
                    <img className="col-12 col-md-6 mt-3" src={GalleryUrls.img1} />
                    <img className="col-12 col-md-6 mt-3" src={GalleryUrls.img2} />
                    <img className="col-12 col-md-6 mt-5" src={GalleryUrls.img3}  />
                    <img className="col-12 col-md-6 mt-5" src={GalleryUrls.img4}  />
                    <img className="col-12 col-md-6 mt-5" src={GalleryUrls.img5}  />
                    <img className="col-12 col-md-6 mt-5" src={GalleryUrls.img6}  />
               </div>
            </div>
        </div>
    )
}