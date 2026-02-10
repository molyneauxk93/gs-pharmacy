import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useCart } from '../../context/CartContext';

function CompleteOrder() {

     const form = useRef();

     const formatEmailData = (items) => {
        let htmlString = "<ul>";
        items.forEach(item => {
            htmlString += `<li>${JSON.stringify(item.title)} (Qty: ${item.quantity}) </li>`
        });
        htmlString += '</ul>';
        return htmlString;
     }


    const sendEmail = (e) => {
        e.preventDefault();

        const formattedItems = formatEmailData(cartItems);

        const templateParams = {
            user_name: `${document.forms.myForm.first_name.value}`,
            user_last_name: `${document.forms.myForm.last_name.value}`,
            user_email: `${document.forms.myForm.email.value}`,
            items_list: formattedItems
        };

        emailjs.send('service_4z2pn5c', 'template_ltka6h6', templateParams, '86jr_XCmOBBjYJrfl')
            .then((result) => {
                console.log(result.text);
                window.location.reload();
            }, (error) => {
                console.log(error.text);
                window.location.reload();
            });

    };

    const { cartItems } = useCart();

    return (
        <form ref={form} onSubmit={sendEmail} id="myForm">
            <div>
                <p>Here is your order summary, please complete the form and submit your order.</p>

                <div>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div>
                            {cartItems.map((item) => (
                                // <li key={item.id}>
                                //     <label>{item.title}   x</label>
                                //     <label type="number">{item.quantity}</label>
                                // </li>
                                <p name="list_items">* {item.title}   x{item.quantity}</p>
                            ))}
                        </div>
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