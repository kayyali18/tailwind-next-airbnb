import useGeolocation from '@/utils/hooks/geolocation';
import React, { BaseSyntheticEvent, SyntheticEvent, useState } from 'react';
// https://www.npmjs.com/package/react-calendar
import Calendar, {
  CalendarProps,
  FormatterCallback,
  OnChangeDateRangeCallback,
} from 'react-calendar';

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from '@heroicons/react/24/outline';

import { UsersIcon } from '@heroicons/react/24/solid';

import 'react-calendar/dist/Calendar.css';

import styles from './styles.module.sass';

export interface IBaseCalendar extends CalendarProps {
  children?: React.ReactNode;
  formatYear: FormatterCallback;
}

export type DateRange = {
  startDate: Date;
  endDate?: Date;
};

const BaseCalendar: React.FC<IBaseCalendar> = ({
  allowPartialRange = true,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [guests, setGuests] = useState(1);

  const location = useGeolocation();

  const selectionRange: DateRange = {
    startDate,
    endDate,
  };

  const handleCounterClick = (e: BaseSyntheticEvent) => {
    const increment: boolean = !!parseInt(e.target.value);
    const parsed = isNaN(guests)
      ? 1
      : typeof guests === 'string'
      ? parseInt(guests)
      : guests;

    if (isNaN(guests)) setGuests(parsed);
    else if (increment && guests < 6) setGuests(parsed + 1);
    else if (!increment && guests > 1) setGuests(parsed - 1);
  };

  const changeDate: OnChangeDateRangeCallback = (dates) => {
    console.log(dates);
    setDateRange([...dates]);
  };
  return (
    <div className={styles.calendar__wrapper}>
      <div className="mx-auto flex w-[clamp(320px,_33vw,_100%)] flex-col overflow-hidden rounded-xl shadow-2xl shadow-black">
        <Calendar
          className="borb !w-full overflow-hidden !border-0  p-2"
          allowPartialRange
          selectRange
          onChange={changeDate}
          minDate={new Date()}
        />
        <div className="bg-white">
          <div className="flex items-center justify-center space-x-3">
            <p className="text-center text-2xl font-semibold">
              Number of guests
            </p>
            <UsersIcon className="h-6 fill-rose-500" />
          </div>
          <div className="relative flex justify-center space-x-1 py-3 pb-8">
            <button
              type="button"
              aria-label="decrement"
              aria-controls="guest-counter"
              onClick={handleCounterClick}
              className="hover:text-rose-400"
              value={0}
            >
              <ArrowDownCircleIcon className="pointer-events-none h-7" />
            </button>
            <input
              id="guest-counter"
              type="text"
              inputMode="numeric"
              pattern="[1-6]{1}"
              value={guests}
              onInput={(e: BaseSyntheticEvent) => {
                setGuests(e.target.value);
              }}
              className="peer h-8 w-1/12 rounded-lg border-2 text-center invalid:border-red-500 focus:outline-0"
            />
            <button
              type="button"
              aria-label="increment"
              aria-controls="guest-counter"
              onClick={handleCounterClick}
              className="hover:text-rose-400"
              value={1}
            >
              <ArrowUpCircleIcon className="pointer-events-none h-7" />
            </button>
            <div
              className="invisible absolute bottom-0 flex h-4 w-10/12 items-center justify-center rounded-t-md bg-red-500 px-4 py-3 text-sm font-bold text-white peer-invalid:visible"
              role="alert"
            >
              <svg
                className="mr-1 h-3 w-3 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
              </svg>
              <p className="text-xs">Please enter a number between 1-6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCalendar;

// @2:19:00
