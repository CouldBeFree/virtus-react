import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const modifiers = {
    birthday: new Date(2018, 9, 30)
};

const modifiersStyles = {
    thursdays: {
        color: '#ffc107',
        backgroundColor: '#fffdee',
    }
};

const Calendar = () => (
    <div>
        <DayPicker
            month={new Date()}
            modifiersStyles={modifiersStyles}
            modifiers={modifiers}
        />
    </div>
);

export default Calendar;