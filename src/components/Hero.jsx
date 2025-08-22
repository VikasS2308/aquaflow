// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/plumber-hero.jpg';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <header
            className="relative h-[80vh] bg-cover bg-center text-white flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                    Reliable Plumbing Services in Your Town
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Fast, Fair, and Professional. Get Your Free Quote Today.
                </p>
                <Link // <-- REPLACE <a> WITH <Link>
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
                >
                    Request a Quote
                </Link>
            </div>
        </header>
    );
};

export default Hero;