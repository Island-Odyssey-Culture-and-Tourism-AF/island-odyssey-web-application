import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

export default function UpdateHotelModal({ hotel }) {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit
      </Button>
      <SetModal
        show={modalShow}
        hotel={hotel}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

function SetModal(props) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [location, setLocation] = useState('');
  const [roomDetails, setRoomDetails] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/hotels/${props.hotel._id}`);
        // setImage(response.data.image);
        setName(response.data.name);
        setMobileNo(response.data.mobileNo);
        setLocation(response.data.location);
        setRoomDetails(response.data.roomDetails);
        setDescription(response.data.description)
      } catch (error) {
        // alert(error)
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDropdownChangeRoomType = (index, event) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[index].roomType = event.target.value;
    setRoomDetails(updatedRoomDetails);
  };

  const handleDropdownChangeGuestCount = (index, event) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[index].guestCount = event.target.value;
    setRoomDetails(updatedRoomDetails);
  };

  const handleInputChangeRate = (index, event) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[index].rate = event.target.value;
    setRoomDetails(updatedRoomDetails);
  };

  const onImageChange = (e) => {
    // const selectedFile = e.target.files[0];
    // if (selectedFile) {
    //   const img = {
    //     preview: URL.createObjectURL(selectedFile),
    //     data: selectedFile,
    //   };
    //   setImage(img);
    // }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // JavaScript for disabling form submissions if there are invalid fields
    (() => {
      'use strict'
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      })
    })()

    // if (!image) {
    //   // Handle case where image is not selected
    //   return;
    // }

    // const formData = new FormData();
    // formData.append('file', image.data);

    // try {
    //   const response = await axios.post('http://localhost:5000/api/hotels/image', formData);
    //   // Handle the response if required
    // } catch (error) {
    //   // Handle the error if required
    // }

    const hotelData = {
      // image: image.data,
      name,
      location,
      mobileNo,
      roomDetails,
      description
    };

    let url = 'http://localhost:5000/api/hotels/';

    if (props.hotel) {
      url += props.hotel._id; // Append the hotel ID to the URL for update
    }

    // try {
    //   const response = await axios.post(url, hotelData); // Use POST for both add and update
    //   // ...

    //   if (props.hotel) {
    //     alert('Successfully updated the hotel');
    //   } else {
    //     alert('Successfully added the hotel');
    //   }

    //   // ...
    // } catch (error) {
    //   // ...
    // }

    try {
      const response = axios.put(url, hotelData);
      //success
      alert('Successfully updated the hotel');
      props.onHide();
      window.location.replace("/hotel-villa-management");
    } catch (error) {
      // alert(error);
    }
  };

  const addRoom = () => {
    const newRoom = {
      roomType: '',
      guestCount: '',
      rate: ''
    };
    setRoomDetails([...roomDetails, newRoom]);
  };

  const removeRoom = (index) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails.splice(index, 1);
    setRoomDetails(updatedRoomDetails);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit a Hotel
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="g-3 needs-validation" noValidate>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={onImageChange} required />
            {image && <img src={image.preview} width="140px" height="165px" alt="Preview" />}
            <Form.Control.Feedback type="invalid">
              Please select an image.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control className="form-control" type="text" placeholder="ex: Sheraton Colombo Hotel" value={name} onChange={(e) => setName(e.target.value)} required />
            <div className="invalid-feedback">
              Please enter a hotel name.
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control className="form-control" type="text" placeholder="ex: Colombo 10" value={location} onChange={(e) => setLocation(e.target.value)} required />
            <div className="invalid-feedback">
              Please enter a location.
            </div>
          </Form.Group>           <Form.Group className="mb-3" controlId="mobileNo">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control className="form-control" type="text" placeholder="0771234567" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required />
            <div className="invalid-feedback">
              Please enter a mobile number.
            </div>
          </Form.Group>
          {roomDetails.map((room, index) => (
            <div key={index}>
              <Form.Group className="mb-3" controlId={`roomType-${index}`}>
                <Form.Label>Room Type</Form.Label>
                <Form.Control as="select" value={room.roomType} onChange={(e) => handleDropdownChangeRoomType(index, e)} required>
                  <option value="" disabled>Select a room type</option>
                  <option value="Superior, Guest room, City view">Superior, Guest room, City view</option>
                  <option value="Premier, Guest room, Ocean view">Premier, Guest room, Ocean view</option>
                  <option value="Premier, Guest room, Ocean view, Corner room">Premier, Guest room, Ocean view, Corner room</option>
                </Form.Control>
                <div className="invalid-feedback">
                  Please select a room type.
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId={`guestCount-${index}`}>
                <Form.Label>Guest Count</Form.Label>
                <Form.Control as="select" value={room.guestCount} onChange={(e) => handleDropdownChangeGuestCount(index, e)} required>
                  <option value="" disabled>Select a guest count</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
                <div className="invalid-feedback">
                  Please select a guest count.
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId={`rate-${index}`}>
                <Form.Label>Rate</Form.Label>
                <Form.Control className="form-control" type="text" placeholder="ex: Rs.20000/=" value={room.rate} onChange={(e) => handleInputChangeRate(index, e)} required />
                <div className="invalid-feedback">
                  Please enter a rate.
                </div>
              </Form.Group>
              <hr />
            </div>
          ))}
          <Button variant="secondary" onClick={addRoom}>
            Add Room
          </Button>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <div className="invalid-feedback">
              Please enter a description.
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Update Hotel
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}