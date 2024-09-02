import React from 'react';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link,
    useDisclosure,
    Collapse,
    VStack,
    Image,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NSBELogo from './images/NSBELogo.png';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box bg="black" px={4} position="sticky">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Image src={NSBELogo} alt="Logo" boxSize="50px" />

                <HStack
                    as={'nav'}
                    spacing={14}
                    textAlign={'center'}
                    display={{ base: 'none', md: 'flex' }}
                    justifyContent="center"
                    w="full" // Center the items
                    bg="transparent"
                >
                    {['Home', 'About', 'Our Team', 'Events', 'Get Involved', 'Contact Us'].map((item, index) => (
                        <Link
                            key={index}
                            href={`/${item.replace(/\s+/g, '-').toLowerCase()}`} // Convert text to lower-case and replace spaces with dashes for URL
                            color="white"
                            px={3}
                            py={1}
                            rounded="md"
                            _hover={{ bg: 'white', color: 'black' }} // Change color on hover
                            _focus={{ bg: 'white', color: 'black' }} // Change color on focus
                        >
                            {item}
                        </Link>
                    ))}
                </HStack>

                <IconButton
                    size={'md'}
                    icon={<HamburgerIcon />}
                    aria-label={'Open Menu'}
                    bg="transparent"
                    color="white"
                    _hover={{ bg: 'gray.700' }} // Change background color on hover
                    onClick={onToggle}
                    display={{ md: 'none' }}
                />
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <VStack
                    bg="black"
                    spacing={4}
                    py={4}
                    display={{ base: 'flex', md: 'none' }}
                    align="stretch"
                    w="full"
                >
                    {['Home', 'About', 'Our Team', 'Events', 'Get Involved', 'Contact Us'].map((item, index) => (
                        <Link
                            key={index}
                            href={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
                            color="white"
                            px={3}
                            py={1}
                            rounded="md"
                            _hover={{ bg: 'white', color: 'black' }} // Change color on hover
                            _focus={{ bg: 'white', color: 'black' }} // Change color on focus
                        >
                            {item}
                        </Link>
                    ))}
                </VStack>
            </Collapse>
        </Box>
    );
};

export default Navbar;