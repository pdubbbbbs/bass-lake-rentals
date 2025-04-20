import React from 'react';
import { RentalProperty } from '../types/types';
import './RentalDetails.css';

interface RentalDetailsProps {
  rental: RentalProperty;
  onBack: () => void;
}

const RentalDetails: React.FC<RentalDetailsProps> = ({ rental, onBack }) => {
  return (
    <div className="rental-details-container">
      <button className="back-button" onClick={onBack}>← Back to rentals</button>
      
      <div className="rental-details-content">
        <div className="rental-details-image">
          <img src={rental.image} alt={rental.name} />
        </div>
        
        <div className="rental-details-info">
          <h1>{rental.name}</h1>
          <p className="rental-details-location">{rental.location}</p>
          
          <div className="rental-details-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🛏️</span>
              <span>{rental.bedrooms} Bedrooms</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🚿</span>
              <span>{rental.bathrooms} Bathrooms</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">📏</span>
              <span>{rental.squareFeet} sq ft</span>
            </div>
          </div>
          
          <div className="rental-details-price">
            <span className="price">${rental.monthlyRent}</span> per month
          </div>
          
          <div className="rental-details-description">
            <h2>About this property</h2>
            <p>{rental.description}</p>
          </div>
          
          <div className="rental-details-lease-info">
            <h2>Lease Information</h2>
            <div className="lease-info-grid">
              <div className="lease-info-item">
                <span className="info-label">Lease Term:</span>
                <span>{rental.leaseTermMonths} months</span>
              </div>
              <div className="lease-info-item">
                <span className="info-label">Security Deposit:</span>
                <span>${rental.securityDeposit}</span>
              </div>
              <div className="lease-info-item">
                <span className="info-label">Available From:</span>
                <span>{rental.availableFrom}</span>
              </div>
              <div className="lease-info-item">
                <span className="info-label">Utilities Included:</span>
                <span>{rental.utilitiesIncluded ? 'Yes' : 'No'}</span>
              </div>
              <div className="lease-info-item">
                <span className="info-label">Pet Policy:</span>
                <span>{rental.petPolicy}</span>
              </div>
              <div className="lease-info-item">
                <span className="info-label">Parking:</span>
                <span>{rental.parkingInfo}</span>
              </div>
            </div>
          </div>
          
          <div className="rental-details-amenities">
            <h2>Amenities</h2>
            <ul>
              {rental.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
          
          <button className="apply-now-button">Apply Now</button>
          <button className="contact-viewing-button">Schedule Viewing</button>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
