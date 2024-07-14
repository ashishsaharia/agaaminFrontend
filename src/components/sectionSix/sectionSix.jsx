import VideoCarousel from "../videoCarousel/videoCarousel";

export default function SectionSix(){
    return (
        <div className="sectionSixWrapper">
            <div className="sectionSixTop">
                <h1>Connect with Us!!</h1>
                <h1>Empower Your Online Identity</h1>
                <h3>Smartnames: Redefine Your Digital Presence. A smartname is your personalized gateway to the online world, consolidating your social media, professional profiles, and more into a single</h3>
            </div>
            <div className="sectionSixMiddle"> 
                <h3>Your unique online identity now available in 6 languages</h3>
                <ul className="sectionSixMiddleList">
                    <li>English</li>
                    <li>Hindi</li>
                    <li>Sanskrit</li>
                    <li>Marathi</li>
                    <li>Malayalam</li>
                    <li>Bengali</li>
                </ul>
                <h3>Other languages will follow soon</h3>

            </div>
            <div className="sectionSixBottom">
                <h2>Learn more about Smart Names...</h2>
                <div className="sectionSixBottomVideoCarousel">
                    <VideoCarousel></VideoCarousel>
                </div>

            </div>
        </div>
    )
}