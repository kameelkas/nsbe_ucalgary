import { useSpring, animated } from "react-spring";
import { useState } from "react";
import InfoCard from "./InfoCard";
import SponsorCard from "./SponsorCard";
import './getinvolved.css';

function Volunteer() {

    const springs = useSpring({
        from: { x: -500 },
        to: { x: 0 },
    });
    const [open, setOpen] = useState(false);

    const toggleFact = () => {
        setOpen(open ? false : true);
    }

    return (
        <div className="getInvolvedContainer h-full content-center justify-items-center bg-white">
            <h2 className="page-header slide-in-right">Get Involved</h2>
            <InfoCard />
            <SponsorCard />
        </div>

    );
}

export default Volunteer;

//Sponsorship

{/* <div className= "mainWrapper h-screen ">
                <div className="mainContainer  sm:h-96 md: lg:h-4/5 w-full flex justify between grid grid-cols-3 gap-4" id="sideImage" style={style}>
                    <div className="mainCard items-center justify-center p-10 mx-auto my-auto w-3/4 col-start-1 col-end-3" >
                        <animated.div className="mainCardHeader z-50" style = {{...springs}}>
                        <h2 className="page-header slide-in-right">Get Involved</h2>
                        </animated.div>
                    </div>

                </div>

                <div className="factbtn mx-auto w-2/4 text-center">
                    <button className="bg-orange-300 hover:font-extrabold text-center text-black w-1/4 font-extrabold py-2 px-4 hover:border-transparent" onClick={toggleFact}>
                        Did you know
                    </button>
                </div>
                
                {open &&(
                    <div className="factCard p-10 bg-slate-300 mx-auto w-1/4">
                        <h2 className="factHeader text-center">
                            Fun Fact
                        </h2>
                        <p className="factInfo text-center">
                            NSBE was founded in 1738
                        </p>
                    </div>
                )}
                <div className="separator h- bg-slate-600 w-3/4 m-auto mt-10 rounded-full "></div>
            </div> */}