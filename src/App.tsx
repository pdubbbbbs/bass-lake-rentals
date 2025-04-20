import React, { useState } from 'react';
import Header from './components/Header';
import RentalsList from './components/RentalsList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Find Your Perfect Lake Getaway</h1>
            <p>Discover beautiful rental properties on Bass Lake for your next vacation</p>
            <button className="cta-button">Browse Rentals</button>
          </div>
        </section>
        
        <RentalsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
