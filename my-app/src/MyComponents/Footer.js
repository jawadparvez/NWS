import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from './images/footerLogo.png';
import footerIconT from './images/twitter.svg';
import footerIconG from './images/git.svg';
import footerIconF from './images/facebook.svg';
import footerIconV from './images/victory.svg';
import footerIconGL from './images/globe.svg';
import footerIconL from './images/linkedin.svg';

export default function Footer() {
  return (
    <div className="footer-content">
        <img src={footerLogo} className="footer-logo" alt="logo" />
        <div className="bottom-footer-outer">
            <div className="footer-info">
                <p>© 2022 New Walton Services. All rights reserved.</p> 
            </div>

            <div className="footer-icons">
            <a href="#"><img src={footerIconT}/></a>
            <a href="#"><img src={footerIconL}/></a>
            <a href="#"><img src={footerIconF}/></a>
            <a href="#"><img src={footerIconG}/></a>
            <a href="#"><img src={footerIconV}/></a>
            <a href="#"><img src={footerIconGL}/></a>
            </div>
        </div>
    </div>
  )
}