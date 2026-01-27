import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

//import boostrap card component 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props) {

    const { postId } = useParams();

    const { addToCart } = useCart()

    return (

        <div className="card-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.data.image} />
                <Card.Body>
                    <Card.Title id="productName">{props.data.title}</Card.Title>
                    <Card.Text className="card-text">
                        {props.data.description}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>

    )

}

export default Product;