import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import UserForm from './UserForm';
import { ForwardRefRenderFunction } from 'react';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h1 className='Details-name'>Enter Your Details</h1>
      </Modal.Header>
      <Modal.Body>
        <UserForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn-danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

 export default function Mod() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* <Button className='Book-btn' onClick={() => setModalShow(true)}>
        Book
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

