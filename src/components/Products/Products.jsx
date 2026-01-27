import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

//import boostrap card component 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products(props) {


        return (
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.data.image} />
                    <Card.Body>
                        <Card.Title id="productName">{props.data.title}</Card.Title>
                        <Card.Text className="card-text">
                            {props.data.description}
                        </Card.Text>
                        <Link to={`/product/${props.data.id}`}><Button variant="primary">Add to Cart</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    export default Products 