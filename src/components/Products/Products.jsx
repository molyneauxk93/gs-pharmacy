import React from 'react'
import './Products.css'

//import boostrap card component 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products(props) {
    return (
        <div class="card-container">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.data.image} />
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text className="card-text">
                    {props.data.description}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Products 