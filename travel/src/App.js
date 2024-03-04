import logo from './logo.svg';
import './App.css';
import Logo from './Nav/logo';
import Headers from './Top/Headers';
import BasicExample from './boo';
import ResNav from './resNav/ResNav';
import Home1 from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './LoginPage/Login';
import Total from './Totalcom';
import FavouritesPage from './FavouritesPage/FavouritesPage';
import SignIn from './LoginPage/Login';
import SignUpPage from './LoginPage/SignupPage';
import CouplePage from './CouplePage/Couple';
import GroupTourPage from './GroupTour/GroupTourPage';
import Cruises from './CruisesPage/Cruises';
import WildLife from './WildlifePage/Wildlife';
import About from './About/About';
import Maldives from './Maldives/Maldives';
import Newyork from './Newyork/NewYork';
import AddUserForm from './AAForm';
import { useState } from 'react';
import FavouritesContext from './Context/FavouritesContext';
import Cookie from 'js-cookie'
import ProtectedRoute from './ProtectedRoute/protectedRoute';
import Admin from './AdmingPage';
import YourBookings from './YourBookings';
import ContactUs from './ContactUs';
function App() {
  
  const [Cart,SetCart]=useState([])
  const addFavourites=(val)=>
  {
    const Filter=Cart.filter((each)=>each.id===val.id)
    if(Filter.length===0){
      SetCart([...Cart,val])
    }
 
  }

  const removeFavorites=(id)=>
  {
    const filter=Cart.filter((each)=>each.id!==id)
    SetCart(filter)
  
  }
 
  const token = Cookie.get('jwt_token')
  const isAuthenticated =token !==undefined

  return (
    <>
    <FavouritesContext.Provider value={{Cart,addFavourites:addFavourites,removeFavorites:removeFavorites}}>
    <Routes>
    <Route path="/login" element={<SignIn isAuthenticated={isAuthenticated} />} />
    {/* <Route path="/login" element={<ProtectedRoute element={<SignIn />} isAuthenticated={isAuthenticated} />} /> */}
    <Route path="/" element={<ProtectedRoute element={<Total />} isAuthenticated={isAuthenticated} />} />
    <Route path="/FavouritesPage" element={<ProtectedRoute element={<FavouritesPage />} isAuthenticated={isAuthenticated} />} />
    <Route path="/signup" element={<ProtectedRoute element={<SignUpPage />} isAuthenticated={isAuthenticated} />} />
    <Route path="/couple" element={<ProtectedRoute element={<CouplePage />} isAuthenticated={isAuthenticated} />} />
    <Route path="/grouptour" element={<ProtectedRoute element={<GroupTourPage />} isAuthenticated={isAuthenticated} />} />
    <Route path="/cruises" element={<ProtectedRoute element={<Cruises />} isAuthenticated={isAuthenticated} />} />
    <Route path="/wildlife" element={<ProtectedRoute element={<WildLife />} isAuthenticated={isAuthenticated} />} />
    <Route path="/about" element={<ProtectedRoute element={<About />} isAuthenticated={isAuthenticated} />} />
    <Route path="/maldives" element={<ProtectedRoute element={<Maldives />} isAuthenticated={isAuthenticated} />} />
    <Route path="/newyork" element={<ProtectedRoute element={<Newyork />} isAuthenticated={isAuthenticated} />} />
    <Route path="/admin" element={<ProtectedRoute element={<Admin />} isAuthenticated={isAuthenticated} />} />
    <Route path="/yourbookings" element={<ProtectedRoute element={<YourBookings />} isAuthenticated={isAuthenticated} />} />
    <Route path="/contactus" element={<ProtectedRoute element={<ContactUs />} isAuthenticated={isAuthenticated} />} />
        {/* <Route path="/FavouritesPage" element={<FavouritesPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/couple" element={<CouplePage />} />
        <Route path="/grouptour" element={<GroupTourPage />} />
        <Route path="/cruises" element={<Cruises />} />
        <Route path="/wildlife" element={<WildLife />} />
        <Route path="/about" element={<About />} />
        <Route path="/maldives" element={<Maldives />} />
        <Route path="/newyork" element={<Newyork />} />
        <Route path="/add" element={<AddUserForm />} /> */}
  </Routes>
    </FavouritesContext.Provider>
 
  </>
  );
}

export default App;
