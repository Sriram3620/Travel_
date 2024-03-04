import React from "react";

const FavouritesContext=React.createContext({
    Cart:[],
    addFavourites:()=>{},
    removeFavorites:()=>{}
})
export default FavouritesContext