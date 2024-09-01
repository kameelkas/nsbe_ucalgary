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
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsInstagram, BsDiscord, BsPerson, BsTwitterX } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

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
        <Container bg="transparent" maxW="full" mt={0} pb="100px" centerContent overflow="hidden">
            <Flex direction={{ base: 'column' }}>
                <Box
                    bg="brand.NSBEBlack"
                    color="white"
                    borderRadius="lg"
                    borderColor="brand.NSBEYellow"
                    borderWidth="2px"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Let's Get in Touch!</Heading>
                                    <Text
                                        mt={{ sm: 3, md: 3, lg: 5 }}
                                        color="gray.500"
                                        whiteSpace="normal"
                                        textAlign="center"
                                        p={{ sm: 4, md: 6 }}
                                        width="330px">
                                        We’d love to hear from you! Whether you have a question, feedback, or just want to chat, fill out the form and we'll get back to you as soon as possible.
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={4} alignItems="stretch" width="100%">
                                            <Button
                                                size="md"
                                                height="48px"
                                                variant="ghost"
                                                color="brand.NSBEYellow"
                                                _hover={{ border: '2px solid #fff200' }}
                                                justifyContent="flex-start"
                                                leftIcon={<MdPhone color="#fff200" size="20px" style={{ marginRight: '16px' }} />}
                                                onClick={() => window.location.href = 'tel:+14036152979'}
                                            >
                                                +1 (403) 615 2979
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                variant="ghost"
                                                color="brand.NSBEYellow"
                                                _hover={{ border: '2px solid #fff200' }}
                                                justifyContent="flex-start"
                                                leftIcon={<MdEmail color="#fff200" size="20px" style={{ marginRight: '16px' }} />}
                                                onClick={() => window.location.href = 'mailto:nsbeuofc@gmail.com'}
                                            >
                                                nsbeuofc@gmail.com
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                variant="ghost"
                                                color="brand.NSBEYellow"
                                                _hover={{ border: '2px solid #fff200' }}
                                                justifyContent="flex-start"
                                                leftIcon={<MdLocationOn color="#fff200" size="20px" style={{ marginRight: '16px' }} />}
                                                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=2500+University+Dr+NW,+Calgary,+AB', '_blank')}
                                            >
                                                2500 University Dr NW
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                        <IconButton
                                            color="#fff200"
                                            aria-label="twitter"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ borderColor: '#fff200', borderWidth: '2px', color: "#fff200" }}
                                            icon={<BsTwitterX size="28px" />}
                                            onClick={() => window.open('https://x.com/nsbeuofc', '_blank')}
                                        />
                                        <IconButton
                                            color="#fff200"
                                            aria-label="facebook"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ borderColor: '#fff200', borderWidth: '2px', color: "#fff200" }}
                                            icon={<MdFacebook size="28px" />}
                                            onClick={() => window.open('https://www.facebook.com/profile.php?id=61554684322155&mibextid=PtKPJ9', '_blank')}
                                        />
                                        <IconButton
                                            color="#fff200"
                                            aria-label="discord"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ borderColor: '#fff200', borderWidth: '2px', color: "#fff200" }}
                                            icon={<BsDiscord size="28px" />}
                                            onClick={() => window.open('https://discord.gg/HyhAWtxqRG', '_blank')}
                                        />
                                        <IconButton
                                            color="#fff200"
                                            aria-label="instagram"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ borderColor: '#fff200', borderWidth: '2px', color: "#fff200" }}
                                            icon={<BsInstagram size="28px" />}
                                            onClick={() => window.open('https://www.instagram.com/nsbeucalgary?igsh=dTc5NG4wZDc1NmF4', '_blank')}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="brand.NSBEBlack" borderRadius="lg">
                                    <Box m={8} color="brand.NSBEYellow">
                                        <form ref={form} onSubmit={sendEmail}>
                                            <VStack spacing={5}>
                                                <FormControl id="name">
                                                    <FormLabel>Your Name</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement pointerEvents="none">
                                                            <BsPerson />
                                                        </InputLeftElement>
                                                        <Input name="user_name" type="text" size="md" _focus={{ borderColor: 'brand.NSBEYellow', borderWidth: '2px' }} />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="email">
                                                    <FormLabel>Mail</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement pointerEvents="none">
                                                            <MdOutlineEmail />
                                                        </InputLeftElement>
                                                        <Input name="user_email" type="email" size="md" _focus={{ borderColor: 'brand.NSBEYellow', borderWidth: '2px' }} />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="message">
                                                    <FormLabel>Message</FormLabel>
                                                    <Textarea
                                                        name="message"
                                                        borderColor="gray.300"
                                                        _hover={{ borderColor: 'gray.300' }}
                                                        placeholder="Your message"
                                                        _focus={{ borderColor: 'brand.NSBEYellow', borderWidth: '2px' }}
                                                    />
                                                </FormControl>
                                                <FormControl float="right">
                                                    <Button type="submit" variant="solid" bg="brand.NSBEYellow" color="brand.NSBEBlack" _hover={{ bg: "brand.NSBEBlack", color: 'brand.NSBEYellow', borderColor: 'brand.NSBEYellow', borderWidth: '2px' }}>
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </form>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
                <Box maxW="full" borderRadius="lg" borderWidth="2px" borderColor="brand.NSBEYellow"
                    mx="4%" p="4px">
                    <AspectRatio ratio={16 / 9} borderRadius="lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.691360311798!2d-114.13661132310274!3d51.07724727171859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f08bd387ffb%3A0xe84c4ebada9b8813!2s2500%20University%20Dr%20NW%2C%20Calgary%2C%20AB%20T2N%201N4!5e0!3m2!1sen!2sca!4v1725139078545!5m2!1sen!2sca"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </AspectRatio>
                </Box>
            </Flex>
        </Container>
    );
}
