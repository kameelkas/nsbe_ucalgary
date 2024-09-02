import React, { useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import { Box, Text, Heading, Image } from "@chakra-ui/react";
import Research from "./images/researchNight.png";
import Career from "./images/careerFair.png";


const events = [
  {
    id: 1,
    title: "Workshop: Introduction to AI",
    date: new Date(2024, 10, 15),
    description:
      "A comprehensive workshop introducing the basics of Artificial Intelligence.",
    location: "Room 101, Science Building",
  },
  {
    id: 2,
    title: "Networking Event",
    date: new Date(2024, 10, 18),
    description:
      "An event to meet and network with professionals in the tech industry.",
    location: "Main Hall, Conference Center",
  },
  // Add more events as needed
];

const Event = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const event = events.find(
      (event) => format(event.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );
    setSelectedEvent(event || null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pb={6}>
      <Heading color="white" pt={3}>Events</Heading>
      <Text color="white" width='80%' textAlign={'center'} px={3} py={1}>
        Stay up-to-date with our latest events and happenings! Below, you'll
        find our calendar of upcoming events, where you can find details on our
        workshops, webinars, and more.
      </Text>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={({ date, view }) => {
          const dailyEvents = events.filter(
            (event) =>
              format(event.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
          );

          return dailyEvents.length > 0 ? (
            <Box>
              {dailyEvents.map((event) => (
                <Text key={event.id} fontSize="xs" color="white">
                  {event.title}
                </Text>
              ))}
            </Box>
          ) : null;
        }}
        tileClassName={({ date, view }) => {
          const isSelected =
            format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
          return isSelected ? "selected-date" : "";
        }}
      />

      {selectedEvent && (
        <Box
          my={8}
          p={4}
          border="1px solid #ddd"
          borderRadius="md"
          backgroundColor="#f9f9f9"
          maxWidth="600px"
          width="80%"
          boxShadow="md"
        >
          <Heading size="md" mb={2}>
            {selectedEvent.title}
          </Heading>
          <Text>
            <strong>Date:</strong> {format(selectedEvent.date, "MMMM d, yyyy")}
          </Text>
          <Text>
            <strong>Description:</strong> {selectedEvent.description}
          </Text>
          <Text>
            <strong>Location:</strong> {selectedEvent.location}
          </Text>
        </Box>
      )}

      <Box display="flex" flexDirection="column" alignItems="center" pt={6}>
        <Heading color="white">COMING SOON!</Heading>
        <Text color="white" textAlign={'center'}>
          Mark your calendars for an exciting fall semester ahead! Check out our
          upcoming events below, featuring a range of workshops, webinars, and
          more.
        </Text>
        <Box display="flex" flexDirection={{base: 'column', md: 'row'}} alignItems="center">
          <Image
            border="2px"
            borderColor="brand.NSBEYellow"
            src={Career}
            w='340px'
            h='400px'
            p={1} 
            m={2}
            alt='Career Fair Poster'
          />
          <Image
            border="2px"
            borderColor="brand.NSBEYellow"
            src={Research}
            w='340px'
            h='400px'
            p={1} 
            m={2}
            alt='Research Night Poster'
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Event;
