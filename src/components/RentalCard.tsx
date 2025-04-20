import React from 'react';
import { RentalProperty } from '../types/types';
import './RentalCard.css';

interface RentalCardProps {
  rental: RentalProperty;
  onClick: (id: string) => void;
}

const RentalCard: React.FC<RentalCardProps> = ({ rental, onClick }) => {
  return (
    <div className="rental-card" onClick={() => onClick(rental.id)}>
      <div className="rental-image">
        <img src={rental.image} alt={rental.name} />
        <span className="rental-price">${rental.monthlyRent}/month</span>
      </div>
      <div className="rental-info">
        <h3>{rental.name}</h3>
        <p className="rental-location">{rental.location}</p>
        <div className="rental-details">
          <span>{rental.bedrooms} BD</span>
          <span>{rental.bathrooms} BA</span>
          <span>{rental.squareFeet} sq ft</span>
        </div>
        <p className="rental-description">{rental.description.substring(0, 100)}...</p>
        <p className="rental-availability">Available: {rental.availableFrom}</p>
      </div>
    </div>
  );
};

export default RentalCard;

