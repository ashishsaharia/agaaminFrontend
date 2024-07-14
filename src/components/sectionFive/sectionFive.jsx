import domains from "../../assets/agaaminImages/domains.png";

export default function SectionFive(){

    return (
        <div className="sectionFiveWrapper">
            <div className="sectionFiveLeft">
            <strong>Explore</strong>
            <h1> or </h1>
            <strong>Express</strong>
            <h1> yourself in your own language or even with emojis! Select from a wide range of domain names.</h1>
            </div>
            <div className="sectionFiveRight">
                <img className="domains" src={domains} alt="domains" />
            </div>
        </div>

    )
}