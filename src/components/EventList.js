import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../data";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../css/event.css'

const EventList = () => {
  const [events, setEvents] = useState([]); 
 
  useEffect(() => {
      getData()
      .then((data) => {
          setEvents(data)
      })
  },[]);
  

  return(
    <div>
      {events.map(event => <Event key={event.id} event={event}/>)}
    </div>
   
  )
  
};

const Event = ({event}) => {
 
  return (
    <div className="event-container">
     

      <Card style={{ width: '18rem' }}>
 
  <Card.Body>
    <Card.Title>{event.title}</Card.Title> 
    <Card.Text>
      {event.date}
      {event.start_time}
      {event.end_time}

    </Card.Text>
    <Button variant="primary">View</Button>
  </Card.Body>
</Card>

  
  
    </div>
  )
}
export default EventList;
