// src/components/Services.jsx
import React from 'react';
// Import the chosen icons from Heroicons
import {
    WrenchScrewdriverIcon,
    Cog6ToothIcon,
    ArrowPathIcon,
    FireIcon
} from '@heroicons/react/24/outline';

// Add an 'icon' property to our data array
const services = [
    {
        name: 'Emergency Repairs',
        description: '24/7 availability for urgent plumbing issues.',
        icon: WrenchScrewdriverIcon
    },
    {
        name: 'Pipe Installation',
        description: 'Expert installation for new construction and remodels.',
        icon: Cog6ToothIcon
    },
    {
        name: 'Drain Cleaning',
        description: 'Advanced techniques to clear any clog, big or small.',
        icon: ArrowPathIcon
    },
    {
        name: 'Water Heaters',
        description: 'Repair and installation of all major water heater brands.',
        icon: FireIcon
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => {
                        // Create a variable for the icon component to make it easy to use
                        const IconComponent = service.icon;

                        return (
                            <div
                                key={service.name}
                                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
                            >
                                {/* Icon Rendering */}
                                <div className="bg-blue-100 p-4 rounded-full mb-6">
                                    <IconComponent
                                        className="h-8 w-8 text-blue-600"
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Service Name */}
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.name}
                                </h3>

                                {/* Service Description */}
                                <p className="text-gray-600 flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;