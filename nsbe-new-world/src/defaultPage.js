import { Box, Button, Heading, Text, Flex } from '@chakra-ui/react';
import { MdError } from 'react-icons/md';

const NotFound = () => {
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            minHeight="80vh"
            textAlign="center"
            bg="brand.NSBEBlack"
            color="brand.NSBERed"
            p={{ base: 4, sm: 8 }}
        >
            <Box mb={6} display="flex" flexDirection="column" alignItems="center">
                <MdError size="48px" color="brand.NSBERed" />
                <Heading fontSize={{ base: '2xl', sm: '3xl' }} mb={4}>
                    This Page Does Not Exist
                </Heading>
                <Text fontSize={{ base: 'md', sm: 'lg' }}>
                    Sorry, but the page you are looking for has not been found.
                </Text>
            </Box>
            <Button
                onClick={() => window.location.href = '/'}
                variant="solid"
                bg="brand.NSBEYellow"
                color="brand.NSBEBlack"
                _hover={{ bg: "brand.NSBEBlack", color: "brand.NSBEYellow", borderColor: "brand.NSBEYellow", borderWidth:"2px"}}
                fontSize={{ base: 'md', sm: 'lg' }}
                mt={4}
            >
                Return Home
            </Button>
        </Flex>
    );
};

export default NotFound;
