// import React, { useEffect, useState, useRef } from 'react';
// import {
//     Box,
//     VStack,
//     HStack,
//     Heading,
//     Text,
//     Button,
//     Icon,
//     SimpleGrid,
//     Image,
//     Container,
//     useBreakpointValue
// } from '@chakra-ui/react';
// import { FaUsers, FaLightbulb, FaMedal } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';

// export default function HomePage() {
//     const [activeSection, setActiveSection] = useState(-1);
//     const sectionRefs = useRef([]);

//     const sections = [
//         {
//             id: 'hero',
//             title: 'NATIONAL SOCIETY OF BLACK ENGINEERS\nUCALGARY CHAPTER',
//             backgroundImage: 'url("/images/hero.jpg")',
//             content: (
//                 <VStack spacing={6} color="white" textAlign="center" px={4}>
//                     <Heading fontSize={{ base: "3xl", md: "5xl" }}>
//                         NATIONAL SOCIETY OF BLACK ENGINEERS
//                     </Heading>
//                     <Heading fontSize={{ base: "2xl", md: "4xl" }}>
//                         UCALGARY CHAPTER
//                     </Heading>
//                     <HStack spacing={4} mt={6}>
//                         <Button colorScheme="yellow" size="lg">
//                             Become A Member
//                         </Button>
//                         <Button colorScheme="yellow" variant="outline" size="lg">
//                             Become A Sponsor
//                         </Button>
//                     </HStack>
//                 </VStack>
//             )
//         },
//         {
//             id: 'what-we-offer',
//             title: 'WHAT WE OFFER',
//             backgroundImage: 'url("/images/offer.png")',
//             content: (
//                 <Container maxW="container.lg" py={20}>
//                     <VStack spacing={12} color="white" textAlign="center">
//                         <Heading fontSize={{ base: "2xl", md: "4xl" }}>WHAT WE OFFER</Heading>
//                         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//                             <VStack
//                                 bg="rgba(255, 255, 255, 0.1)"
//                                 p={6}
//                                 borderRadius="md"
//                                 spacing={4}
//                                 _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
//                             >
//                                 <Icon as={FaUsers} w={12} h={12} color="yellow.400" />
//                                 <Heading fontSize="xl">DIVERSITY & COMMUNITY</Heading>
//                                 <Text>
//                                     Diversity in NSBE UCalgary includes representation of individuals from various backgrounds and experiences, encompassing racial, ethnic, gender, socioeconomic, academic, and cultural diversity.
//                                 </Text>
//                             </VStack>
//                             <VStack
//                                 bg="rgba(255, 255, 255, 0.1)"
//                                 p={6}
//                                 borderRadius="md"
//                                 spacing={4}
//                                 _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
//                             >
//                                 <Icon as={FaLightbulb} w={12} h={12} color="yellow.400" />
//                                 <Heading fontSize="xl">INNOVATION</Heading>
//                                 <Text>
//                                     NSBE UCalgary fosters a collaborative environment where diverse perspectives come together to create solutions that address challenges and opportunities in engineering.
//                                 </Text>
//                             </VStack>
//                             <VStack
//                                 bg="rgba(255, 255, 255, 0.1)"
//                                 p={6}
//                                 borderRadius="md"
//                                 spacing={4}
//                                 _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
//                             >
//                                 <Icon as={FaMedal} w={12} h={12} color="yellow.400" />
//                                 <Heading fontSize="xl">LEADERSHIP & EXCELLENCE</Heading>
//                                 <Text>
//                                     NSBE UCalgary empowers members to achieve their full potential through professional development, mentorship, and networking, while celebrating the achievements of our community.
//                                 </Text>
//                             </VStack>
//                         </SimpleGrid>
//                     </VStack>
//                 </Container>
//             )
//         },
//         {
//             id: 'newsletter',
//             title: 'NEWSLETTER',
//             backgroundImage: 'url("/images/newsletter.jpg")',
//             content: (
//                 <VStack spacing={8} color="white" textAlign="center" px={4} py={20}>
//                     <Heading fontSize={{ base: "2xl", md: "4xl" }}>NEWSLETTER</Heading>
//                     <Text maxW="600px">
//                         The NSBE UCalgary Newsletter is a monthly publication that keeps members informed and engaged with messages from the chapter president, event highlights, career tips, and updates on partnerships and alumni news.
//                     </Text>
//                     <Button colorScheme="yellow" size="lg" leftIcon={<MdEmail />}>
//                         Subscribe to NSBE-UOfC Newsletter
//                     </Button>
//                 </VStack>
//             )
//         },
//         {
//             id: 'sponsors',
//             title: 'OUR ESTEEMED SPONSORS',
//             backgroundImage: 'url("/images/sponsors.jpg")',
//             content: (
//                 <Container maxW="container.lg" py={20}>
//                     <VStack spacing={12} color="white" textAlign="center">
//                         <Heading fontSize={{ base: "2xl", md: "4xl" }}>OUR ESTEEMED SPONSORS</Heading>
//                         <Text maxW="600px">
//                             We are grateful for the support of our sponsors who help us achieve our mission and make a difference in the community. Thank you for your generosity and commitment to diversity and inclusion in STEM!
//                         </Text>
//                         <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
//                             <Box>
//                                 <Image src="/images/platinum-sponsor-logo.png" alt="Platinum Sponsor" mx="auto" maxH="80px" />
//                                 <Text mt={2} fontSize="sm" color="yellow.400">PLATINUM SPONSOR</Text>
//                             </Box>
//                             <Box>
//                                 <Image src="/images/gold-sponsor-logo.png" alt="Gold Sponsor" mx="auto" maxH="80px" />
//                                 <Text mt={2} fontSize="sm" color="yellow.400">GOLD SPONSOR</Text>
//                             </Box>
//                             <Box>
//                                 <Image src="/images/silver-sponsor-logo.png" alt="Silver Sponsor" mx="auto" maxH="80px" />
//                                 <Text mt={2} fontSize="sm" color="yellow.400">SILVER SPONSOR</Text>
//                             </Box>
//                             <Box>
//                                 <Image src="/images/bronze-sponsor-logo.png" alt="Bronze Sponsor" mx="auto" maxH="80px" />
//                                 <Text mt={2} fontSize="sm" color="yellow.400">BRONZE SPONSOR</Text>
//                             </Box>
//                         </SimpleGrid>
//                         <Button colorScheme="yellow" size="lg" mt={8}>
//                             GET INVOLVED
//                         </Button>
//                     </VStack>
//                 </Container>
//             )
//         },
//     ];

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActiveSection(sections.findIndex((sec) => sec.id === entry.target.id));
//                     }
//                 });
//             },
//             { threshold: 0.2 } // Adjust this for partial visibility
//         );

