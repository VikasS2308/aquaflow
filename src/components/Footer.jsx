// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6 text-center">
                <p>© {new Date().getFullYear()} AquaFlow Plumbing. All Rights Reserved.</p>
                <p className="text-sm text-gray-400 mt-2">
                    Concept Project by Adnix Digital
                </p>
            </div>
        </footer>
    );
};

export default Footer;