"use client"

import { useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { User } from 'lucide-react';

const PassengerSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);

    const togglePopover = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSave = () => {
        // You can handle any additional logic here if needed
        setIsOpen(false);
    };

    return (
        <div className="relative w-full flex items-center justify-center">
            {/* Button to trigger the popover */}
            <div className="w-full flex flex-col gap-2 bg-white bg-opacity-50 p-3">
                <p className="opensans text-[12px] font-semibold">DEPARTURE</p>
                <Button
                    onClick={togglePopover}
                    className="flex items-center justify-start gap-2 w-full text-sm text-black opensans font-normal transition-all duration-300"
                >
                    <User className="text-black"  size={20}
                strokeWidth={1}/>
                    {adultCount} adults  .  {childrenCount} children  .  {infantCount} Infants
                </Button>
                </div>
                {/* Popover with the passenger selection */}
                <Popover open={isOpen} onOpenChange={setIsOpen} className="absolute">
                    <PopoverTrigger>
                        <span className="hidden"></span>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white rounded shadow-md p-4">
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Select Passengers</h2>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <label>Adults:</label>
                                    <input
                                        type="number"
                                        value={adultCount}
                                        onChange={(e) => setAdultCount(Number(e.target.value))}
                                        className="border border-gray-300 rounded p-1 w-full"
                                        min="0"
                                    />
                                </div>
                                <div>
                                    <label>Children:</label>
                                    <input
                                        type="number"
                                        value={childrenCount}
                                        onChange={(e) => setChildrenCount(Number(e.target.value))}
                                        className="border border-gray-300 rounded p-1 w-full"
                                        min="0"
                                    />
                                </div>
                                <div>
                                    <label>Infants:</label>
                                    <input
                                        type="number"
                                        value={infantCount}
                                        onChange={(e) => setInfantCount(Number(e.target.value))}
                                        className="border border-gray-300 rounded p-1 w-full"
                                        min="0"
                                    />
                                </div>
                            </div>
                            <Button
                                onClick={handleSave}
                                className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
                            >
                                Save
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
            );
};

            export default PassengerSelector;
