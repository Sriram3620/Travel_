import "./index.css"
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
const trackingData=[
    {
        trackingNumber:"325252525",
        status:"kdfjjf"
    },
    {
        trackingNumber:"325252525",
        status:"kdfjjf"
    },
]


const AdminTrendingDetails=() => {


    const [trendingData,setTrendingData]=useState([])

    const Calling=()=>
    {
      useEffect(() => {
        console.log("called")
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
    }
  Calling()
   

   const [validated, setValidated] = useState(false);
    const [data,setData]=useState({})
    const [imgUrl,setUrl]=useState('')
    const [destination,setDestination]=useState('')
    const [description,setDescription]=useState('')
    const [offerimg,setOfferImg]=useState('')
    const handleSubmit = async(event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        
      }
      else{
          event.preventDefault();
          const data={
              imgUrl:imgUrl,
              destination:destination,
              description:description,
              offerimg:offerimg
            }
           setUrl('')
           setDescription('')
           setDestination('')
           setOfferImg('')
          const response=await axios.post("http://localhost:3001/trendingdetails",data)
          const res = await axios.get("http://localhost:3001/trendingdetails");
          setTrendingData(res.data); 
      }
  
      setValidated(true);
    };
  
    const NameChange=(event)=>
    {
        setUrl(event.target.value)
    }
    const contactChange=(e)=>
    {
        setDestination(e.target.value);
    }
    const EmailChange=(e)=>
    {
        setOfferImg(e.target.value)
    }
    const TrackingChange=(e)=>
    {
        setDescription(e.target.value)
    }
    
    const [show, setShow] = useState(false);
   const [selectUpdate,setSeletUpdate]=useState('')
   const [selectUpdateVal,setSelectUpdateVal]=useState('')
   const[updatingId,setUpdateId]=useState('')

   const onUpdateInputChange=(e)=>
   {
    console.log(e.target.value)
    setSeletUpdate(e.target.value)
   }

  const SelectInputValue=(e)=>
  { 
  
    setSelectUpdateVal(e.target.value)
  }

 

  const onUpdate=async()=>
  {
    const data={
      imgUrl:imgUrl,
      destination:destination,
      description:description,
      offerimg:offerimg
    }

    try {
      const response = await axios.put(`http://localhost:3001/trendingupdate/${updatingId}`,data);
      const res = await axios.get("http://localhost:3001/trendingdetails");
      setTrendingData(res.data);
    } catch (error) {
      console.error('Error updating item:', error);
    }
    
  
  }

const SaveChanges=()=>
{
  setShow(false);
  setUpdateId("");
    setUrl('')
    setDescription('')
    setDestination('')
    setOfferImg('')
  onUpdate();
}

  const handleClose = () => {
    setShow(false)
    setUpdateId("");
    setUrl('')
    setDescription('')
    setDestination('')
    setOfferImg('')
  };
  const handleShow = (val) =>{
     setUpdateId(val._id);
     setUrl(val.imgUrl)
     setDescription(val.description)
     setDestination(val.destination)
     setOfferImg(val.offerimg)
    setShow(true);
  }
  
  const onDelete=async(id)=>
  {
    try {
      const response = await axios.delete(`http://localhost:3001/trendingdelete/${id}`);
     
      const res = await axios.get("http://localhost:3001/trendingdetails");
      setTrendingData(res.data); 
    } catch (error) {
      console.error('Error updating item:', error);
    }
  }


    return(
        <div className="p-3">
        <div className="table-alignment mt-4 shadow adminbookingTable">
                <table className="table   caption-top table-hover">
                  <thead>
                    <tr className="">
                      <th scope="col" className="AdminTrendingName">TrendId</th>
                      <th scope="col" className="AdminTrendingName">Location</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {trendingData.length===0 && <h1 className="nodata-admin">No data Found Add below</h1>}
                    {trendingData.map((each)=>{
                    
                       return(
                       <tr key={each._id}>
                       <th scope="row" className="AdminTrendId">{each._id}</th>
                       <td>{each.destination}</td>
                       <td type="button" className="updatebtn ">
                       <Button variant="primary" onClick={()=>{handleShow(each)}}>
                              Update
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Label className="m-2">Enter details</Form.Label>
                                <Form.Control disabled value={updatingId}
                                onChange={SelectInputValue} 
                                  aria-label="Large"
                                  
                                  aria-describedby="inputGroup-sizing-sm"
                                />
                                 <Form.Control className="mt-3" 
                                 onChange={NameChange}
                                value={imgUrl} 
                                  aria-label="Large"
                                  placeholder="imgUrl"
                                  aria-describedby="inputGroup-sizing-sm"
                                />
                                 <Form.Control className="mt-3" 
                                 onChange={contactChange} 
                                value={destination} 
                                  aria-label="Large"
                                  placeholder="destination"
                                  aria-describedby="inputGroup-sizing-sm"
                                />
                                 <Form.Control className="mt-3" 
                                onChange={TrackingChange} 
                                value={description}
                                  aria-label="Large"
                                  placeholder="description"
                                  aria-describedby="inputGroup-sizing-sm"
                                />
                                <Form.Control className="mt-3"
                                onChange={EmailChange}
                                  aria-label="Large"
                                  value={offerimg}
                                  placeholder="offerimg"
                                  aria-describedby="inputGroup-sizing-sm"
                                />
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={SaveChanges}>
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>

                       </td>
                       <td type="button" onClick={()=>{onDelete(each._id)}} className="trending-dlte-btn">Delete</td>
                     </tr>
                       )
                    })}
                  </tbody>
                </table>
              </div>
              <h1 className="Enter-tending-details">Enter Trending Details</h1>
              <Form className="" noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Img URL</Form.Label>
          <Form.Control 
          onChange={NameChange}
            required
            type="text"
            value={imgUrl}
            placeholder="img"
            defaultValue=""
          />
         
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Location</Form.Label>
          <Form.Control
          onChange={contactChange}
            required
            type="text"
            value={destination}
            placeholder="location"
            defaultValue=""
          />
         
        </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={TrackingChange}
            placeholder="Description"
            value={description}
            defaultValue=""
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>OfferImg URL</Form.Label>
          <Form.Control
          onChange={EmailChange}
            required
            type="text"
            value={offerimg}
            placeholder="offerimg"
            defaultValue=""
          />
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
               </Form>
              </div>
    )
  }
  export default AdminTrendingDetails