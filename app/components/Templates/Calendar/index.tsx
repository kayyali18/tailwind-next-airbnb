import React from 'react';
// https://www.npmjs.com/package/react-calendar
import Calendar, { CalendarProps } from 'react-calendar';

import 'react-date-range-ts/dist/styles.css';
import 'react-date-range-ts/dist/theme/default.css';

export interface IBaseCalendar extends CalendarProps {
  children?: React.ReactNode;
}

const BaseCalendar: React.FC<IBaseCalendar> = ({ activeStartDate }) => {
  return (
    <div>
      <Calendar />
    </div>
  );
};

export default BaseCalendar;

// @2:19:00
