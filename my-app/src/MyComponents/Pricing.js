import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import checkLogo from './images/check-icon.svg';
import featuredIcon from './images/featured-icon.svg';
import featuredIcon1 from './images/featured-icon1.svg';
import Button from 'react-bootstrap/Button';

export default function Pricing() {
  return (
    <div className="pricing">
        <Container>
          <Row>
              <Col xs lg="5">
                  <div className="pricing-content">
                      <h5 className="copy-md">Pricing</h5>
                      <h2>Pricing plans that scale</h2>
                      <p>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
                  </div>
              </Col>
              <Col xs lg="7">
                <Row>
                  <Col xs lg="6">
                      <Card>
                        <Card.Body>
                            <div className="card-image text-center">
                              <img src={featuredIcon} />
                            </div>
                            <div className="card-content text-center">
                              <h5 class="text-uppercase">Basic plan</h5>
                              <h2 class="text-uppercase">$10/mth</h2>
                              <p class="text-center">Billed annually.</p>
                            </div>
                            <ul>
                                <li><span><img src={checkLogo} /></span>Access to all basic features</li>
                                <li><span><img src={checkLogo} /></span>Basic reporting and analytics</li>
                                <li><span><img src={checkLogo} /></span>Up to 10 individual users</li>
                                <li><span><img src={checkLogo} /></span>20GB individual data each user</li>
                                <li><span><img src={checkLogo} /></span>Basic chat and email support</li>
                            </ul>
                            <div className="link-wrapper text-center">
                              <Button variant="primary">Get started</Button>{' '}
                            </div>
                        </Card.Body>
                      </Card>
                  </Col>
                  <Col xs lg="6">
                    <Card>
                        <Card.Body>
                            <div className="card-image text-center">
                              <img src={featuredIcon1} />
                            </div>
                            <div className="card-content text-center">
                              <h5 class="text-uppercase">Business plan</h5>
                              <h2 class="text-uppercase">$20/mth</h2>
                              <p class="text-center">Billed annually.</p>
                            </div>
                            <ul>
                                <li><span><img src={checkLogo} /></span>200+ integrations</li>
                                <li><span><img src={checkLogo} /></span>Advanced reporting</li>
                                <li><span><img src={checkLogo} /></span>Up to 20 individual users</li>
                                <li><span><img src={checkLogo} /></span>40GB individual data each user</li>
                                <li><span><img src={checkLogo} /></span>Priority chat and email support</li>
                            </ul>
                            <div className="link-wrapper text-center">
                              <Button variant="primary">Get started</Button>{' '}
                            </div>
                        </Card.Body>
                      </Card>
                  </Col>
                </Row>
              </Col>
          </Row>
        </Container>
    </div>
  )
}
