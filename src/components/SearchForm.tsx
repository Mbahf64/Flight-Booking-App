"use client";
import React, { useState, useEffect } from "react";
import { DatePickerDemo } from "../components/Datepicker";
import Class from "../components/Class";
import PassengerSelector from "../components/PassengerSelector";
import { PlaneLanding, PlaneTakeoff, Send } from "lucide-react";
import { flightsData } from "../app/data/flightsData";

export default function FlightSearchForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [travelClass, setTravelClass] = useState("Economy");
  const [passengers, setPassengers] = useState(1);
  const [results, setResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = () => {
    // Filter flights based on search criteria
    const filteredFlights = flightsData.filter(
      (flight) =>
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase() &&
        flight.date === date &&
        flight.class === travelClass
    );

    // Calculate total price for each matching flight
    const updatedResults = filteredFlights.map((flight) => ({
      ...flight,
      totalPrice: flight.price * passengers,
    }));

    setResults(updatedResults);
    setIsModalOpen(true); // Open modal when search is performed
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full lg:w-[60vw] border border-white p-6 z-10">
      <p className="opensans font-semibold text-2xl mb-3 text-white">Search Flight</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex flex-col gap-3 w-full"
      >
        <div className="flex flex-col items-start justify-center space-y-1 lg:space-y-0 w-full gap-2">
          <div className="w-full bg-white bg-opacity-50 p-3 flex flex-col gap-2 z-10">
            <p className="opensans text-[12px] font-semibold">FROM</p>
            <div className="flex gap-2">
              <PlaneTakeoff size={20} strokeWidth={1} className="text-black" />
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                // required
                placeholder="Your Location"
                className=" w-full placeholder:text-sm placeholder:text-black bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="w-full bg-white bg-opacity-50 p-3 flex flex-col gap-2 z-10">
            <p className="opensans text-[12px] font-semibold">TO</p>
            <div className="flex gap-2">
              <PlaneLanding size={20} strokeWidth={1} className="text-black" />
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                // required
                placeholder="Your Destination"
                className=" w-full placeholder:text-sm placeholder:text-black bg-transparent outline-none "
              />
            </div>
          </div>

          <div className="flex gap-2 w-full">
            <DatePickerDemo
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <Class
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
            />
          </div>
          <PassengerSelector
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value))}
          />
        </div>

        <div className="flex items-center justify-end gap-3 z-10">
          <button className="flex items-center gap-1 text-white">
            <p className="text-2xl font-semibold">+</p>
            <p className="font-semibold">Add Promo Code</p>
          </button>
          <button
           
            className="w-auto flex items-center gap-2 opensans justify-center bg-[#004FB5] text-white py-2 px-4  hover:bg-blue-700"
          >
            <Send size={18} />
            Show Flights
          </button>
        </div>
      </form>

      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
            {results.length > 0 ? (
              <ul>
                {results.map((flight, index) => (
                  <li key={index} className="mb-4 border-b pb-4">
                    <p className="text-lg">
                      <span className="font-bold">{flight.from}</span> to{" "}
                      <span className="font-bold">{flight.to}</span> -{" "}
                      {flight.class} - ${flight.totalPrice} (for {passengers}{" "}
                      passenger{passengers > 1 ? "s" : ""})
                    </p>
                    <p className="text-gray-600">Date: {flight.date}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No flights found</p>
            )}
            <button
              onClick={closeModal}
              className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Go Back
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

// import React, { useState } from "react";
// import { flightsData } from "../app/data/flightsData";
// import { PlaneLanding, PlaneTakeoff } from "lucide-react";
// import { DatePickerDemo } from "../components/Datepicker";
// const FlightSearch = () => {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [date, setDate] = useState("");
//   const [travelClass, setTravelClass] = useState("Economy");
//   const [passengers, setPassengers] = useState(1);
//   const [results, setResults] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const handleSearch = () => {
//     // Filter flights based on search criteria
//     const filteredFlights = flightsData.filter(
//       (flight) =>
//         flight.from.toLowerCase() === from.toLowerCase() &&
//         flight.to.toLowerCase() === to.toLowerCase() &&
//         flight.date === date &&
//         flight.class === travelClass
//     );
//     // Calculate total price for each matching flight
//     const updatedResults = filteredFlights.map((flight) => ({
//       ...flight,
//       totalPrice: flight.price * passengers,
//     }));
//     setResults(updatedResults);
//     setIsModalOpen(true); // Open modal when search is performed
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <div className="flex flex-col items-center min-h-screen py-8 ">
//       {/* <h1 className="text-3xl font-bold mb-6">Flight Search</h1> */}
//       {/* Search Form */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSearch();
//         }}
//         className="bg-whit p-6 rounded-lg w-[60vw] gap-2 "
//       >
//         <div className="flex gap-2 ">
//           <label className="w-full bg-white bg-opacity-50 p-3 flex flex-col gap-2 z-10">
//             <p className="opensans text-[12px] font-semibold">FROM</p>
//             <div className="flex gap-2">
//               <PlaneTakeoff size={20} strokeWidth={1} className="text-black" />
//               <input
//                 type="text"
//                 value={from}
//                 onChange={(e) => setFrom(e.target.value)}
//                 required
//                 placeholder="Your Location"
//                 className=" w-full opensans placeholder:text-sm placeholder:text-black bg-transparent outline-none"
//               />
//             </div>
//           </label>

//           <label className="w-full bg-white bg-opacity-50 p-3 flex flex-col gap-2 z-10">
//             <p className="opensans text-[12px] font-semibold">TO</p>
//             <div className="flex gap-2">
//               <PlaneLanding size={20} strokeWidth={1} className="text-black" />
//               <input
//                 type="text"
//                 value={to}
//                 onChange={(e) => setTo(e.target.value)}
//                 required
//                 placeholder="Your Destination"
//                 className=" w-full opensans placeholder:text-sm placeholder:text-black bg-transparent outline-none"
//               />
//             </div>
//           </label>
//         </div>

//         <div className="flex gap-2 ">
//           {/* <label className="block mb-4 w-full">
//             <span className="text-gray-700">Departure Date:</span>
//             <input
              
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             />
//           </label> */}

//           <DatePickerDemo
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />

//           <label className="block mb-4 w-full">
//             <span className="text-gray-700">Class:</span>
//             <select
//               value={travelClass}
//               onChange={(e) => setTravelClass(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             >
//               <option value="Economy">Economy</option>
//               <option value="Business">Business</option>
//               <option value="First Class">First Class</option>
//             </select>
//           </label>
//         </div>
//         <label className="block mb-6">
//           <span className="text-gray-700">Passengers:</span>
//           <input
//             type="number"
//             min="1"
//             value={passengers}
//             onChange={(e) => setPassengers(parseInt(e.target.value))}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//           />
//         </label>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//         >
//           Search
//         </button>
//       </form>
//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
//             {results.length > 0 ? (
//               <ul>
//                 {results.map((flight, index) => (
//                   <li key={index} className="mb-4 border-b pb-4">
//                     <p className="text-lg">
//                       <span className="font-bold">{flight.from}</span> to{" "}
//                       <span className="font-bold">{flight.to}</span> -{" "}
//                       {flight.class} - ${flight.totalPrice} (for {passengers}{" "}
//                       passenger{passengers > 1 ? "s" : ""})
//                     </p>
//                     <p className="text-gray-600">Date: {flight.date}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-600">No flights found</p>
//             )}
//             <button
//               onClick={closeModal}
//               className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//             >
//               Go Back
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlightSearch;
