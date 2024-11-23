// src/RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS for styling

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, phone, experience });
        // You can add further logic here, like sending data to a server
    };

    return (
        <div className="modal-content">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </label>
                <label>
                    Experience:
                    <textarea value={experience} onChange={(e) => setExperience(e.target.value)} />
                </label>
                <button type="submit" className="book-button">Book Your Seat</button>
            </form>
        </div>
    );
};

export default RegistrationForm;