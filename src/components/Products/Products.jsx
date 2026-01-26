import React, { useState, useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import './Products.css'

//import boostrap card component 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products(props) {

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
                        <Button variant="primary" onClick={() => addToCart(props)}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    export default Products 