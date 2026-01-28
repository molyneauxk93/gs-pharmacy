import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

//import boostrap card component 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product() {

     const products = [
        {
            id: '001',
            title: 'Becoplex',
            description: 'test',
            image: '../src/images/Becoplex.jpg',
        },
        {
            id: '002',
            title: 'Becoplex Iron',
            description: 'test',
            image: '../src/images/BecoplexIron.jpg',
        },
        {
            id: '003',
            title: 'Canadian Oil',
            description: 'test',
            image: '../src/images/CanadianOil.jpg',
        },
        {
            id: '004',
            title: 'Cetamol',
            description: 'test',
            image: '../src/images/CetamolCold.jpg',
        },
        {
            id: '005',
            title: 'Cetamol (Night-time)',
            description: 'test',
            image: '../src/images/CetamolNight.jpg',
        },
        {
            id: '006',
            title: 'Fishermans Friend',
            description: 'test',
            image: '../src/images/FishermansFriend.jpg',
        },
        {
            id: '007',
            title: 'Gravinate',
            description: 'test',
            image: '../src/images/Gravinate.jpg',
        },
        {
            id: '008',
            title: 'Histal Non-Drowsy',
            description: 'test',
            image: '../src/images/HistalOrng.jpg',
        },
        {
            id: '009',
            title: 'Histal Antihistamine Therapy',
            description: 'test',
            image: '../src/images/HistalPnk.jpg',
        },
        {
            id: '010',
            title: 'Histal Decongestant',
            description: 'test',
            image: '../src/images/HistalRed.jpg',
        },
        {
            id: '011',
            title: 'Histaussin',
            description: 'test',
            image: '../src/images/Histaussin.jpg',
        },
        {
            id: '012',
            title: 'Salve',
            description: 'test',
            image: '../src/images/Salve.jpg',
        },
        {
            id: '013',
            title: 'S.S.S',
            description: 'test',
            image: '../src/images/SSS.jpg',
        }
    ]

    const { id } = useParams();
    const { addToCart } = useCart();

    const foundObject = products.find(obj => obj.id === id)

    return (

        <div className="card-container">
            { foundObject != null ? (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={foundObject.image} />
                <Card.Body>
                    <Card.Title id="productName">{foundObject.title}</Card.Title>
                    <Card.Text className="card-text">
                        {foundObject.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => addToCart(foundObject)}>Add to Cart</Button>
                </Card.Body>
            </Card>
            ) : (
                <h1>Invalid</h1>
            )}
            
        </div>

    )

}

export default Product