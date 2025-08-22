// src/components/WhyUs.jsx
import React from 'react';
import toolsImage from '../assets/plumber-tools.jpg';

const WhyUs = () => {
    return (
        <section id="why-us" className="py-20 bg-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
                        Why Choose AquaFlow?
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✔</span>
                            <p className="text-gray-700"><strong>Licensed & Insured:</strong> Peace of mind with every job.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✔</span>
                            <p className="text-gray-700"><strong>Upfront Pricing:</strong> No hidden fees, just honest quotes.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✔</span>
                            <p className="text-gray-700"><strong>24/7 Emergency Service:</strong> We're here when you need us most.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✔</span>
                            <p className="text-gray-700"><strong>Guaranteed Quality:</strong> We stand behind our workmanship.</p>
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/2">
                    <img src={toolsImage} alt="Professional plumbing tools" className="rounded-lg shadow-2xl w-full h-auto" />
                </div>
            </div>
        </section>
    );
};

export default WhyUs;