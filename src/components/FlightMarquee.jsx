// FlightMarquee.js

import React from "react";
import Marquee from "../components/ui/marquee"

const flightRoutes = [
  { origin: "Amsterdam Schiphol Airport - AMS", destination: "New York John F. Kennedy - JFK" },
  { origin: "Dubai International - DXB", destination: "Los Angeles International - LAX" },
  { origin: "Atlanta Hartsfield Airport - ATL", destination: "Chicago O'Hare - ORD" },
  { origin: "Doha Hamad Airport - DOH", destination: "New York John F. Kennedy - JFK" },
  { origin: "London Heathrow Airport - LHR", destination: "San Francisco International - SFO" },
  { origin: "Frankfurt Airport - FRA", destination: "Los Angeles International - LAX" },
  { origin: "Paris Charles de Gaulle - CDG", destination: "Toronto Pearson International - YYZ" },
  { origin: "Hong Kong International - HKG", destination: "San Francisco International - SFO" },
  { origin: "Tokyo Narita Airport - NRT", destination: "New York John F. Kennedy - JFK" },
  { origin: "Singapore Changi Airport - SIN", destination: "New York John F. Kennedy - JFK" },
  { origin: "Sydney Kingsford Smith - SYD", destination: "Los Angeles International - LAX" },
  { origin: "Chicago O'Hare - ORD", destination: "London Heathrow - LHR" },
  { origin: "Paris Charles de Gaulle - CDG", destination: "Los Angeles International - LAX" }
];

const FlightMarquee = () => {
  return (
    <div className="relative flex h-full  w-full flex-col items-center justify-center overflow-hidden ">
     <Marquee reverse pauseOnHover className="[--duration:100s] ">
        {flightRoutes.map((flight, index) => (
          <span key={index} className="inline-block px- py-[] text-xl opensans font-semibold">
            {flight.origin} to {flight.destination} &nbsp;  &nbsp;
          </span>
        ))}
       </Marquee>
    </div>
  );
};

export default FlightMarquee;



