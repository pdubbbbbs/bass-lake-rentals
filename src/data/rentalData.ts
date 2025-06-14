import { RentalProperty } from '../types/types';

export const rentalProperties: RentalProperty[] = [
  {
    id: '1',
    name: 'Lakefront Home',
    description: 'Beautifully maintained 3-bedroom home with direct access to Bass Lake. Enjoy lakefront living with gorgeous views throughout the year. This property features an updated kitchen, spacious living area, and a private dock for residents.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    monthlyRent: 2800,
    securityDeposit: 3000,
    location: '42155 Pines Street, Bass Lake, CA 93604',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1850,
    amenities: ['Private Dock', 'Attached Garage', 'Central Heating/AC', 'Stainless Steel Appliances', 'In-unit Laundry', 'Fiber Internet'],
    available: true,
    availableFrom: 'May 1, 2025',
    leaseTermMonths: 12,
    utilitiesIncluded: false,
    petPolicy: 'Pets considered with additional deposit',
    parkingInfo: '2-car garage + driveway parking'
  },
  {
    id: '2',
    name: 'Modern Lake View Residence',
    description: 'Contemporary 4-bedroom home in Bass Lake\'s desirable East Shore neighborhood. This spacious residence offers panoramic lake views from multiple rooms, modern finishes, and an open floor plan perfect for family living. Recently renovated with high-end fixtures and appliances.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    monthlyRent: 3500,
    securityDeposit: 4000,
    location: '38217 Lake View Drive, Bass Lake, CA 93604',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2400,
    amenities: ['Smart Home Features', 'Granite Countertops', 'Walk-in Closets', 'Community Pool', 'Home Office Space', 'Energy Efficient Appliances', 'Outdoor Entertainment Area'],
    available: true,
    availableFrom: 'June 15, 2025',
    leaseTermMonths: 12,
    utilitiesIncluded: false,
    petPolicy: 'No pets allowed',
    parkingInfo: 'Attached 2-car garage'
  },
  {
    id: '3',
    name: 'Charming Woodland Cottage',
    description: 'Peaceful 1-bedroom cottage in a wooded setting just minutes from Bass Lake. Perfect for individuals or couples seeking a tranquil living environment. This property offers privacy while still being close to all Bass Lake amenities and Yosemite National Park.',
    image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    monthlyRent: 1450,
    securityDeposit: 1500,
    location: '55432 Pine Ridge Road, Bass Lake, CA 93604',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 850,
    amenities: ['Fireplace', 'High-Speed Internet', 'Updated Kitchen', 'Private Patio', 'Storage Shed', 'Dedicated Parking'],
    available: true,
    availableFrom: 'Immediate',
    leaseTermMonths: 12,
    utilitiesIncluded: true,
    petPolicy: 'Small pets welcome with $250 deposit',
    parkingInfo: 'One dedicated space'
  },
  {
    id: '4',
    name: 'Spacious Family Home',
    description: 'Expansive 5-bedroom residence in Bass Lake\'s desirable South Shore neighborhood. Ideal for larger families or those who need extra space for a home office. Features include a large, fenced yard, spacious rooms, and easy access to Bass Lake recreation areas.',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    monthlyRent: 3200,
    securityDeposit: 3500,
    location: '12380 South Shore Drive, Bass Lake, CA 93604',
    bedrooms: 5,
    bathrooms: 3,
    squareFeet: 2800,
    amenities: ['Fenced Yard', 'Finished Basement', 'Dual-Zone HVAC', 'Updated Kitchen', 'Home Office Space', 'High-Speed Internet', 'Garden'],
    available: true,
    availableFrom: 'May 15, 2025',
    leaseTermMonths: 12,
    utilitiesIncluded: false,
    petPolicy: 'Pets allowed with additional $500 deposit',
    parkingInfo: 'Double garage plus additional driveway parking'
  }
];

