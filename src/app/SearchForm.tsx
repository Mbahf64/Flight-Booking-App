// "use client";
// import React, { useState } from "react";
// import { DatePickerDemo } from "../components/Datepicker";
// import Class from "../components/Class";
// import PassengerSelector from "../components/PassengerSelector";
// import { PlaneLanding, PlaneTakeoff, Send } from "lucide-react";

// // Sample local dataset for flights
// const flightData = [
//   { id: 1, from: "New York", to: "Los Angeles", date: "2024-11-10", time: "10:00 AM", availableSeats: 5 },
//   { id: 2, from: "New York", to: "Chicago", date: "2024-11-11", time: "12:00 PM", availableSeats: 3 },
//   { id: 3, from: "Los Angeles", to: "San Francisco", date: "2024-11-12", time: "9:00 AM", availableSeats: 8 },
//   // Add more flights as needed
// ];

// export default function FlightSearchForm() {
//   const [departure, setDeparture] = useState("");
//   const [destination, setDestination] = useState("");
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [flightClass, setFlightClass] = useState("economy");
//   const [passengerCount, setPassengerCount] = useState(1);
//   const [availableFlights, setAvailableFlights] = useState([]);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if required fields are filled
//     if (!departure || !destination || !selectedDate) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     // Filter flights based on search criteria
//     const matchingFlights = flightData.filter(flight => {
//       return (
//         flight.from.toLowerCase() === departure.toLowerCase() &&
//         flight.to.toLowerCase() === destination.toLowerCase() &&
//         flight.date === selectedDate // Ensure the selected date matches the dataset format
//       );
//     });

//     setAvailableFlights(matchingFlights);
//     setError(matchingFlights.length === 0 ? "No flights found for the selected criteria." : "");
//   };

//   return (
//     <div className="w-full lg:w-[60vw] border border-white p-6 z-10">
//       <p className="opensans font-semibold text-2xl mb-3">Search Flight</p>
//       <div className="flex flex-col gap-3 w-full">
//         <div className="flex flex-col items-start justify-center space-y-1 lg:space-y-0 w-full gap-2">
//           {/* Departure Input */}
//           <div className="w-full bg-white bg-opacity-50 p-3 flex flex-col gap-2 z-10">
//             <p className="opensans text-[12px] font-semibold">FROM</p>
//             <div className="flex gap-2">
//               <PlaneTakeoff size={20} strokeWidth={1} className="text-black" />
//               <input
//                 type="text"
//                 placeholder="Your Location"
//                 onChange={(e) => setDeparture(e.target.value)}
//                 className="w-full placeholder:text-sm placeholder:text-black bg-transparent outline-none"
//               />
//             </div>
//           </div>

//           {/* Destination Input */}
//           <div className="w-full bg-white bg-opacity-50 p-3 flex flex-col gap-2 z-10">
//             <p className="opensans text-[12px] font-semibold">TO</p>
//             <div className="flex gap-2">
//               <PlaneLanding size={20} strokeWidth={1} className="text-black" />
//               <input
//                 type="text"
//                 placeholder="Your Destination"
//                 onChange={(e) => setDestination(e.target.value)}
//                 className="w-full placeholder:text-sm placeholder:text-black bg-transparent outline-none"
//               />
//             </div>
//           </div>

//           {/* Date Picker and Class Selector */}
//           <div className="flex gap-2 w-full">
//             <DatePickerDemo selectedDate={selectedDate} onDateChange={setSelectedDate} />
//             <Class selectedClass={flightClass} onClassChange={setFlightClass} />
//           </div>

//           {/* Passenger Selector */}
//           <PassengerSelector selectedPassengers={passengerCount} onPassengerChange={setPassengerCount} />
//         </div>

//         {/* Promo Code and Submit Button */}
//         <div className="flex items-center justify-end gap-3 z-10">
//           <button className="flex items-center gap-1 text-white">
//             <p className="text-2xl font-semibold">+</p>
//             <p className="font-semibold">Add Promo Code</p>
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="w-auto flex items-center gap-2 opensans justify-center bg-[#004FB5] text-white py-2 px-4 hover:bg-blue-700"
//           >
//             <Send size={18} />
//             Show Flights
//           </button>
//         </div>

