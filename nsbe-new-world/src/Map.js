import { useRef } from 'react';
import { Box, Heading, AspectRatio } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

const MapSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    const mapVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 },
        },
    };

    return (
        <Box ref={ref} as={motion.div} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={mapVariants} m={{ base: 5, sm: 10, md: 20, lg: 30 }} p={4} width="100%">
            <Heading as="h2" size="lg" textAlign="center" color="white" textDecoration="underline">
                You Can Find Us Here
            </Heading>
            <Box mt={5} borderColor="brand.NSBEYellow" borderWidth="2px" rounded="lg">
                <AspectRatio ratio={16 / 9} m="1.5%" rounded="sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.7835558466495!2d-114.13232932310294!3d51.07554547171831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f08488ad5a7%3A0x98ebb5d9af098f8d!2sArt%20Building%2C%202500%20University%20Dr%20NW%2C%20Calgary%2C%20AB%20T2N%201N4!5e0!3m2!1sen!2sca!4v1724579634174!5m2!1sen!2sca"
                        loading="lazy"
                        className="w-full h-full"
                    ></iframe>
                </AspectRatio>
            </Box>
        </Box>
    );
};

export default MapSection;
