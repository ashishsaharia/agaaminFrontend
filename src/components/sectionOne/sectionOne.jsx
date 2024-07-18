import secOneImage from "../../assets/agaaminImages/connectingPeople.jpg"

import SearchBar from "../searchBar/searchBar"

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
                <div className="sectionOneSearchBar">
                    <SearchBar></SearchBar>

                </div>
            </div>
            <div className="sectionOneRight sectionOneImageWrapper">
                <img className="connectionPeople" src={secOneImage} alt="image" />
            </div>
        </div>
    )
}