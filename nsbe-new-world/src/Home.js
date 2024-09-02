import React from 'react';
import { Box, VStack, HStack, Heading, Text, Button, Icon, SimpleGrid, Image, Container, Flex } from '@chakra-ui/react';
import { FaUsers, FaLightbulb, FaMedal } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Offer from "./images/NsbeConference.webp";
import profPeople from './images/NSBE National Convention.jpg'
import sponsorBG from './images/NSBESponsor.jpg'
import ParticlesComponent from './ParticleBackground';
import news from './images/newsletter.png'
import tea from './images/NsbeTea.webp'


export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <Box
                id="hero"
                w="100vw"
                minH="100vh"
                backgroundImage={profPeople}
                backgroundSize="cover"
                backgroundPosition="center"
                position="sticky"
                top="0"
                opacity={1}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="100vw"
                    h="100vh"
                    bg="rgba(0, 0, 0, 0.6)"
                />
                <Container
                    position="relative"
                    maxW="container.xl"
                    h="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    py={{ base: 6, md: 12, lg: 16 }}
                    px={{ base: 4, md: 8 }}
                >
                    <VStack spacing={{ base: 4, md: 6, lg: 8 }} color="white" textAlign="center" mt={{base: 60, md: 8, lg:12}}>
                        <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" bgGradient="linear(to-r, yellow.400, red.500)" bgClip="text">
                            NATIONAL SOCIETY OF BLACK ENGINEERS
                        </Heading>
                        <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, teal.300, blue.500)" bgClip="text">
                            UCALGARY CHAPTER
                        </Heading>
                        <HStack spacing={{ base: 2, md: 4 }} mt={{ base: 4, md: 6 }}>
                            <Button colorScheme="yellow" size={{ base: "md", md: "lg" }} _hover={{ transform: "scale(1.05)" }} transition="all 0.3s"
                                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfplx30HQHxu1OfNIjlSgTWFdMEh1KOWg6SuE553nPf1osPXA/viewform', '_blank')}
                            >
                                Become A Member
                            </Button>
                            <Button
                                colorScheme="yellow"
                                variant="outline"
                                size={{ base: "md", md: "lg" }}
                                _hover={{ transform: "scale(1.05)" }}
                                transition="all 0.3s"
                                onClick={() => window.location.href = '/contact'} // Replace with your URL
                            >
                                Become A Sponsor
                            </Button>
                        </HStack>
                    </VStack>
                </Container>
            </Box>

            {/* What We Offer Section */}
            <Box
                id="hero"
                w="100vw"
                minH="100vh"
                backgroundImage={Offer}
                backgroundSize="cover"
                backgroundPosition="center"
                position="sticky"
                top="0"
                opacity={1}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="100vw"
                    h="100vh"
                    bg="rgba(0, 0, 0, 0.6)"
                />
                <Container
                    maxW="container.lg"
                    py={{ base: 10, md: 12, lg: 16 }} // Adjusted padding for responsiveness
                    position="relative"
                    h="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <VStack spacing={{ base: 6, md: 8, lg: 10 }} color="white" textAlign="center">
                        <Heading
                            fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                            fontWeight="bold"
                            bgGradient="linear(to-r, yellow.400, orange.500)"
                            bgClip="text"
                        >
                            WHAT WE OFFER
                        </Heading>
                        <SimpleGrid
                            columns={{ base: 1, md: 2, lg: 3 }}
                            spacing={{ base: 4, md: 6, lg: 8 }} // Adjusted spacing between grid items
                        >
                            <VStack
                                bg="rgba(255, 255, 255, 0.5)"
                                p={{ base: 4, sm: 5, md: 6 }} // Adjusted padding for smaller screens
                                borderRadius="md"
                                spacing={4}
                                _hover={{ bg: "rgba(255, 255, 255)", transform: "scale(1.05)" }}
                                transition="all 0.3s"
                            >
                                <Icon as={FaUsers} w={{ base: 8, md: 10, lg: 12 }} h={{ base: 8, md: 10, lg: 12 }} color="yellow.400" />
                                <Heading fontSize={{ base: "md", sm: "lg", md: "xl" }} color="brand.NSBEBlack">DIVERSITY & COMMUNITY</Heading>
                                <Text color="brand.NSBEBlack" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                                    Diversity in NSBE UCalgary includes representation of individuals from various backgrounds and experiences, encompassing racial, ethnic, gender, socioeconomic, academic, and cultural diversity.
                                </Text>
                            </VStack>
                            <VStack
                                bg="rgba(255, 255, 255, 0.5)"
                                p={{ base: 4, sm: 5, md: 6 }}
                                borderRadius="md"
                                spacing={4}
                                _hover={{ bg: "rgba(255, 255, 255)", transform: "scale(1.05)" }}
                                transition="all 0.3s"
                            >
                                <Icon as={FaLightbulb} w={{ base: 8, md: 10, lg: 12 }} h={{ base: 8, md: 10, lg: 12 }} color="yellow.400" />
                                <Heading fontSize={{ base: "md", sm: "lg", md: "xl" }} color="brand.NSBEBlack">INNOVATION</Heading>
                                <Text color="brand.NSBEBlack" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                                    NSBE UCalgary fosters a collaborative environment where diverse perspectives come together to create solutions that address challenges and opportunities in engineering.
                                </Text>
                            </VStack>
                            <VStack
                                bg="rgba(255, 255, 255, 0.5)"
                                p={{ base: 4, sm: 5, md: 6 }}
                                borderRadius="md"
                                spacing={4}
                                _hover={{ bg: "rgba(255, 255, 255)", transform: "scale(1.05)" }}
                                transition="all 0.3s"
                            >
                                <Icon as={FaMedal} w={{ base: 8, md: 10, lg: 12 }} h={{ base: 8, md: 10, lg: 12 }} color="yellow.400" />
                                <Heading fontSize={{ base: "md", sm: "lg", md: "xl" }} color="brand.NSBEBlack">LEADERSHIP & EXCELLENCE</Heading>
                                <Text color="brand.NSBEBlack" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                                    NSBE UCalgary empowers members to achieve their full potential through professional development, mentorship, and networking, while celebrating the achievements of our community.
                                </Text>
                            </VStack>
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>

            {/* Newsletter Section */}
            <Box
                id="newsletter"
                w="100vw"
                minH="100vh"
                backgroundImage={tea}
                backgroundSize="cover"
                backgroundPosition="center"
                position="sticky"
                top="0"
                opacity={1}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="rgba(0, 0, 0, 0.6)"
                />
                <Container maxW="container.lg" py={{ base: 12, md: 16, lg: 20 }} position="relative" h="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <VStack spacing={{ base: 6, md: 8, lg: 10 }} color="white" textAlign="center" px={{ base: 4, md: 8 }}>
                        <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, pink.400, purple.500)" bgClip="text">
                            NEWSLETTER
                        </Heading>
                        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} maxW={{ base: "full", md: "500px", lg: "600px" }}>
                            The NSBE UCalgary Newsletter is a monthly publication that keeps members informed and engaged with messages from the chapter president, event highlights, career tips, and updates on partnerships and alumni news.
                        </Text>
                        <Button
                            colorScheme="yellow"
                            size={{ base: "md", md: "lg" }}
                            leftIcon={<MdEmail />}
                            _hover={{ transform: "scale(1.05)" }}
                            transition="all 0.3s"
                            onClick={() => window.open('https://mailchi.mp/ffc3b0345e78/nsbe-ucalgary-newsletter', '_blank')}
                        >
                            Subscribe to NSBE-UOfC Newsletter
                        </Button>
                        <Box as="figure" mr={{ base: 2, md: 4 }}>
                            <Image src={news} alt="Newsletter Graphic" height={{ base: "10%", md: "15%", lg: "20%" }} />
                        </Box>
                    </VStack>
                </Container>
            </Box>

            {/* Sponsors Section */}
            <Box
                id="sponsors"
                w="100vw"
                minH="100vh"
                backgroundImage={sponsorBG}
                backgroundSize="cover"
                backgroundPosition="center"
                position="sticky"
                top="0"
                opacity={1}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="100vw"
                    h="100vh"
                    bg="rgba(0, 0, 0, 0.6)"
                />
                <Container maxW="container.lg" py={{ base: 12, md: 16, lg: 20 }} position="relative" h="100%" display="flex" alignItems="center" justifyContent="center">
                    <VStack spacing={{ base: 8, md: 10, lg: 12 }} color="white" textAlign="center">
                        <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, green.400, blue.500)" bgClip="text">
                            OUR ESTEEMED SPONSORS
                        </Heading>
                        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} maxW={{ base: "full", md: "500px", lg: "600px" }}>
                            We are grateful for the support of our sponsors who help us achieve our mission and make a difference in the community. Thank you for your generosity and commitment to diversity and inclusion in STEM!
                        </Text>
                        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={{ base: 6, md: 8, lg: 10 }}>
                            <Box display="flex" flexDirection="column" alignItems="center" _hover={{ transform: "scale(1.05)" }} transition="all 0.3s">
                                <Image src="/images/platinum-sponsor-logo.png" alt="PLATINUM SPONSOR" mx="auto" maxH="80px" />
                                <Text mt={2} fontSize="sm" color="yellow.400">PLATINUM SPONSOR</Text>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center" _hover={{ transform: "scale(1.05)" }} transition="all 0.3s">
                                <Image src="/images/gold-sponsor-logo.png" alt="GOLD SPONSOR" mx="auto" maxH="80px" />
                                <Text mt={2} fontSize="sm" color="yellow.400">GOLD SPONSOR</Text>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center" _hover={{ transform: "scale(1.05)" }} transition="all 0.3s">
                                <Image src="/images/silver-sponsor-logo.png" alt="SILVER SPONSOR" mx="auto" maxH="80px" />
                                <Text mt={2} fontSize="sm" color="yellow.400">SILVER SPONSOR</Text>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center" _hover={{ transform: "scale(1.05)" }} transition="all 0.3s">
                                <Image src="/images/bronze-sponsor-logo.png" alt="BRONZE SPONSOR" mx="auto" maxH="80px" />
                                <Text mt={2} fontSize="sm" color="yellow.400">BRONZE SPONSOR</Text>
                            </Box>
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>
        </>
    );
}
