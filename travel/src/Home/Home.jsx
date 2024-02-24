import {Carousel} from "react-bootstrap";
import React from 'react'
import "./Home.css";
import HomeSlide from "./HomeSlideImage";
import IntroCard from "./IntroCard";
import Trending from "./TrendingSection";
import Coupen from "./Coupen";
import AmazingSec from "./AmazingSection";
import AdventureQuotes from "./AdventureSection";
export default function Home1(){
    
    return(
        <div className="container ">
         <div className="row ">
            <div className="Home-con-bg">
         <IntroCard/>
         <div className="Tre-con ml-3">
         <div className="ama-head-con">
            <span className="hrline mt-4">|</span>
                <h1 className="Amazing-head"> <span className="amazing-head-span"> Trending Tours </span> Packages And
                <br/>Fun <span className="amazing-head-span">  Adventures  Waiting</span> For You</h1>
            </div>
        <Trending/>
        <Coupen/>
        <AmazingSec/>
        <AdventureQuotes/>
         </div>   

         </div>
         </div>
        </div>
    )
}