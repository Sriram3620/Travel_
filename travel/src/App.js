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
import FavouritesPage from './FavouritesPage.jsx/FavouritesPage';
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
function App() {
  return (
    <>
    
  <Routes>
      <Route Component={Total} path=''></Route>
      <Route Component={SignIn} path='/login'></Route>
      <Route Component={FavouritesPage} path='/FavouritesPage'></Route>
      <Route Component={SignUpPage} path='/signup'></Route>
      <Route Component={CouplePage} path='/couple'></Route>
      <Route Component={GroupTourPage} path='/grouptour'></Route>
      <Route Component={Cruises} path='/cruises'></Route>
      <Route Component={WildLife} path='wildlife'></Route>
      <Route Component={About} path='about'></Route>
      <Route Component={Maldives} path='/maldives'></Route>
      <Route Component={Newyork}  path='/newyork'></Route>
      <Route Component={AddUserForm} path="/add"></Route>
  </Routes>
  </>
  );
}

export default App;
