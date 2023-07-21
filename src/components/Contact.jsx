import React from 'react';
import './Contact.css';
import email from '../assets/images/gmail.png';
function Contact() {
	return (
		<section className="contact" id="contact">
			<div className="contact-container">
				<h2>CONTACT</h2>
				<h1>Hit me up!</h1>

				<div className="contact-cards">
					<a className="contact-card" href="mailto:petartopic2002@gmail.com">
						<div className="contact-card-image">
							<img src={email} alt="" />
						</div>
						<div className="contact-card-text">
							<h3>Email</h3>
							<p>petartopic2002@gmail.com</p>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
