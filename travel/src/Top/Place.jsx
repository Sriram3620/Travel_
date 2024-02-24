import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
function DropdownItemTagsExample() {
  const navigate=useNavigate();
  return (
    <Dropdown data-bs-theme="" >
        <Dropdown.Toggle id="dropdown-button-dark-example1" className='Places-btn' variant="">
          Places
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item   onClick={()=>navigate('/maldives')}>
            Maldives
          </Dropdown.Item>
          <Dropdown.Item  onClick={()=>navigate('/newyork')}>NewYork</Dropdown.Item>
          {/* <Dropdown.Item href="#/action-3">TamilNadu</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Karnataka</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Gujarat</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Maharastra</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Jammu & Kashmir</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default DropdownItemTagsExample;