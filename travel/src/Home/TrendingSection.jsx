import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState,useEffect } from 'react';
import axios from 'axios';

let card=[
    {
     img:"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
     id:1,
     Place:"Maldives",
     Description:"The Maldives is an archipelagic state situated in the Indian Ocean known for its luxurious water villas. A tropical haven of white sand beaches, the Maldives is located in the south of Sri Lanka and is ideal for an adventure, honeymoon, or leisure holiday.",
     offerImg:"https://static.vecteezy.com/system/resources/previews/011/654/480/non_2x/discount-30-percent-off-in-surprise-opened-red-gift-box-golden-ribbon-3d-style-free-png.png",
     bg:"bg-success"
    },
    {
      img:"https://img.etimg.com/thumb/width-640,height-480,imgsize-104894,resizemode-75,msid-105355936/news/international/uae/dubai-and-the-uae-a-global-wealth-nexus.jpg",
      id:2,
      Place:"Dubai",
      Description:"Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Because of its large expatriate population, it feels like a Middle Eastern melting pot, and the atmosphere is generally tolerant.",
      offerImg:"https://t4.ftcdn.net/jpg/00/63/83/29/360_F_63832924_PE0b9gQltaKya7t6mIQLWat5ob0KcuXr.jpg",
      bg:"bg-warning"
      
     },
     {
      img:"https://img.etimg.com/thumb/width-640,height-480,imgsize-364478,resizemode-75,msid-79528149/magazines/panache/a-14-step-chunk-of-eiffel-towers-spiral-staircase-goes-under-the-hammer-fetches-328427/the-324-metre-eiffel-tower-was-built-by-engineer-gustave-eiffel-for-the-1889-world-fair-in-paris-.jpg",
      id:3,
      Place:"Paris",
      Description:"Think of the curving, graceful lines  spearing out into the sky and delicate spires of the Cathedral Notre-Dame de Paris that pierce the beautiful blue. Think of the slick spread of the monumental boulevard known as the Champs Elysees.",
      offerImg:"https://png.pngtree.com/png-clipart/20220616/original/pngtree-colorful-15-discount-offer-banner-png-image-png-image_8080507.png",
      bg:"bg-danger"
     },
     {
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Taj_Mahal_inside_view_02.JPG/2560px-Taj_Mahal_inside_view_02.JPG",
      id:4,
      Place:"India",
      Description:"The Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture. Its recognised architectonic beauty has a rhythmic combination of solids and voids, concave and convex and light shadow.",
      offerImg:"https://static.vecteezy.com/system/resources/previews/011/654/480/non_2x/discount-30-percent-off-in-surprise-opened-red-gift-box-golden-ribbon-3d-style-free-png.png",
      bg:"bg-secondary"
     },
     {
      img:"https://images.pexels.com/photos/3262994/pexels-photo-3262994.jpeg?cs=srgb&dl=pexels-boris-ulzibat-3262994.jpg&fm=jpg",
      id:5,
      Place:"China",
      Description:"It is an incredible feat of engineering of China and the greatest hand made building structure may ever build by mankind in ancient time. That's why this made Great Wall is a greatest ancient tourist attraction",
      offerImg:"https://png.pngtree.com/png-clipart/20220616/original/pngtree-colorful-15-discount-offer-banner-png-image-png-image_8080507.png",
      bg:"bg-info"
     }
  ]

function Trending() {

  const [trendingData,setTrendingData]=useState([])
    useEffect(() => {
     async function fetchData() {
       try {
         const res = await axios.get("http://localhost:3001/trendingdetails");
         setTrendingData(res.data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     }
     fetchData();
   }, []);
   

  return (
    
    <div id="Trending" className='Trending-con w-100 '>
      
    {
        trendingData.map((val)=>{
            return(
                <div className='Card-con m-3'>
                    <Card className={ 'shadow Trend-card p-2 '}  style={{ width: '18rem',height:'85vh' }}>
              <Card.Img className='trend-img-con' variant="top" src={val.imgUrl} />
              <Card.Body className='Des-con'>
                <Card.Title>{val.destination}</Card.Title>
                <Card.Text >
                {val.description}
                </Card.Text>
                </Card.Body>
            <div className='offer-con '>
              {/* <Button className='Book2-btn'>Add</Button> */}
              <img className='offer-img' src={val.offerimg}/>
                  </div>
                   </Card>
                          </div>
            )
        })
    }
  
   
  </div>
  );
}

export default Trending;