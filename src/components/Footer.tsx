import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <Container>
        <div className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className='row'>
                    {/* Column 1 */}
                    <div className='col-md-3 col-sm-6'>
                        <h5>DIVE DEEP INTO RPANEPAL</h5>
                        <ul className='list-unstyled'>
                            <li>About Rivia</li>
                            <li>Product</li>
                            <li>Blogs</li>
                            <li>Learn</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className='col-md-3 col-sm-6'>
                        <h5>DIVE DEEP INTO RPANEPAL</h5>
                        <ul className='list-unstyled'>
                            <li>About Rivia</li>
                            <li>Product</li>
                            <li>Blogs</li>
                            <li>Learn</li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className='col-md-3 col-sm-6'>
                        <h5>GET IN TOUCH</h5>
                        <ul className='list-unstyled'>
                            <li>hello@rivia.com</li>
                            <li>+977695845612</li>
                            <li>@rivia</li>
                            <li>@rivia</li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className='col-md-3 col-sm-6'>
                        <h5>SIGNUP FOR NEWSLETTERS</h5>
                        <ul className='list-unstyled'>
                            <li>Loerm ipsum dolor sit</li>
                            <li>helo</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className='footer-bottom'>
                    <p className='text-xs-center' >
                         Copyright 2021 @Rivia
                    </p>
                </div>
            </div>
            </div>
        </div>
        </Container>
    );
}

export default Footer;
