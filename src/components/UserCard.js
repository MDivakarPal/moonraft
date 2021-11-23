import React, { useState } from 'react';
import {Row,Col, Container} from 'react-bootstrap'

function UserCard({ id, name, email, gender, joiningDate, location, deptt, about }) {
    const [showAbout,setShowAbout]=useState(about.length>100 ? about.slice(0,100):about);
    const [left,setLeft]=useState(about.length>100 ? true :false);
    return (
        <Container>
            <Row>
            <Col>
                <Col>
                    <h6>Id:</h6>
                    <h6>Name:</h6>
                    <h6>Email:</h6>
                    <h6>Gender:</h6>
                </Col>
                <Col>
                    <h6>{id}</h6>
                    <h6>{name}</h6>
                    <h6>{email}</h6>
                    <h6>{gender}</h6>
                </Col>
            </Col>
            <Col>
                <div>
                    <h6>Joining Date :</h6>
                    <h6>Location:</h6>
                    <h6>Department:</h6>
                </div>
                <div>
                    <h6>{joiningDate}</h6>
                    <h6>{location}</h6>
                    <h6>{deptt}</h6>
                </div>
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
