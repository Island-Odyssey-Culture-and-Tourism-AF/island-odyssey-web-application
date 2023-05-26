import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function DeleteHotelModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = (event) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/api/hotels/${props.hotel._id}`).then((response) => {

      //success
      alert('Successfully deleted the hotel');
      handleClose();
      window.location.replace("/hotel-villa-management");

    }).catch((error) => {
      // alert(error);
    })
  }
  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Hotel</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete hotel {props.hotel.name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={submitForm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