//         sectionRefs.current.forEach((section) => {
//             if (section) observer.observe(section);
//         });

//         return () => {
//             sectionRefs.current.forEach((section) => {
//                 if (section) observer.unobserve(section);
//             });
//         };
//     }, [sections]);

//     return (
//         <Box w="100%" overflowX="hidden">
//             {sections.map((section, index) => (
//                 <Box
//                     id={section.id}
//                     key={section.id}
//                     ref={(el) => (sectionRefs.current[index] = el)}
//                     w="100%"
//                     minH="100vh"
//                     backgroundImage={section.backgroundImage}
//                     backgroundSize="cover"
//                     backgroundPosition="center"
//                     position="relative"
//                     transition="transform 0.8s ease-out, opacity 0.8s ease-out"
//                     transform={index === activeSection ? 'translateY(0)' : 'translateY(50px)'}
//                     opacity={index === activeSection ? 1 : 0.5}
//                 >
//                     <Box
//                         position="absolute"
//                         top="0"
//                         left="0"
//                         w="100%"
//                         h="100%"
//                         bg="rgba(0, 0, 0, 0.5)"
//                     />
//                     <Box
//                         position="relative"
//                         zIndex="1"
//                         h="100%"
//                         display="flex"
//                         alignItems="center"
//                         justifyContent="center"
//                     >
//                         {section.content}
//                     </Box>
//                 </Box>
//             ))}
//         </Box>
//     );
// }

