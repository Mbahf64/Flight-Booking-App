// src/pages/api/flights.ts

import { NextApiRequest, NextApiResponse } from 'next';

const flightsData = [
  {
    country: "Nigeria",
    flights: [
      {
        airline: "Air Peace",
        flight_number: "AP202",
        departure_city: "Lagos",
        arrival_city: "Abuja",
        departure_time: "08:00",
        arrival_time: "09:30",
        date: "2023-12-10",
        classType: "Economy",
        availableSeats: 50,
        price: 150,
      },
      {
        airline: "Dana Air",
        flight_number: "DA101",
        departure_city: "Lagos",
        arrival_city: "Port Harcourt",
        departure_time: "14:00",
        arrival_time: "15:30",
        date: "2023-12-12",
        classType: "Business",
        availableSeats: 20,
        price: 300,
      },
    ]
  },
  {
    country: "South Africa",
    flights: [
      {
        airline: "South African Airways",
        flight_number: "SAA345",
        departure_city: "Cape Town",
        arrival_city: "Johannesburg",
        departure_time: "10:00",
        arrival_time: "11:50",
        date: "2023-12-15",
        classType: "Economy",
        availableSeats: 75,
        price: 250,
      },
      {
        airline: "FlySafair",
        flight_number: "FS560",
        departure_city: "Johannesburg",
        arrival_city: "Durban",
        departure_time: "15:30",
        arrival_time: "17:10",
        date: "2023-12-17",
        classType: "Business",
        availableSeats: 10,
        price: 450,
      },
    ]
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle the GET request and return flight data
  if (req.method === 'GET') {
    res.status(200).json(flightsData);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
