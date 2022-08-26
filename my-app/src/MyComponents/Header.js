import logo from './images/logo.svg';
import React from 'react';
import Button from 'react-bootstrap/Button';


export default function Header() {
  return (
    <>
        <header className="site-header">
            <div className="container-fluid">
                <img src={logo} className="site-logo" alt="logo" />
            </div>
        </header>
        <div className="hero">
            <div className="container">
                <div className="hero-wrapper text-center">
                    <div className="hero-block">
                        <h6>
                            <span>Connectivity.</span>
                            <span className="text-blue">Innovation.</span>
                            <span className="text-red">Security</span>
                        </h6>
                        <h1>Developing new innovative products and solutions</h1>
                        <div className="link-wrapper text-center">
                            <Button variant="danger" className="hero-btn">Learn More</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
