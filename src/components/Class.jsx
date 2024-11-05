import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const Class = () => {
    return (
        <div className="w-full flex flex-col gap-1 bg-white bg-opacity-50 p-3 z-10">
            <p className="opensans text-[12px] font-semibold">CLASS</p>
            <Select>
                <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select your class" className="text-gray-300"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {/* <SelectLabel>Fruits</SelectLabel> */}
                        <SelectItem value="apple">First Class</SelectItem>
                        <SelectItem value="banana">Business Class</SelectItem>
                        <SelectItem value="blueberry">Economy</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default Class