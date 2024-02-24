import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
export default function ResNav()
{
  const navigate=useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" className="d-lg-none res-nav-con ">
        <Container>
          <Navbar.Brand onClick={()=>navigate('/')}>
          <div className="logo-name-con">
              <img className="logo-img" alt="" src="https://skyrimromance.com/wp-content/uploads/2016/05/Skyrimromancelogo.png" />  
              <h1 className="logo-name-res" onClick={()=>navigate('/')}>Tourism</h1>
              </div>
          </Navbar.Brand>
          <Navbar.Toggle className='navbar-dark  mr-3' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='bg-white' id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div className='text-white'>
              <NavDropdown className='res-nav-items text-white' title="Home" id="collapsible-nav-dropdown">
             
                <NavDropdown.Item  className='items-sub' onClick={()=>navigate('/')}  >Welcome</NavDropdown.Item>
                
                <NavDropdown.Item  className='items-sub'onClick={()=>navigate('/')}>
                  Trending
                </NavDropdown.Item>
          
              </NavDropdown>
              </div>
              <NavDropdown className='res-nav-items text-white' title="Features" id="collapsible-nav-dropdown">
                <NavDropdown.Item className='items-sub' onClick={()=>navigate('/couple')}>COUPLE</NavDropdown.Item>
                <NavDropdown.Item className='items-sub' onClick={()=>navigate('/grouptour')} >
                  GROUP TOUR
                </NavDropdown.Item>
                <NavDropdown.Item className='items-sub' onClick={()=>navigate('/cruises')}  >
                  CRUISES
                </NavDropdown.Item>
                <NavDropdown.Item className='items-sub' onClick={()=>navigate('/wildlife')}  >
                  WILDLIFE
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <Nav>
              <Nav.Link className='res-nav-items'  >Bookings</Nav.Link>
              <Nav.Link className='res-nav-items'  onClick={()=>navigate('/about')} >About</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
}