//         {/* Display error if exists */}
//         {error && <p className="text-red-500 mt-3">{error}</p>}

//         {/* Display available flights */}
//         {availableFlights.length > 0 && (
//           <div className="mt-4">
//             <h3 className="font-semibold text-lg">Available Flights:</h3>
//             <ul className="list-disc list-inside">
//               {availableFlights.map(flight => (
//                 <li key={flight.id} className="py-2">
//                   {flight.from} to {flight.to} at {flight.time} on {flight.date} - Seats available: {flight.availableSeats}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // import React, { useState } from "react";
// // import { flightsData } from "../app/data/flightsData";

// // const FlightSearch = () => {
// //   const [from, setFrom] = useState("");
// //   const [to, setTo] = useState("");
// //   const [date, setDate] = useState("");
// //   const [travelClass, setTravelClass] = useState("Economy");
// //   const [passengers, setPassengers] = useState(1);
// //   const [results, setResults] = useState([]);
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   const handleSearch = () => {
// //     // Filter flights based on search criteria
// //     const filteredFlights = flightsData.filter(
// //       (flight) =>
// //         flight.from.toLowerCase() === from.toLowerCase() &&
// //         flight.to.toLowerCase() === to.toLowerCase() &&
// //         flight.date === date &&
// //         flight.class === travelClass
// //     );

// //     // Calculate total price for each matching flight
// //     const updatedResults = filteredFlights.map((flight) => ({
// //       ...flight,
// //       totalPrice: flight.price * passengers,
// //     }));

// //     setResults(updatedResults);
// //     setIsModalOpen(true); // Open modal when search is performed
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <div className="flex flex-col items-center min-h-screen py-8 ">
// //       <h1 className="text-3xl font-bold mb-6">Flight Search</h1>

// //       {/* Search Form */}
// //       <form
// //         onSubmit={(e) => {
// //           e.preventDefault();
// //           handleSearch();
// //         }}
// //         className="bg-white p-6 rounded-lg shadow-lg w-[90%] "
// //       >
// //         <label className="block mb-4">
// //           <span className="text-gray-700">Traveling From:</span>
// //           <input
// //             type="text"
// //             value={from}
// //             onChange={(e) => setFrom(e.target.value)}
// //             required
// //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// //           />
// //         </label>
// //         <label className="block mb-4">
// //           <span className="text-gray-700">Traveling To:</span>
// //           <input
// //             type="text"
// //             value={to}
// //             onChange={(e) => setTo(e.target.value)}
// //             required
// //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// //           />
// //         </label>
// //         <label className="block mb-4">
// //           <span className="text-gray-700">Departure Date:</span>
// //           <input
// //             type="date"
// //             value={date}
// //             onChange={(e) => setDate(e.target.value)}
// //             required
// //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// //           />
// //         </label>
// //         <label className="block mb-4">
// //           <span className="text-gray-700">Class:</span>
// //           <select
// //             value={travelClass}
// //             onChange={(e) => setTravelClass(e.target.value)}
// //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// //           >
// //             <option value="Economy">Economy</option>
// //             <option value="Business">Business</option>
// //             <option value="First Class">First Class</option>
// //           </select>
// //         </label>
// //         <label className="block mb-6">
// //           <span className="text-gray-700">Passengers:</span>
// //           <input
// //             type="number"
// //             min="1"
// //             value={passengers}
// //             onChange={(e) => setPassengers(parseInt(e.target.value))}
// //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
// //           />
// //         </label>
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
// //         >
// //           Search
// //         </button>
// //       </form>

// //       {/* Modal */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
// //             <button
// //               onClick={closeModal}
// //               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
// //             >
// //               &times;
// //             </button>
// //             <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
// //             {results.length > 0 ? (
// //               <ul>
// //                 {results.map((flight, index) => (
// //                   <li key={index} className="mb-4 border-b pb-4">
// //                     <p className="text-lg">
// //                       <span className="font-bold">{flight.from}</span> to{" "}
// //                       <span className="font-bold">{flight.to}</span> - {flight.class} - $
// //                       {flight.totalPrice} (for {passengers} passenger{passengers > 1 ? "s" : ""})
// //                     </p>
// //                     <p className="text-gray-600">Date: {flight.date}</p>
// //                   </li>
// //                 ))}
// //               </ul>
// //             ) : (
// //               <p className="text-gray-600">No flights found</p>
// //             )}
// //             <button
// //               onClick={closeModal}
// //               className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
// //             >
// //               Go Back
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default FlightSearch;

// src/pages/index.tsx
// src/pages/index.tsx

import React, { useState } from "react";
import flightsData from "./data/flightsData.json";
import { ArrowRight, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { DatePickerDemo } from "@/components/Datepicker";
import PassengerSelector from "../components/PassengerSelector";

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengerCount, setPassengerCount] = useState({
    adult: 1,
    children: 0,
    infant: 0,
  });
  const [classType, setClassType] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused

  const allCities = [
    ...new Set(
      flightsData
        .map((flight) => flight.departureCity)
        .concat(flightsData.map((flight) => flight.arrivalCity))
    ),
  ];

  const handleCityInput = (input, setter) => {
    setter(input);
    setCityOptions(
      allCities.filter(
        (city) =>
          city.toLowerCase().startsWith(input.toLowerCase()) &&
          city !== departureCity &&
          city !== arrivalCity
      )
    );
  };

  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Function to get random flights
  const getRandomFlights = (flights, count) => {
    const shuffled = [...flights].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Handle search functionality
  const handleSearch = () => {
    // Check if the departure city or arrival city is empty
    if (!departureCity || !arrivalCity) {
      setFilteredFlights([]); // Set to empty if any required field is missing
      return;
    }

    const results = flightsData.filter(
      (flight) =>
        (!departureCity ||
          flight.departureCity.toLowerCase() === departureCity.toLowerCase()) &&
        (!arrivalCity ||
          flight.arrivalCity.toLowerCase() === arrivalCity.toLowerCase()) &&
        (!departureDate || flight.departureDate === departureDate) &&
        (!classType || flight.classType === classType)
    );

    // Select up to 5 random flights if more than 5 options are available
    setFilteredFlights(
      results.length > 5 ? getRandomFlights(results, 5) : results
    );
  };

  return (
    <main className="min-h-full w-screen flex-col z-30">
      {/* <h1 className="text-3xl font-bold text-center mb-8">
        Book Your Flight to an African Destination
      </h1> */}

      <div className="lg:w-[80vw] w-full flex flex-col items-start justify-center">
        <h2 className="text-xl font-semibold mb-4">Find Your Flight</h2>
        <div className="flex w-full gap-2 lg:flex-row flex-col">
          <div className="w-full relative">
            <div className="w-full bg-white bg-opacity-50 p-3 flex flex-col gap-2 z-10">
              <p className="opensans text-[12px] font-semibold">FROM</p>
              <div className="flex gap-2">
                <PlaneTakeoff
                  size={20}
                  strokeWidth={1}
                  className="text-black"
                />
                <input
                  type="text"
                  placeholder="Your Location"
                  value={departureCity}
                  onFocus={() => setFocusedInput("departure")}
                  onChange={(e) =>
                    handleCityInput(e.target.value, setDepartureCity)
                  }
                  className="w-full placeholder:text-sm placeholder:text-black bg-transparent outline-none"
                />
              </div>
            </div>
            {departureCity &&
              focusedInput === "departure" &&
              cityOptions.length > 0 && (
                <ul className="rounded mt-2 max-h-40 overflow-y-auto absolute z-20 bg-white w-full">
                  {cityOptions.map((city) => (
                    <li
                      key={city}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setDepartureCity(city);
                        setCityOptions([]);
                      }}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
          </div>
          <div className="w-full relative">
            <div className="w-full bg-white bg-opacity-50 p-3 flex flex-col gap-2 z-10">
              <p className="opensans text-[12px] font-semibold">WHERE</p>
              <div className="flex gap-2">
                <PlaneLanding
                  size={20}
                  strokeWidth={1}
                  className="text-black"
                />
                <input
                  type="text"
                  placeholder="Your Destination"
                  value={arrivalCity}
                  onFocus={() => setFocusedInput("arrival")}
                  onChange={(e) =>
                    handleCityInput(e.target.value, setArrivalCity)
                  }
                  className="w-full placeholder:text-sm placeholder:text-black bg-transparent outline-none"
                />
              </div>
            </div>
            {arrivalCity &&
              focusedInput === "arrival" &&
              cityOptions.length > 0 && (
                <ul className="rounded mt-2 max-h-40 overflow-y-auto absolute z-20 bg-white w-full">
                  {cityOptions.map((city) => (
                    <li
                      key={city}
                      className="p-2 hover:bg-gray-200 cursor-pointer w-full"
                      onClick={() => {
                        setArrivalCity(city);
                        setCityOptions([]);
                      }}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
          </div>

          {/* <div>
            <input
              type="text"
              placeholder="Arrival City"
              className="p-2 border rounded w-full"
              value={arrivalCity}
              onFocus={() => setFocusedInput("arrival")}
              onChange={(e) => handleCityInput(e.target.value, setArrivalCity)}
            />
            {arrivalCity &&
              focusedInput === "arrival" &&
              cityOptions.length > 0 && (
                <ul className="border rounded mt-2 max-h-40 overflow-y-auto">
                  {cityOptions.map((city) => (
                    <li
                      key={city}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setArrivalCity(city);
                        setCityOptions([]);
                      }}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
          </div> */}

        

          <DatePickerDemo
            value={departureDate}
            min={getTodayDate()} // Set minimum date to today
            onChange={(e) => setDepartureDate(e.target.value)}
          />

      

          {/* <div className="w-full flex flex-col gap-1 bg-white bg-opacity-50 p-3 z-10">
            <p className="opensans text-[12px] font-semibold">CLASS</p>
            <select
              className="outline-none bg-transparent"
              value={classType}
              onChange={(e) => setClassType(e.target.value)}
            >
              <option value="">Select Class</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
          </div> */}

          {/* <input
            type="number"
            placeholder="Number of Passengers"
            min="1"
            className="p-2 border rounded w-full"
            value={passengerCount}
            onChange={(e) => setPassengerCount(Number(e.target.value))}
          /> */}

          <PassengerSelector
            value={passengerCount}
            min={1}
            onChange={(newCount) => setPassengerCount(newCount)}
          />

          <button
            onClick={handleSearch}
            className="p-3 bg-blue-500 z-10 text-white rounded hover:bg-blue-600  "
          >
           <ArrowRight size={24}  className="hidden lg:flex"/>
           <p className="flex lg:hidden opensans text-center  items-center justify-center">Search Flight</p>
          </button>
        </div>

        <div className="space-y-8">
          {filteredFlights.length > 0 ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Available Flights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFlights.map((flight) => (
                  <FlightCard key={flight.flight_number} {...flight} />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center text-lg">
              No flights found. Please adjust your search criteria.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

const FlightCard = ({
  flight_number,
  company,
  departureCity,
  arrivalCity,
  departureTime,
  arrivalTime,
  classType,
}) => (
  <div className="p-4 bg-white shadow rounded-lg">
    <h3 className="font-semibold">Flight: {flight_number}</h3>
    <p>Company: {company}</p>
    <p>From: {departureCity}</p>
    <p>To: {arrivalCity}</p>
    <p>Departure Time: {departureTime}</p>
    <p>Arrival Time: {arrivalTime}</p>
    <p>Class: {classType}</p>
  </div>
);

export default FlightSearch;
