import React from 'react'
import './Footer.css'

//bootstrap imports 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
          <div>
        {/* Beginning of Footer section */ }
        < hr class="solid" ></hr >
        <h2>Follow Us on Instagram!</h2>

        <div className="card-section">

            <section className="card">

                <div className="card-header">
                    <a href="https://www.instagram.com/greatgeorgestreetrx/" target="_blank">
                        <img src="./src/images/Instagram_icon.png" alt="instagram icon"/>
                    </a>

                </div>

            </section>

        </div>
        </div>
    )
}

export default Footer