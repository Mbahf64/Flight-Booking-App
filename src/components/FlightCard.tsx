// src/components/FlightCard.tsx

import React from 'react';

type FlightCardProps = {
  airline: string;
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  departure_time: string;
  arrival_time: string;
  date: string;
  classType: string;
  availableSeats: number;
  price: number;
};

const FlightCard: React.FC<FlightCardProps> = ({
  airline,
  flight_number,
  departure_city,
  arrival_city,
  departure_time,
  arrival_time,
  date,
  classType,
  availableSeats,
  price,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg border">
      <h3 className="text-xl font-bold mb-2">{airline}</h3>
      <p className="text-sm text-gray-600">Flight No: {flight_number}</p>
      <p className="mt-2 text-lg">
        {departure_city} ➔ {arrival_city}
      </p>
      <p className="text-sm text-gray-500">
        Departure: {departure_time}, Arrival: {arrival_time}
      </p>
      <p className="text-sm text-gray-500">Date: {date}</p>
      <p className="text-sm text-gray-500">Class: {classType}</p>
      <p className="text-sm text-gray-500">Available Seats: {availableSeats}</p>
      <p className="text-lg font-semibold mt-2">Price: ${price}</p>
      <button className="mt-4 w-full py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Book Now
      </button>
    </div>
  );
};

export default FlightCard;
