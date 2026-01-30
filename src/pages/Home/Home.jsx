import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// bootstrap imports 
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img className="carousel-img" src="src/images/20250521_003703000_iOS.jpg" text="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img" src="src/images/20250521_004019000_iOS 1.jpg" text="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img" src="src/images/20250521_004019000_iOS.jpg" text="Third slide" />
                </Carousel.Item>
            </Carousel>

            <p>At the Great George Street Pharmacy, we provide good healthcare with a personalized difference. 
                With this in mind, our goal is to bring you the same service we provide to our customers in-person to our 
                online services.</p>

                <div className="button"> <Link to={`/store`}><Button style={{color:"#DDEB9D"}} size="lg" variant="success">View Products</Button></Link></div>
        </div>
    )
}

export default Home