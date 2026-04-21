import { useState } from "react";
import MainTitle from "./MainTitle";
const timeSlots = [
  "1:00 PM",
  "2:00 PM",
  "4:00 PM",
  "5:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];
type Props = {
  selectedDate: number;
  setSelectedDate: (date: number) => void;
  setSelectedTime: (time: string | null) => void;
  selectedTime: string | null;
};

const DateSlot = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}: Props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date(); // Today's date - automatically updates daily

  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const selectedDateObj = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    selectedDate,
  );
  const selectedDateFormatted = selectedDateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const calendarDays: (number | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    );
  };
  console.log("object");
  return (
    <div className="pl-20">
      <MainTitle text1="Pick Your" text2="Date & Slot" />

      <div className="flex  bg-[#F2F2F2] p-6 rounded-xl">
        {/* Calendar */}
        <div className="flex-1 pr-6 border-r border-dashed border-[#DCDCDC]">
          <div className="">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handlePrevMonth}
                className="py-2 px-2.5 bg-[#00000017] rounded-full group hover:bg-[#E4002B] transition-colors"
              >
                <ChevronIcon className="rotate-180 text-[#828282] group-hover:text-white transition-colors" />
              </button>
              <h2 className="text-sm font-semibold text-slate-900 uppercase">
                {monthName}
              </h2>
              <button
                onClick={handleNextMonth}
                className="py-2 px-2.5 bg-[#00000017] rounded-full group hover:bg-[#E4002B] transition-colors"
              >
                <ChevronIcon className=" text-[#828282] group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-slate-600 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                const isToday =
                  day === today.getDate() &&
                  currentMonth.getMonth() === today.getMonth();
                const isSelected = selectedDate === day;

                return (
                  <button
                    key={index}
                    onClick={() => day && setSelectedDate(day)}
                    className={`aspect-square flex items-center justify-center text-sm font-medium rounded-full ${
                      day === null
                        ? "text-slate-300"
                        : isSelected
                          ? "bg-red-500 text-white font-semibold "
                          : isToday
                            ? "bg-[#DCDCDC] text-[#000000] font-normal"
                            : "text-[#000000] hover:bg-[#DCDCDC] font-normal"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Time Slots */}
        <div className="flex-1 pl-6">
          <div className="mb-6">
            <p className="text-sm text-slate-600 font-medium">
              {selectedDateFormatted}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-4 px-6 rounded-full font-semibold text-sm transition-all ${
                  selectedTime === time
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSlot;

const ChevronIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="6"
      height="11"
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.507812 0.507263L5.09881 5.45158L0.507812 10.3959"
        stroke="currentColor"
        strokeWidth="1.01453"
        strokeLinecap="round"
      />
    </svg>
  );
};
