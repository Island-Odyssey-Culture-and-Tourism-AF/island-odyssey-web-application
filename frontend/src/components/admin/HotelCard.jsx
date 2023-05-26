import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react'
import axios from 'axios';
import UpdateHotelModal from './modals/UpdateHotelModal';
import DeleteHotelModal from './modals/DeleteHotelModal';

export default function HotelCard() {

  const [hotels, setHotels] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hotels");
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='row row-cols-1 row-cols-md-4 g-2 pt-5' style={{ display: "-webkit-inline-box", justifyContent: "space-around" }}>
      {hotels.map(hotel => (
        <Card key={hotel._id} style={{ width: '16rem', marginRight: '35px' }}>
          <div className='mt-2' style={{ display: 'flex', justifyContent: 'center' }}>
            <Card.Img variant="top" src={hotel.image} style={{ height: "165px", width: "140px" }} />
          </div>
          <Card.Body>
            <Card.Title>{hotel.name}</Card.Title>
            <Card.Text>{hotel.location}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{hotel.description}</ListGroup.Item>
          </ListGroup>
          <Card.Body style={{display: "inline-flex"}}>
            <Card.Link href="#"><UpdateHotelModal hotel={hotel}/></Card.Link>
            <Card.Link href="#"><DeleteHotelModal hotel={hotel} /></Card.Link>
          </Card.Body>
        </Card>
      ))};
    </div>
  )
}
