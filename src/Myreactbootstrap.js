import React from 'react'
import { Button, Col, Container, Row,Card } from 'react-bootstrap';
import { ImAndroid } from "react-icons/im";
import { FcFilmReel } from "react-icons/fc";

function Myreactbootstrap() {
  return (
    <Container className='border'>
        <Row>
            <Col className='p-3'>
                <h1>react bootstrap use</h1>
            <Button variant="primary">Primary</Button>
            </Col>
        </Row>
        <Row>
            <Col xs={6}>
            <Card>
                <Card.Img variant="top" src="photo/img1.png"  />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                
            </Col>
            <Col xs={6}>
            <Card>
                <Card.Img variant="top" src="photo/img1.png"  />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    <ImAndroid/>
                    <FcFilmReel/>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>

                </Card.Body>
                </Card>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Myreactbootstrap