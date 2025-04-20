export interface RentalProperty {
  id: string;
  name: string;
  description: string;
  image: string;
  monthlyRent: number;
  securityDeposit: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  amenities: string[];
  available: boolean;
  availableFrom: string;
  leaseTermMonths: number;
  utilitiesIncluded: boolean;
  petPolicy: string;
  parkingInfo: string;
}

