import React from "react";
import FlightCard from "@/components/FlightCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const FlightResults = ({ filteredFlights }) => {
  return (
    <div className="space-y-8">
      {filteredFlights.length > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Available Flights</h2>
          <ScrollArea className="max-h-[30vh] lg:max-h-[50vh] 2xl:max-h-[63vh] overflow-y-auto scroll-smooth">
            <div className="grid grid-cols-1 md:grid-row-2 lg:grid-row-1 gap-6">
              {filteredFlights.map((flight) => (
                <FlightCard key={flight.flight_number} {...flight} />
              ))}
            </div>
          </ScrollArea>
        </div>
      ) : (
        <p className="text-center text-lg">No flights found.</p>
      )}
    </div>
  );
};

export default FlightResults;
