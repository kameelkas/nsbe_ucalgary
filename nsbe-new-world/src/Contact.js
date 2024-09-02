import { useRef } from 'react';
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    AspectRatio,
    Image,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md';
import { BsInstagram, BsDiscord, BsPerson, BsTwitterX } from 'react-icons/bs';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import mailing from './incoming-mail-svgrepo-com.svg';
import MapSection from './Map';

// Animation variants for different elements
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
};

const mapVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7 },
    },
};

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_t4449fb', 'template_sovxft5', form.current, {
                publicKey: '6KblDM4q7bw82GbNR',
            })
            .then(
                () => {
                    console.log('SUCCESS! Message Sent!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <Container
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            bg="transparent"
            maxW="full"
            mt={0}
            pb="100px"
            centerContent
            overflow="hidden">
            <Flex direction={{ base: 'column', lg: 'row' }} justifyContent="space-between">
                {/* Left side: Contact information with icons */}
                <Box
                    as={motion.div}
                    variants={itemVariants}
                    bg="brand.NSBEBlack"
                    color="white"
                    borderRadius="lg"
                    borderColor="brand.NSBEYellow"
                    borderWidth="2px"
                    m={{ base: 4, md: 16, lg: 10 }}
                    p={{ base: 4, sm: 5, md: 5, lg: 16 }} // Reduced padding for base
                    flex="1"
                    mr={{ base: 0, lg: 4 }}> {/* Remove margin-right on base */}
                    <Box p={4}>
                        <Heading fontSize={{ base: 'lg', sm: 'xl' }}>Let's Get in Touch!</Heading>
                        <Text
                            mt={{ base: 2, sm: 3, md: 5 }}
                            color="gray.500"
                            whiteSpace="normal"
                            textAlign="center"
                            p={{ base: 2, sm: 4 }}
                            width={{ base: 'auto', sm: '330px' }}>
                            We’d love to hear from you! Whether you have a question, feedback, or just want to chat, fill out the form and we'll get back to you as soon as possible.
                        </Text>
                        <Box py={{ base: 4, sm: 5, md: 8, lg: 10 }}>
                            <VStack pl={0} spacing={3} alignItems="stretch" width="100%">
                                <Button
                                    size="sm" // Smaller size for base
                                    height="40px" // Reduced height for base
                                    variant="ghost"
                                    color="brand.NSBEYellow"
                                    _hover={{ border: '2px solid #fff200' }}
                                    justifyContent="flex-start"
                                    leftIcon={<MdPhone color="#fff200" size="20px" style={{ marginRight: '8px' }} />} // Reduced margin
                                    onClick={() => window.location.href = 'tel:+14036152979'}
                                >
                                    +1 (403) 615 2979
                                </Button>
                                <Button
                                    size="sm" // Smaller size for base
                                    height="40px" // Reduced height for base
                                    variant="ghost"
                                    color="brand.NSBEYellow"
                                    _hover={{ border: '2px solid #fff200' }}
                                    justifyContent="flex-start"
                                    leftIcon={<MdEmail color="#fff200" size="20px" style={{ marginRight: '8px' }} />} // Reduced margin
                                    onClick={() => window.location.href = 'mailto:nsbeuofc@gmail.com'}
                                >
                                    nsbeuofc@gmail.com
                                </Button>
                                <Button
                                    size="sm" // Smaller size for base
                                    height="40px" // Reduced height for base
                                    variant="ghost"
                                    color="brand.NSBEYellow"
                                    _hover={{ border: '2px solid #fff200' }}
                                    justifyContent="flex-start"
                                    leftIcon={<MdLocationOn color="#fff200" size="20px" style={{ marginRight: '8px' }} />} // Reduced margin
                                    onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=2500+University+Dr+NW,+Calgary,+AB', '_blank')}
                                >
                                    2500 University Dr NW
                                </Button>
                            </VStack>
                        </Box>
                        <HStack
                            mt={{ base: 6, sm: 8 }}
                            spacing={3} // Reduced spacing for base
                            px={{ base: 2, sm: 5 }}
                            alignItems="flex-start">
                            <IconButton
                                color="#fff200"
                                aria-label="twitter"
                                variant="ghost"
                                size="md" // Smaller size for base
                                isRound={true}
                                _hover={{ borderColor: '#fff200', borderWidth: '2px', color: "#fff200" }}
                                icon={<BsTwitterX size="24px" />} // Reduced size for base
                                onClick={() => window.open('https://x.com/nsbeuofc', '_blank')}
                            />
                            <IconButton
                                color="#fff200"
                                aria-label="facebook"
                                variant="ghost"
                                size="md" // Smaller size for base
                                isRound={true}
                                _hover={{ borderColor: '#fff200', borderWidth: '2px', color: "#fff200" }}
                                icon={<MdFacebook size="24px" />} // Reduced size for base
                                onClick={() => window.open('https://www.facebook.com/profile.php?id=61554684322155&mibextid=PtKPJ9', '_blank')}
                            />
                            <IconButton
                                color="#fff200"
                                aria-label="discord"
                                variant="ghost"
                                size="md" // Smaller size for base
                                isRound={true}
                                _hover={{ borderColor: '#fff200', borderWidth: '2px', color: "#fff200" }}
                                icon={<BsDiscord size="24px" />} // Reduced size for base
                                onClick={() => window.open('https://discord.gg/HyhAWtxqRG', '_blank')}
                            />
                            <IconButton
                                color="#fff200"
                                aria-label="instagram"
                                variant="ghost"
                                size="md" // Smaller size for base
                                isRound={true}
                                _hover={{ borderColor: '#fff200', borderWidth: '2px', color: "#fff200" }}
                                icon={<BsInstagram size="24px" />} // Reduced size for base
                                onClick={() => window.open('https://www.instagram.com/nsbeucalgary?igsh=dTc5NG4wZDc1NmF4', '_blank')}
                            />
                        </HStack>
                    </Box>
                </Box>

                {/* Right side: Form with image */}
                <Box
                    as={motion.div}
                    variants={itemVariants}
                    bg="brand.NSBEBlack"
                    borderRadius="lg"
                    borderColor="brand.NSBEYellow"
                    borderWidth="2px"
                    m={{ base: 4, md: 16, lg: 10 }}
                    p={{ base: 4, sm: 5, md: 5, lg: 16 }} // Reduced padding for base
                    flex="1"
                    ml={{ base: 0, lg: 4 }}> {/* Remove margin-left on base */}
                    <Box display={{ base: 'block', lg: 'flex' }} alignItems="center">
                        {/* Image and Heading/Text Box */}
                        <Box flex="1" display="flex" alignItems="center" ml={{ base: 0, lg: 8 }}>
                            {/* Image */}
                            <Image
                                src={mailing}
                                alt="Mailing"
                                objectFit="cover"
                                maxW={{ base: '100px', sm: '150px' }} // Reduced max width for base
                                mx="auto"
                                mb={{ base: 4, lg: 0 }}
                                flexShrink={0}
                            />
                            {/* Content */}
                            <Box ml={{ base: 2, sm: 4, lg: 6 }} flex="1">
                                <Heading color="white" fontSize={{ base: 'lg', sm: 'xl' }} mb={2}>Can't wait</Heading>
                                <Text
                                    color="white"
                                    whiteSpace="normal"
                                    textAlign="center"
                                    p={{ base: 2, sm: 4 }}
                                    width={{ base: 'auto', sm: '330px' }}
                                >
                                    Fill out the form below and we'll get back to you as soon as we can.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box m={{ base: 4, sm: 6, md: 8 }} color="brand.NSBEYellow"> {/* Adjusted margin for base */}
                        <form ref={form} onSubmit={sendEmail}>
                            <VStack spacing={{ base: 4, sm: 5 }}>
                                <FormControl id="name">
                                    <FormLabel fontSize={{ base: 'sm', sm: 'md' }}>Your Name</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none">
                                            <BsPerson />
                                        </InputLeftElement>
                                        <Input
                                            name="user_name"
                                            type="text"
                                            size="md"
                                            _focus={{ borderColor: 'brand.NSBEYellow', borderWidth: '2px' }}
                                            fontSize={{ base: 'sm', sm: 'md' }} // Adjust font size for base
                                            required
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="email">
                                    <FormLabel fontSize={{ base: 'sm', sm: 'md' }}>Mail</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none">
                                            <MdOutlineEmail />
                                        </InputLeftElement>
                                        <Input
                                            name="user_email"
                                            type="email"
                                            size="md"
                                            _focus={{ borderColor: 'brand.NSBEYellow', borderWidth: '2px' }}
                                            fontSize={{ base: 'sm', sm: 'md' }} // Adjust font size for base
                                            required
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="message">
                                    <FormLabel fontSize={{ base: 'sm', sm: 'md' }}>Message</FormLabel>
                                    <Textarea
                                        name="message"
                                        _focus={{ borderColor: 'brand.NSBEYellow', borderWidth: '2px' }}
                                        placeholder="Type your message here..."
                                        fontSize={{ base: 'sm', sm: 'md' }} // Adjust font size for base
                                        required
                                    />
                                </FormControl>
                                <FormControl id="submit">
                                    <Button
                                        variant="solid"
                                        bg="brand.NSBEYellow"
                                        color="brand.NSBEBlack"
                                        _hover={{ borderColor: 'brand.NSBEYellow', borderWidth: '2px', bg: "brand.NSBEBlack", color: "brand.NSBEYellow" }}
                                        type="submit"
                                        fontSize={{ base: 'sm', sm: 'md' }} // Adjust font size for base
                                    >
                                        Send Message
                                    </Button>
                                </FormControl>
                            </VStack>
                        </form>
                    </Box>
                </Box>
            </Flex>
            <MapSection/>
        </Container>
    );
}
