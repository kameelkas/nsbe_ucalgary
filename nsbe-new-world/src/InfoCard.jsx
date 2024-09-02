import volunteer from "./images/volunteer.png";
import mailing from "./images/mailing.png";
import mentorship from "./images/mentorship.png";
import member from "./images/partners.png";
import './getinvolved.css';


export default function InfoCard() {

    const infoData = [
        {
            icon: member,
            header: "Become a Member",
            description: "Want to become a member? Click the link below and fill out our membership form/registration form to get exclusive benefits and more opportunities",
            buttonDesc: "Join Us",
        },
        {
            icon: mentorship,
            header: "Join Our Mentorship Program",
            description: "Unlock your potential and achieve your goals with our mentorship program! Whether you're a first-year student seeking guidance, or someone eager to learn new skills, our program pairs you with experienced mentors who are ready to share their knowledge and expertise.",
            buttonDesc: "Explore",
        }
    ];

    const infoData2 = [
        {
            icon: volunteer,
            header: "Volunteer",
            description: "Showcase your leadership skills by volunteering and engaging in community outreach events",
            buttonDesc: "Volunteer with Us!",
        },
        {
            icon: mailing,
            header: "Join our Mailing List",
            description: "Fill out the form on this link to stay updated on club activities and opportunities.",
            buttonDesc: "Subscribe Now",
        }]


    return (

        <section className=" full_info bg-white">
            <div className="join-us text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 gap-4 transition hover:-translate-y-1 hover:scale-80 ease-in-out delay-100 w-3/4 mx-auto">
                <div className='card_help1'>{infoData.map((dataItem) => (

                    <div className='full_card1'>
                        <div className="">
                            <img src={dataItem.icon} className="infoicons1 h-20 w-20 m-auto" alt="dataitem icon" />
                        </div>
                        <h1 className="inv-header text-2xl font-extrabold text-black">{dataItem.header}</h1>
                        <p className="inv-info tracking-tight font-semibold text-lg text-center text-gray-900 my-4 px-4 dark:text-white">
                            {dataItem.description}
                        </p>
                        <button type="custom-button" className="tobons transition hover:-translate-y-1 hover:scale-80 ease-in-out delay-100 text-white bg-violet-900 font-extrabold text-xl tracking-wider hover:shadow-xl hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium px-3 py-2 text-center dark:bg-teal-700 dark:hover:bg-teal-900 dark:focus:ring-blue-800"><a href='https://docs.google.com/forms/d/e/1FAIpQLSfplx30HQHxu1OfNIjlSgTWFdMEh1KOWg6SuE553nPf1osPXA/viewform' target="_blank" rel="noreferrer">{dataItem.buttonDesc}</a></button>
                    </div>

                ))}</div>
                <div className='card_help2'>
                    {infoData2.map((dataItem) => (

                        <div className='full_card1'>
                            <div className="">
                                <img src={dataItem.icon} className="infoicons1 h-20 w-20 m-auto" alt="dataitem icon" />
                            </div>
                            <h1 className="inv-header text-2xl font-extrabold text-black">{dataItem.header}</h1>
                            <p className="inv-info tracking-tight font-semibold text-lg text-center text-gray-900 my-4 px-4 dark:text-white">
                                {dataItem.description}
                            </p>
                            <button type="custom-button" className="tobons transition hover:-translate-y-1 hover:scale-80 ease-in-out delay-100 text-white bg-violet-900 font-extrabold text-xl tracking-wider hover:shadow-xl hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium px-3 py-2 text-center dark:bg-teal-700 dark:hover:bg-teal-900 dark:focus:ring-blue-800"><a href='https://docs.google.com/forms/d/e/1FAIpQLSfplx30HQHxu1OfNIjlSgTWFdMEh1KOWg6SuE553nPf1osPXA/viewform' target="_blank" rel="noreferrer">{dataItem.buttonDesc}</a></button>
                        </div>


                    ))}</div>
            </div>
        </section>

    );


}