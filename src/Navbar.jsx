// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">MyLogo</div>
            <div className="nav-links">
                <button className="nav-button">About Us</button>
                <button className="nav-button">Contact Us</button>
                
            </div>
        </nav>
    );
};

export default Navbar;