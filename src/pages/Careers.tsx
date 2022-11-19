import careerItems from "../data/items.json"
import { Col, Row } from "react-bootstrap"
import { CareerItem } from "../components/CareerItem"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Careers() {
    return (
        <>
            <h1>job description</h1>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                        
              
        </>
    )
}

