import React from 'react';
import { Box, Text, Stack, Divider } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            as="footer"
            width="100%"
            bg="black"
            color="white"
            textAlign="center"
        >
            <Divider borderColor="#fff200" width="100%" mx="auto" />
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={6} mt={4}>
                <Box width="12px" height="12px" bg="#fff200" borderRadius="50%" />
                <Text fontWeight="bold" fontSize="lg">
                    © NSBE UCalgary 2024
                </Text>
                <Box width="12px" height="12px" bg="#2eb457" borderRadius="50%" />
            </Stack>
            <Divider borderColor="#ed1c2e" width="100%" mx="auto" mt={4} />
        </Box>
    );
};

export default Footer;