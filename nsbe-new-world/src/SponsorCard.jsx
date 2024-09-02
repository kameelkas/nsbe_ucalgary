import { motion } from 'framer-motion';
import platinum from "./stone.png";
import gold from "./gold-ingot.png";
import silver from "./silver.png";
import bronze from "./bronze.png";
import './getinvolved.css';
import {Heading} from '@chakra-ui/react'

export default function SponsorCard() {

    const sponsorLevels = [
        {
            icon: platinum,
            heading: "PLATINUM",
            description: "Logo placement on our official website\nCompany logo on banners and merchandise\nUnlimited promotional efforts on social media, newsletter and our official website\n4 Representatives invited to prestigious Black Legacy Dinner",
            price: "$5000",
        },
        {
            icon: gold,
            heading: "GOLD",
            description: "Logo placement on the official website\nCompany logo on banners and merchandise\n3 promotional efforts on social media, newsletter and our official website\n3 Representatives invited to prestigious Black Legacy Dinner",
            price: "$2500",
        },
        {
            icon: silver,
            heading: "SILVER",
            description: "Logo placement on our official website\n2 promotional efforts on social media, newsletter and our official website\n2 Representatives invited to prestigious Black Legacy Dinner",
            price: "$1000",
        },
        {
            icon: bronze,
            heading: "BRONZE",
            description: "Logo placement on our official website\n1 Promotional effort on social media, newsletter and our official website\n1 representative invite to Black Legacy Dinner",
            price: "$750",
        },
    ];

    // Animation variant for the cards
    const cardVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3, // delay each card by 0.3s
                duration: 0.6,
            },
        }),
    };

    return (
        <section className="spons1 bg-gray-900 py-16">
            <div className="spons2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="spons3 text-center">
                <Heading className='spons3-1' fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, yellow.400, red.500)" bgClip="text">
                        SPONSORSHIP PACKAGES
                    </Heading>
                    <p className="mt-4 text-lg font-bold leading-6 text-white">Become a sponsor</p>
                </div>
                <div className="card-section mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sponsorLevels.map((level, index) => (
                        <motion.div
                            className="flip-card-front bg-teal-50 p-8 rounded-lg shadow-lg"
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariant}
                        >
                            <img src={level.icon} className="rockpic h-20 w-20 m-auto" alt={`${level.heading} sponsor`} />
                            <h2 className="package-head text-center font-extrabold text-black lg:text-xl">{level.heading} Package</h2>
                            <ul className="cadlist mt-4 text-left text-md text-gray-800 list-disc list-inside font-medium">
                                {level.description.split('\n').map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
                <div className="spons4 mt-12 text-center">
                    <a href="/contact" className="lastobutn inline-block px-6 py-3 border border-transparent text-base leading-6 font-bold rounded-md text-black bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">Contact Us</a>
                </div>
            </div>
        </section>
    );
}
