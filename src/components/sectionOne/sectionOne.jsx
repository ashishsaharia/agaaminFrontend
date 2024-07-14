import secOneImage from "../../assets/agaaminImages/connectingPeople.jpg"

export default function SectionOne(){
    return(
        <div className="sectionOneWrapper">
            <div className="sectionOneLeft">
                <h1 className="sectionOneMainLogo">
                Discover Your Unique Identity Today:
                </h1>

                <h3>
                Unleash the potential of a SmartName: your unified digital identity that brings together every facet of your online presence. 
                </h3>
                <h3 className="claimSmartName">
                Claim Your Smartname Today
                </h3>
            {/* thsi is the place for the input box */}
            </div>
            <div className="sectionOneRight sectionOneImageWrapper">
                <img className="connectionPeople" src={secOneImage} alt="image" />
            </div>
        </div>
    )
}