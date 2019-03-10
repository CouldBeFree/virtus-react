import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Calendar = () => (
    <div>
        <DayPicker
            month={new Date()}
        />
    </div>
);

export default Calendar;