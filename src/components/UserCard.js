import React, { useState } from 'react';
import {Row,Col, Container} from 'react-bootstrap'

function UserCard({ id, name, email, gender, joiningDate, location, deptt, about }) {
    const [showAbout,setShowAbout]=useState(about.length>100 ? about.slice(0,100):about);
    const [left,setLeft]=useState(about.length>100 ? true :false);
    return (
        <Container fluid>
            <Row>
            <Col md={6}>
                <Row>
                <Col className='text-end'>
                    <h6>Id:</h6>
                    <h6>Name:</h6>
                    <h6>Email:</h6>
                    <h6>Gender:</h6>
                </Col>
                <Col className='text-start'>
                    <h6>{id}</h6>
                    <h6>{name}</h6>
                    <h6>{email}</h6>
                    <h6>{gender}</h6>
                </Col>
                </Row>
            </Col>
            <Col md={6}>
               <Row>
                <Col className='text-end'>
                    <h6>Joining Date :</h6>
                    <h6>Location:</h6>
                    <h6>Department:</h6>
                </Col>
                <Col className='text-start'>
                    <h6>{joiningDate}</h6>
                    <h6>{location}</h6>
                    <h6>{deptt}</h6>
                </Col>
                </Row>
            </Col>
            </Row>
            <Row>
               <p>
                   <b>About :</b><span>
                       {showAbout}
                       {
                        left && <>...<button 
                        onClick={()=>setShowAbout(about)}>
                        Show More</button></>
                       }
                   </span>
               </p>
            </Row>
        </Container>
    )
}

export default UserCard
