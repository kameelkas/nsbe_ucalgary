import React from "react";
import { Flex, Box, Image, Text, SimpleGrid, Heading, Link, IconButton } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedin } from 'react-icons/fa';
import Fisayo from "./images/fisayo.jpg"
import Tumi from "./images/tumi.jpg"
import Eshi from "./images/eshi.jpg"
import Emiko from "./images/emiko.png"
import Dyenaan from "./images/dyenaan.png"
import Girl from "./images/blackGirl.jpg"
import Boy from "./images/blackBoy.png"


function Members() {
    const execMembers = [
        { name: 'Tumi Akalumhe', role: 'Co-President', imageUrl: Tumi, industry: 'Electrical Engineering, Renewable Energy, Technology', skills: 'Leadership, Innovation, Problem-Solving, Automation, Coding', interests: 'Robotics, Sustainability, Diversity, Social Change, Empowerment', linkedIn: 'https://www.linkedin.com/in/tumi-akalumhe-0b9352209/', email: 'tumi.akalumhe@ucalgary.ca' },
        { name: 'Eshilamha Akalumhe', role: 'Co-President', imageUrl: Eshi, industry: 'Software Engineering, Technology', skills: 'Software, Robotics, Development, Problem-Solving, Solution-Oriented Mindset, Resourcefulness', interests: 'Innovation, Diversity, Empowerment', linkedIn: 'https://www.linkedin.com/in/eshilama-akalumhe-855651214/', email: 'eshilama.akalumhe@ucalgary.ca' },
        { name: 'Shine David Daniel', role: 'Programs Chair', imageUrl: Girl, industry: 'Biomedical, Digital Engineering, Healthcare, Research', skills: 'Biomaterials, Microwave Imaging, Innovation, Leadership, Problem-Solving', interests: "Health-related Research, Children's Health", linkedIn: 'https://www.linkedin.com/in/shine-david-daniel/', email: 'shine.daviddaniel@ucalgary.ca' },
        { name: 'Ireoluwa Fagbuyi', role: 'Membership Chair', imageUrl: Girl, industry: 'Mechanical Engineering', skills: 'Leadership, Membership Development', interests: 'Sudoku, Reality Shows, Community Building', linkedIn: '', email: 'ireoluwa.fagbuyi@ucalgary.ca' },
        { name: 'Oluwafisayo Adabs', role: 'Technology Chair', imageUrl: Fisayo, industry: 'Software, Engineering, Mechatronics', skills: 'Robotics, Event Planning, Technical Support, Collaboration, Web Development, Problem-Solving ', interests: 'Sports, Reading, Gaming, Coding Games, Tech Innovation, Collaborative Projects', linkedIn: 'https://www.linkedin.com/in/oluwafisayo-adabs-/', email: 'oluwafisayo.adabs@ucalgary.ca' },
        { name: 'Emiko Emiko', role: 'Pre-College Initiative Chair', imageUrl: Emiko, industry: 'Software Engineering', skills: 'Problem-Solving, Programming, Leadership', interests: 'Technology, Fashion, Music', linkedIn: 'https://www.linkedin.com/in/emiko-emiko/', email: 'emiko.emiko@ucalgary.ca' },
        { name: 'Dyenaan Dapoet', role: 'T.O.R.C.H', imageUrl: Dyenaan, industry: 'Software Engineering', skills: 'Problem-Solving, Software Development, Leadership', interests: 'Technology, History, Sports', linkedIn: 'https://www.linkedin.com/in/dyenaan-dapoet-053416205/', email: 'dyenaan.dapoet@ucalgary.ca' },
        { name: 'Amanda Tamakloe', role: 'Secretary', imageUrl: Girl, industry: 'Chemical Engineering', skills: 'Leadership, Communication, Organization', interests: 'STEM, Community Development, Event Planning', linkedIn: 'https://www.linkedin.com/in/amanda-tamakloe/', email: 'amanda.tamakloe@ucalgary.ca' }
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
        <Heading textAlign='center' size={{sm: 'md', md: 'xl', lg: '2xl'}}color='white' p={2}>Meet the NSBE UCalgary team for the 2023-2024 term!</Heading>
            {/* Carousel for small screens */}
            <Box display={{ base: 'block', md: 'none' }} p={5}>
                <Slider {...settings}>
                    {execMembers.map((member, index) => (
                        <Box key={index} textAlign="center" p={5} border="2px" borderColor="brand.NSBEYellow" bg='#333333' borderRadius='lg'>
                            <Flex direction='column' align='center' color='white'>
                                <Image border="2px" borderColor="brand.NSBEYellow" borderRadius="full" boxSize="200px" src={member.imageUrl} alt={member.name} />
                                <Text fontWeight="bold" fontSize='xl' mt={4}>{member.name}</Text>
                                <Text fontSize='lg'><u>{member.role}</u></Text>
                                <Text><b>Industry:</b> {member.industry}</Text>
                                <Text><b>Skills:</b> {member.skills}</Text>
                                <Text><b>Interests:</b> {member.interests}</Text>
                                <Flex mt={4}>
                                    <Link href={member.linkedIn} isExternal>
                                        <IconButton
                                            colorScheme='#2eb457'
                                            aria-label='LinkedIn Page'
                                            variant='solid'
                                            fontSize='30px'
                                            icon={<FaLinkedin />} />
                                    </Link>

                                    <Link href={`mailto:${member.email}`} isExternal>
                                        <IconButton
                                            colorScheme='#2eb457'
                                            aria-label='LinkedIn Page'
                                            variant='solid'
                                            fontSize='30px'
                                            icon={<EmailIcon />} />
                                    </Link>

                                </Flex>
                            </Flex>
                        </Box>
                    ))}
                </Slider>
            </Box>

            {/* Grid for large screens */}
            <Box display={{ base: 'none', md: 'block' }}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} p={5} color='white'>
                    {execMembers.map((member, index) => (
                        <Box key={index} borderRadius='lg' textAlign='left' border="2px" borderColor="brand.NSBEYellow" bg='#333333' p={5}>
                            <Flex direction='column' align='center'>
                                <Image boxShadow='2xl' borderRadius='full' boxSize='300px' border="2px" borderColor="brand.NSBEYellow" src={member.imageUrl} alt={member.name} />
                                <Text fontWeight="bold" fontSize='xl' mt={4}>{member.name}</Text>
                                <Text fontSize='lg'><u>{member.role}</u></Text>
                                <Text><b>Industry:</b> {member.industry}</Text>
                                <Text><b>Skills:</b> {member.skills}</Text>
                                <Text><b>Interests:</b> {member.interests}</Text>
                                <Flex mt={4}>
                                    <Link href={member.linkedIn} isExternal>
                                        <IconButton
                                            colorScheme='#2eb457'
                                            aria-label='LinkedIn Page'
                                            variant='solid'
                                            fontSize='30px'
                                            icon={<FaLinkedin />} />
                                    </Link>

                                    <Link href={`mailto:${member.email}`} isExternal>
                                        <IconButton
                                            colorScheme='#2eb457'
                                            aria-label='LinkedIn Page'
                                            variant='solid'
                                            fontSize='30px'
                                            icon={<EmailIcon />} />
                                    </Link>

                                </Flex>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </>
    );
}

export default Members;
