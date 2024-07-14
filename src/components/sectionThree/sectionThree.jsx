import services from "../../assets/agaaminImages/services.png"

export default function SectionThree(){
    return(
        <div className="sectionThreeWrapper">
            <div className="sectionThreeLeft">
                <h1>Our Vision</h1>
                <h2>Connecting people through seamless social interactions and shared experiences </h2>
            </div>
            <div className="sectionThreeRight">
                <img className="services" src={services} alt="services" />
            </div>
        </div>
    )
}