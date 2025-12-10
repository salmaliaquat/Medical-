import React, { useState } from "react";

const Calendar = ({ selectedDate, onSelectDate, events = [] }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const prevMonth = () => {
  const newDate = new Date(year, month - 1, selectedDate.getDate());
  setCurrentDate(new Date(year, month - 1, 1)); // just change the month in calendar
  onSelectDate(newDate); // update selectedDate so AppointmentList updates
};

const nextMonth = () => {
  const newDate = new Date(year, month + 1, selectedDate.getDate());
  setCurrentDate(new Date(year, month + 1, 1));
  onSelectDate(newDate); // update selectedDate so AppointmentList updates
};

const goToday = () => {
  const today = new Date();
  setCurrentDate(today);
  onSelectDate(today); // update selectedDate
};

// Highlight today only if current calendar month/year matches today's month/year
const today = new Date();
const isHighlighted = (date) => {
  return date === today.getDate() &&
         month === today.getMonth() &&
         year === today.getFullYear();
};

// Selected date highlight
const isSelected = (date) => {
  return selectedDate.getDate() === date &&
         selectedDate.getMonth() === month &&
         selectedDate.getFullYear() === year;
};

    

    return (
        <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur border-0">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-200">
                <span className="text-lg font-semibold">
                    {currentDate.toLocaleString("default", { month: "long" })} {year}
                </span>
                <div className="flex space-x-2">
                    <button
                        onClick={prevMonth}
                        className="h-8 w-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-xs"
                    >
                        ‹
                    </button>
                    <button
                        onClick={goToday}
                        className="h-8 px-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-xs"
                    >
                        Today
                    </button>
                    <button
                        onClick={nextMonth}
                        className="h-8 w-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-xs"
                    >
                        ›
                    </button>
                </div>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-1 p-4 border-b border-slate-200">
                {weekdays.map((day) => (
                    <div
                        key={day}
                        className="text-center text-xs font-medium text-slate-500 py-2"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-1 p-4">
                {/* Empty slots */}
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                    <div key={`empty-${i}`} />
                ))}

                {/* Dates */}
                {Array.from({ length: daysInMonth }, (_, i) => {
                    const date = i + 1;
                    const hasEvent = events.includes(
                        new Date(year, month, date).toDateString()
                    );

                    return (
                        <button
                            key={date}
                            onClick={() => onSelectDate(new Date(year, month, date))}
                            className={`aspect-square p-1 rounded-lg text-sm relative transition-all hover:bg-slate-100 ${isSelected(date)
                                    ? "bg-teal-600 text-white font-bold scale-110 shadow-lg"
                                    : isHighlighted(date)
                                        ? "bg-teal-500 text-white font-semibold" // lighter teal for today
                                        : "text-slate-700"
                                }`}
                        >
                            <div>{date}</div>
                            {hasEvent && (
                                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-teal-500" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;
