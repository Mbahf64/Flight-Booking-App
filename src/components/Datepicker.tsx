import * as React from "react"
import { format, isAfter, isToday } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Define types for the component props
interface DatePickerDemoProps {
  value?: Date
  min?: Date
  onChange?: (date: Date) => void
}

// Helper function to get today's date
const getTodayDate = () => new Date()

export function DatePickerDemo({ value, min = getTodayDate(), onChange }: DatePickerDemoProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(value)

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    if (date && (isToday(date) || isAfter(date, min))) {
      setSelectedDate(date)
      onChange?.(date) // Call onChange if it’s provided
    }
  }

  return (
    <div className="w-full z-10">
      <Popover>
        <PopoverTrigger asChild>
          <div className="w-full flex flex-col gap-2 bg-white bg-opacity-50 p-[13.5px]">
            <p className="opensans text-[12px] font-semibold">DATE</p>
            <Button
              className={cn(
                "w-full justify-start text-left font-normal flex gap-2 ",
                !selectedDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon size={20} strokeWidth={1} className="text-black" />
              {selectedDate ? format(selectedDate, "PPP") : <span className="text-black">Pick a date</span>}
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            initialFocus
            fromDate={min} // Set minimum selectable date to the min prop
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
