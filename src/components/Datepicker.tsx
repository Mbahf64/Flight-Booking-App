// "use client"

// import * as React from "react"
// import { addDays, format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"
// import { DateRange } from "react-day-picker"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// export function DatePickerWithRange({
//   className,
// }: React.HTMLAttributes<HTMLDivElement>) {
//   const [date, setDate] = React.useState<DateRange | undefined>({
//     from: new Date(2022, 0, 20),
//     to: addDays(new Date(2022, 0, 20), 20),
//   })




//   return (
//     <div className={cn("grid gap-2", className)}>
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button
//             id="date"
//             className={cn(
//               "w-[300px] justify-start text-left font-normal flex gap-2 p-3 bg-white border",
//               !date && "text-muted-foreground"
//             )}
//           >
//             <CalendarIcon />
//             {date ? format(date, "PPP") : <span>Pick a date</span>}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0" align="start">
//         <Calendar
//           mode="single"
//           selected={date}
//           onSelect={setDate}
//           initialFocus
//         />
//         </PopoverContent>
//       </Popover>
//     </div>
//   )
// }


"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className="w-full z-10">
      <Popover >
        <PopoverTrigger asChild>
          <div className="w-full flex flex-col gap-2 bg-white bg-opacity-50 p-3">
          <p className="opensans text-[12px] font-semibold">DEPARTURE</p>
              <Button
                className={cn(
                  "w-full justify-start text-left font-normal flex gap-2 ",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon size={20} strokeWidth={1} className="text-black" />
                {date ? format(date, "PPP") : <span className="text-black">Pick a date</span>}
              </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}


