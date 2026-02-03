import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useCart } from '../../context/CartContext';

function CompleteOrder() {

     const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8ijs1di', 'template_pl2zfso', form.current, '86jr_XCmOBBjYJrfl')
            .then((result) => {
                console.log(result.text);
                window.location.reload();
            }, (error) => {
                console.log(error.text);
                window.location.reload();
            });

    };

    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <p>Here is your order summary, please complete the form and submit your order.</p>

                <div>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    {item.title}
                                    <input type="number" value={item.quantity} readOnly></input>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="contact-form" className="form-label">First Name</label>
                    <input type="name" className="form-control" id="first-name" name="first_name"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="contact-form" className="form-label">Last Name</label>
                    <input type="name" className="form-control" id="last-name" name="last_name"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="contact-form" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email"></input>
                </div>

                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary form-button">Submit</button>
                </div>

            </div>


        </form>
    )
}

export default CompleteOrder