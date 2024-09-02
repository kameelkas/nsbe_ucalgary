
import video1 from './Untitled_design.mp4';
import React, { useRef, useEffect, useState } from 'react';

import './about.css';

function About() {
    const scrollRef = useRef(null);
    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    };
    
   

    const videoRef = useRef(null);
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        const handleIntersection = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !hasPlayed) {
                videoRef.current.play();
                setHasPlayed(true);
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5, // Trigger when 50% of the slideshow div is visible
        });

        const slideshowDiv = document.querySelector('.slideshow');
        if (slideshowDiv) {
            observer.observe(slideshowDiv);
        }

        return () => {
            if (slideshowDiv) {
                observer.unobserve(slideshowDiv);
            }
        };
    }, [hasPlayed]);



    return (
        <section className="section1 mb-24 text-black" id='about'>
                <h2 className="page-header ">ABOUT US</h2>
            <div className="about-container flex flex-col w-full mx-auto h-5/6">
                <div className="history-header items-center">
                    <div className="hist2">
                    
                    <h2 className="offer-head ">Our Mission</h2>
                    
                    <p className="about-info text-left text-lg mt-8 w-4/5 mx-auto pt-4 items-center">
                    NSBE is a non-profit organization that promotes and supports the professional development of collegiate. NSBE UCalgary, founded in 2023, we're dedicated to empowering and inspiring Black students and professionals in Science, Technology, Engineering, and Mathematics (STEM). As a proud chapter of the National Society of Black Engineers (NSBE), we're committed to our mission of increasing the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact their communities. Whether you're a student aspiring to pursue a career in STEM, a seasoned professional looking to advance in your field, or an ally committed to promoting diversity and inclusion, NSBE UCalgary welcomes you with open arms.
                    </p>
                
                    </div>
                   
                </div>
                <div className="offer-container items-center flex flex-col w-full h-120 md:flex-col mt-4 mx-auto">
                    <div className="statistics items-center w-full mb-10 flex flex-row justify-around">
                        <div className="chapters flex flex-col items-center">
                            <p className="first text-6xl">515</p>
                            <p className="first-1 text-lg">Active Chapters</p>
                        </div>
                        <div className="members flex flex-col items-center ml-10">
                            <p className="first text-6xl">24,000</p>
                            <p className="first-1 text-lg">Active Members</p>
                        </div>
                        <div className="countries flex flex-col items-center">
                            <p className="first text-6xl">20</p>
                            <p className="first-1 text-lg">Countries Across the World</p>
                        </div>
                    </div>
                    <div className="midsec">

                        <div className="slideshow overflow-x-auto whitespace-nowrap" ref={scrollRef}>
                        <video ref={videoRef} src={video1} width="100%" height="100%" muted></video>
                        </div>

                       
                    </div>
                    
                    <div className='mid_help'>
                    <h2 className="offer-head md:basis-1/2 mt-8 dark:text-white font-extrabold text-3xl my-auto mx-auto">WHAT DO WE OFFER?</h2>
                    <div className="list-outside flex flex-col list-none text-lg dark:text-white justify-space-between w-full text-left items-center tracking-tight md:mt-6 md:ml-4">
                        <div className = 'grid1 flex flex-row'>
                        <div className='supacell'>
                        <p className='perc-head'><b>Professional Development Workshops</b></p>
                        <p className="percs">Our workshops provide essential skills for career success, including resume building, interview techniques, and leadership. These sessions are designed to enhance your career readiness and give you a competitive edge in the job market.</p>
                        </div>

                        <div className='supacell'>
                        <p className='perc-head'><b>Academic Support</b></p>
                        <p className="percs">We offer academic support through tutoring, study nights, and resource sharing from alumni and previous students to help members excel in their classes  and achieve their academic goals.</p>
                        </div>

                        <div className='supacell'>      
                        <p className='perc-head'><b>Mentorship Programs</b></p>
                        <p className="percs">Our mentorship programs connects students with experienced professionals and peers who provide guidance, career advice, and support. This aims to foster a sense of community and help members navigate their educational and career paths successfully.</p>
                        </div>

                      

                        </div>
                        <div className = 'grid2 flex flex-row'>
                        <div className='supacell'>
                        <p className='perc-head'><b>Social Events and Conferences</b></p>
                        <p className="percs">Our chapter hosts various social events and attends the annual NSBE conferences to foster a strong community spirit. These gatherings provide opportunities for networking, building friendships, and engaging with peers and professionals in a relaxed setting.</p>
                        </div>

                        <div className='supacell'>
                        <p className='perc-head'><b>High School Outreach</b></p>
                        <p className="percs">Our Pre-College Initiative(PCI)  collaborates with groups such as Brain Stem Alliance and While She is True with the opportunities for students to mentor and teach high school students engineering principles. </p>
                        </div>

                        <div className='supacell'>
                        <p className='perc-head'><b>Leadership Opportunities and Community</b></p>
                        <p className="percs">NSBE UCalgary offer valuable leadership opportunities for members to take on active roles in organizing events, leading projects, and shaping the direction of the chapter. Our club also provides a community that supports and builds black students</p>
                        </div>

                        </div>
                    </div>
                    </div>
                    <p className="joinus mt-20 text-center dark:text-white text-lg tracking-tight">
                        Join us as we strive for excellence, innovation, and impact in STEM! Connect with us today to learn more about how you can get involved and make a difference.
                    </p>
                    <div className="endstuff mx-auto text-center mt-4">
                        <button type="button" className="get-involved transition hover:-translate-y-1 hover:scale-80 ease-in-out delay-100 text-white bg-whitefont-extrabold text-xl tracking-wider hover:shadow-xl hover:bg-amber-500 font-medium px-6 py-4 text-center dark:bg-teal-700 dark:hover:bg-teal-900">
                            <a href="#get-involved" rel="noreferrer">GET INVOLVED</a>
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default About;


