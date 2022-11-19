import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <Card border="light" style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Title>Lorem ipsum <br></br> dolor simet ipsut</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elite.Enim<br></br>
                                suspendisse nulla egestas phosellus viverra urna cross in. Macenas<br></br>
                                vitae in fermentum, elementum diam.</Card.Subtitle>

                            <Button variant="primary">Contact sales</Button>
                            <Card.Link href="#">See how it works</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1178684/pexels-photo-1178684.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <Card.Body>
                            <Card.Title>Boost Lorem Ipsum</Card.Title>
                            <Card.Text>
                                Elit nec massa plated lacreet mallis<br></br>
                                blandit.Elite nec massa platea laareet mollis<br></br>blandit.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1178684/pexels-photo-1178684.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <Card.Body>
                            <Card.Title>Boost Lorem Ipsum</Card.Title>
                            <Card.Text>
                                Elit nec massa plated lacreet mallis<br></br>
                                blandit.Elite nec massa platea laareet mollis<br></br>blandit.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1178684/pexels-photo-1178684.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <Card.Body>
                            <Card.Title>Boost Lorem Ipsum</Card.Title>
                            <Card.Text>
                                Elit nec massa plated lacreet mallis<br></br>
                                blandit.Elite nec massa platea laareet mollis<br></br>blandit.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light" style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Title>Lorem ipsum <br></br> dolor simet ipsut</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elite.Enim<br></br>
                                suspendisse nulla egestas phosellus viverra urna cross in. Macenas<br></br>
                                vitae in fermentum, elementum diam.</Card.Subtitle>

                            <Button variant="primary">Contact sales</Button>
                
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}



export default Home;
