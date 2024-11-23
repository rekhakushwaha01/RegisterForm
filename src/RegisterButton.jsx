// src/RegisterButton.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './RegisterButton.css'; // Import CSS for styling

const RegisterButton = () => {
    return (
        <div className='register-button'>

            <Link to="/register" className="register-button">Register for the event</Link>
            </div>
    );
};

export default RegisterButton;