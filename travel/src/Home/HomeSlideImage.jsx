import {Carousel} from "react-bootstrap";
import React from 'react'
export default function HomeSlide()
{
    let carousel = [
        {
          id : 1,
          image : "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&w=1380&t=st=1702266765~exp=1702267365~hmac=4e25528314e8774bef5e925fd5974ae8f55b8fe867052937c96019c1c92325ed"
        },
        {
          id : 2,
          image : "https://img.freepik.com/free-photo/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter_335224-427.jpg?w=1060&t=st=1702266868~exp=1702267468~hmac=6962e3dd009d084e511c580ad80341cb0f0fb095d88e6723d2f12518f273e0a1"
        }
      ]
    return(
        <>
        <Carousel>
          {
            carousel.map(carousel =>{
              return(
                <Carousel.Item  key={carousel.id} interval={3000}>
                <img
                    className='d-block Home-slide-image '
                    src={carousel.image}
                    alt={carousel.id}
                    style={{maxHeight:"530px",maxWidth:"5000px"}}
                />
              </Carousel.Item>
              )
            })
          }
        </Carousel>
        </>
    )
}