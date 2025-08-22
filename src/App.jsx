// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation'; // <-- Import

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <ScrollAnimation> {/* <-- Wrap Services */}
          <Services />
        </ScrollAnimation>
        <ScrollAnimation> {/* <-- Wrap WhyUs */}
          <WhyUs />
        </ScrollAnimation>
        <ScrollAnimation> {/* <-- Wrap ContactForm */}
          <ContactForm />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}

export default App;