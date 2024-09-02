import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import {Box} from "@chakra-ui/react";

const events = [
    {
        id: 1,
        title: 'Workshop: Introduction to AI',
        date: new Date(2024, 10, 15),
    },
    {
        id: 2,
        title: 'Networking Event',
        date: new Date(2024, 10, 18),
    },
    // Add more events as needed
];

const Event = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <Box display='flex' justifyContent='center'>
            <Calendar
                // className="w-full"
                onChange={setSelectedDate}
                value={selectedDate}
                tileContent={({ date, view }) => {
                    const dailyEvents = events.filter(
                        (event) =>
                            format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                    );

                    return dailyEvents.length > 0 ? (
                        <Box>
                            {dailyEvents.map((event) => (
                                <div key={event.id}>{event.title}</div>
                            ))}
                        </Box>
                    ) : null;
                }}
                tileClassName={({ date, view }) => {
                    const isSelected =
                        format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                    return isSelected ? '' : '';
                }}
            />
        </Box>
    );
};

export default Event;