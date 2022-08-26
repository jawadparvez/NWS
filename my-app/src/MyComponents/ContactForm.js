import React from 'react';
import walletpay from './images/walletpay-image.svg';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import cardImage from './images/qrcode-image.svg';

export default function ContactForm() {
  return (
    <div className="walletpay">
        <Container>
            <Row>
                <Col xs lg="8">
                    <div className="walletpay-top">
                        <h2>Easily offer your restaurant guests a contactless ordering and payment option.....
                            right from their phone!
                        </h2>
                        <h4>Join our waitlist</h4>
                    </div>
                    <Card>
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <div className="mb-3">
                                    <Form>
                                    <Form.Group className="mb-3 walletpay-form mr-3" controlId="formBasicFname">
                                        <Form.Control type="email" placeholder="First name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 walletpay-form" controlId="formBasicLname">
                                        <Form.Control type="email" placeholder="Last name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicRestaurant">
                                        <Form.Control type="email" placeholder="Restaurant name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCurrent">
                                        <Form.Control type="email" placeholder="Current POS" />
                                    </Form.Group>
                                    
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">
                                        Join
                                        </Button>
                                    </div>
                                    </Form>
                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-image">
                            <img src={cardImage} />
                        </div>
                    </Card>
                </Col>
                <Col xs lg="4">
                    <div className="walletpay-image">
                        <img src={walletpay} />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
