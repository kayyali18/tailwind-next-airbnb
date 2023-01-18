import React, { useDebugValue, useState } from 'react';
// https://www.npmjs.com/package/react-calendar
import Calendar, {
  CalendarProps,
  FormatterCallback,
  OnChangeDateRangeCallback,
} from 'react-calendar';

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

  const selectionRange: DateRange = {
    startDate,
    endDate,
  };

  console.log(styles);

  const changeDate: OnChangeDateRangeCallback = (dates) => {
    console.log(dates);
    setDateRange([...dates]);
  };
  return (
    <div className={styles.calendar__wrapper}>
      <Calendar
        className="absolute overflow-hidden rounded-xl p-2"
        allowPartialRange
        selectRange
        onChange={changeDate}
        minDate={new Date()}
      />
      <h1>hello</h1>
    </div>
  );
};

export default BaseCalendar;

// @2:19:00
