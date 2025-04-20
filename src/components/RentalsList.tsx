import React from 'react';
import { rentalProperties } from '../data/rentalData';
import RentalCard from './RentalCard';
import './RentalsList.css';

const RentalsList: React.FC = () => {
  const handleRentalClick = (id: string) => {
    alert(`Clicked on rental with ID: ${id}`);
    // In a real app, you would navigate to the rental details page here
  };

  return (
    <div className="rentals-container">
      <h2>Our Available Rentals</h2>
      <div className="rentals-grid">
        {rentalProperties.map((rental) => (
          <RentalCard 
            key={rental.id} 
            rental={rental} 
            onClick={handleRentalClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default RentalsList;