import React, { useEffect, useState, useRef } from 'react';
import {
    Box,
    VStack,
    HStack,
    Heading,
    Text,
    Button,
    Icon,
    SimpleGrid,
    Image,
    Container,
    useBreakpointValue
} from '@chakra-ui/react';
import { FaUsers, FaLightbulb, FaMedal } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function HomePage() {
    const [activeSection, setActiveSection] = useState(-1);
    const sectionRefs = useRef([]);

    const sections = [
        {
            id: 'hero',
            title: 'NATIONAL SOCIETY OF BLACK ENGINEERS\nUCALGARY CHAPTER',
            backgroundImage: 'url("/images/hero.jpg")',
            content: (
                <VStack spacing={6} color="white" textAlign="center" px={4}>
                    <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" bgGradient="linear(to-r, yellow.400, red.500)" bgClip="text">
                        NATIONAL SOCIETY OF BLACK ENGINEERS
                    </Heading>
                    <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, teal.300, blue.500)" bgClip="text">
                        UCALGARY CHAPTER
                    </Heading>
                    <HStack spacing={4} mt={6}>
                        <Button colorScheme="yellow" size="lg" _hover={{ transform: "scale(1.05)" }} transition="all 0.3s">
                            Become A Member
                        </Button>
                        <Button colorScheme="yellow" variant="outline" size="lg" _hover={{ transform: "scale(1.05)" }} transition="all 0.3s">
                            Become A Sponsor
                        </Button>
                    </HStack>
                </VStack>
            )
        },
        {
            id: 'what-we-offer',
            title: 'WHAT WE OFFER',
            backgroundImage: 'url("/images/offer.png")',
            content: (
                <Container maxW="container.lg" py={20}>
                    <VStack spacing={12} color="white" textAlign="center">
                        <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, yellow.400, orange.500)" bgClip="text">
                            WHAT WE OFFER
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                            {[
                                {
                                    icon: FaUsers,
                                    title: "DIVERSITY & COMMUNITY",
                                    text: "Diversity in NSBE UCalgary includes representation of individuals from various backgrounds and experiences, encompassing racial, ethnic, gender, socioeconomic, academic, and cultural diversity."
                                },
                                {
                                    icon: FaLightbulb,
                                    title: "INNOVATION",
                                    text: "NSBE UCalgary fosters a collaborative environment where diverse perspectives come together to create solutions that address challenges and opportunities in engineering."
                                },
                                {
                                    icon: FaMedal,
                                    title: "LEADERSHIP & EXCELLENCE",
                                    text: "NSBE UCalgary empowers members to achieve their full potential through professional development, mentorship, and networking, while celebrating the achievements of our community."
                                }
                            ].map(({ icon, title, text }, idx) => (
                                <VStack
                                    key={title}
                                    bg="rgba(255, 255, 255, 0.1)"
                                    p={6}
                                    borderRadius="md"
                                    spacing={4}
                                    _hover={{ bg: "rgba(255, 255, 255, 0.2)", transform: "scale(1.05)" }}
                                    transition="all 0.3s"
                                >
                                    <Icon as={icon} w={12} h={12} color="yellow.400" />
                                    <Heading fontSize="xl">{title}</Heading>
                                    <Text>{text}</Text>
                                </VStack>
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>
            )
        },
        {
            id: 'newsletter',
            title: 'NEWSLETTER',
            backgroundImage: 'url("/images/newsletter.jpg")',
            content: (
                <VStack spacing={8} color="white" textAlign="center" px={4} py={20}>
                    <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, pink.400, purple.500)" bgClip="text">
                        NEWSLETTER
                    </Heading>
                    <Text maxW="600px">
                        The NSBE UCalgary Newsletter is a monthly publication that keeps members informed and engaged with messages from the chapter president, event highlights, career tips, and updates on partnerships and alumni news.
                    </Text>
                    <Button colorScheme="yellow" size="lg" leftIcon={<MdEmail />} _hover={{ transform: "scale(1.05)" }} transition="all 0.3s">
                        Subscribe to NSBE-UOfC Newsletter
                    </Button>
                </VStack>
            )
        },
        {
            id: 'sponsors',
            title: 'OUR ESTEEMED SPONSORS',
            backgroundImage: 'url("/images/sponsors.jpg")',
            content: (
                <Container maxW="container.lg" py={20}>
                    <VStack spacing={12} color="white" textAlign="center">
                        <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, green.400, blue.500)" bgClip="text">
                            OUR ESTEEMED SPONSORS
                        </Heading>
                        <Text maxW="600px">
                            We are grateful for the support of our sponsors who help us achieve our mission and make a difference in the community. Thank you for your generosity and commitment to diversity and inclusion in STEM!
                        </Text>
                        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                            {[
                                { src: "/images/platinum-sponsor-logo.png", label: "PLATINUM SPONSOR" },
                                { src: "/images/gold-sponsor-logo.png", label: "GOLD SPONSOR" },
                                { src: "/images/silver-sponsor-logo.png", label: "SILVER SPONSOR" },
                                { src: "/images/bronze-sponsor-logo.png", label: "BRONZE SPONSOR" }
                            ].map(({ src, label }) => (
                                <Box key={label} display="flex" flexDirection="column" alignItems="center" _hover={{ transform: "scale(1.05)" }} transition="all 0.3s">
                                    <Image src={src} alt={label} mx="auto" maxH="80px" />
                                    <Text mt={2} fontSize="sm" color="yellow.400">{label}</Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                        <Button colorScheme="yellow" size="lg" mt={8} _hover={{ transform: "scale(1.05)" }} transition="all 0.3s">
                            GET INVOLVED
                        </Button>
                    </VStack>
                </Container>
            )
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(sections.findIndex((sec) => sec.id === entry.target.id));
                    }
                });
            },
            { threshold: 0.2 } // Adjust this for partial visibility
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, [sections]);

    return (
        <Box w="100%" overflowX="hidden">
            {sections.map((section, index) => (
                <Box
                    id={section.id}
                    key={section.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    w="100%"
                    minH="100vh"
                    backgroundImage={section.backgroundImage}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    position="relative"
                    transition="transform 0.8s ease-out, opacity 0.8s ease-out"
                    transform={index === activeSection ? 'translateY(0)' : 'translateY(50px)'}
                    opacity={index === activeSection ? 1 : 0.5}
                >
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        w="100%"
                        h="100%"
                        bg="rgba(0, 0, 0, 0.5)"
                        zIndex="0"
                        transition="opacity 0.5s ease"
                    />
                    <Box
                        position="relative"
                        zIndex="1"
                        minH="100vh"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={4}
                    >
                        {section.content}
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
