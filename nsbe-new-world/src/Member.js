import React from "react";
import { Box, Image, Text, SimpleGrid } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Members() {
    const execMembers = [
        // Add your exec members' data here
        { name: 'John Doe', role: 'President', imageUrl: 'john.jpg' },
        { name: 'Jane Smith', role: 'Vice President', imageUrl: 'jane.jpg' },
        // Add more members as needed
      ];

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
    
      return (
        <>
          {/* Carousel for small screens */}
          <Box display={{ base: 'block', md: 'none' }} p={5}>
            <Slider {...settings}>
              {execMembers.map((member, index) => (
                <Box key={index} textAlign="center" p={5}>
                  <Image borderRadius="full" boxSize="150px" src={member.imageUrl} alt={member.name} />
                  <Text fontWeight="bold" mt={4} color='gray.100'>{member.name}</Text>
                  <Text color='gray.100'>{member.role}</Text>
                </Box>
              ))}
            </Slider>
          </Box>
    
          {/* Grid for large screens */}
          <Box display={{ base: 'none', md: 'block' }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} p={5}>
              {execMembers.map((member, index) => (
                <Box key={index} textAlign="center" border="1px" borderColor="gray.200" p={5}>
                  <Image borderRadius="full" boxSize="150px" src={member.imageUrl} alt={member.name} />
                  <Text fontWeight="bold" mt={4} color='gray.100'>{member.name}</Text>
                  <Text color='gray.100'>{member.role}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </>
      );
}

export default Members;
