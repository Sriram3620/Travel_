import Popup from 'reactjs-popup'


import 'reactjs-popup/dist/index.css'

import { useState } from 'react'
import axios from "axios";

import Cookies from 'js-cookie'
const FavouritesBooking = (props) => {
  const {bookdata}=props
  const [showBooking,setBooking]=useState(false)

  const date=new Date()


  const onConfirmBooking=async()=>
  {
    const date=new Date()
    const user=Cookies.get("user")
    const price=bookdata.currentPrice.slice(1);
    setBooking(true)
    const data={
      user:user,
      img:bookdata.img,
      destination:bookdata.placeName,
      price:price,
      type:bookdata.type,
      time:`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }
   const res=await axios.post("http://localhost:3001/bookingdetails",data)

  }

  return(
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <span type="button" className="trigger-button">
          Book
        </span>
      }
    >
      {close => (
        <div className='confirm-booking-con'>
          {!showBooking && (<div>
          <div>
            <p className='sure-booking'>Are You sure to confirm Your Bookings?</p>
          </div>
          <div className='booking-btn-con'>
          <button
            type="button"
            className="trigger-button fav-cancel-btn"
            onClick={() => close()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="trigger-button fav-confirm-btn"
            onClick={onConfirmBooking}
          >
            Confirm
          </button>
          </div>
          </div>)}
          {showBooking && (<div className='booking-success-con'>
            <img className='tick-success-img' src="https://cdn1.iconfinder.com/data/icons/creative-round-ui/255/41-1024.png" />
            <h1 className='booking-thankyou'>Thankyou,your booking has been placed!</h1>
            <p>Soon you will receive your trip details,Happy Journey!!</p>
          </div>)}
        </div>
      )}
    </Popup>
  </div>
  )
      }
 export default FavouritesBooking