// src/components/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Get a Free, No-Obligation Quote
                </h2>
                <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="tel" placeholder="Your Phone Number" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-6">
                        <textarea placeholder="Tell us about the job..." rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-600 text-white py-3 px-12 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
                            Send Request
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;