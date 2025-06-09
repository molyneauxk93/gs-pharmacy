import React from 'react'

//import boostrap card component 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.data.image} />
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text>
                    {props.data.description}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Products 