import React from 'react';
import Card from 'react-bootstrap/Card';
import logo from './images/email-icon.svg';
import logo1 from './images/charge-icon.svg';
import logo2 from './images/access-icon.svg';
import logo3 from './images/smile-icon.svg';

export default function Features() {
  return (
    <>
        <div className="features">
            <div className="container">
                <div className="features-content">
                    <p className="copy-md">Why switch?</p>
                    <h4>Streamline Your Business With a Mobile First Platform</h4>
                    <p>We’re putting accessibility directly into your hands, the hands of your staff, and the hands of your customers.</p>
                </div>
                <div className="features-block d-flex justify-content-between">
                    <Card>
                        <Card.Header>
                            <img src={logo} />
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>Link your POS</Card.Title>
                        <Card.Text>
                            Keep your current POS system.Easily link your current system with just a few clicks.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <img src={logo1} />
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>Track cashflow</Card.Title>
                        <Card.Text>
                            Stay on top of your cashflow and easily deposit funds in bank at anytime.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <img src={logo2} />
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>Access support</Card.Title>
                        <Card.Text>
                            Expect the best from us.Get a dedicated support team that will handle all your support needs.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <img src={logo3} />
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>Use your devices</Card.Title>
                        <Card.Text>
                            Save money on equipment costs by using your current mobile devices.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </>
  )
}

