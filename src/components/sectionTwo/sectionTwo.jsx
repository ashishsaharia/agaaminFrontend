import logoOne from "../../assets/agaaminImages/sectionTwoLogoOne.png"
import logoTwo from "../../assets/agaaminImages/sectionTwoLogoTwo.png"
import logoThree from "../../assets/agaaminImages/sectionTwoLogoThree.png"



export default function SectionTwo(){
    return(
        <div className="sectionTwoWrapper">
            <div className="sectionTwoCenter">
                <h1>
                Unlock the Potential of Your Smartname: Your Unified Hub for the Digital World
                </h1>
                <h3>
                Effortlessly manage all your online accounts with a single, secure smartname.Unify your digital footprint and streamline your online experience.
                </h3>
                <div className="sectionTwoLogos">
                    <div className="logoOneWrapper">
                    <img className="logoOne" src={logoOne} alt="logoOne" />
                    </div>
                    <div className="logoTwoWrapper">
                    <img className="logoTwo" src={logoTwo} alt="logoTwo" />
                    </div>
                    <div className="logoThreeWrapper">
                    <img className="logoThree" src={logoThree} alt="logoThree" />
                    </div>
                </div>
            </div>
        </div>
    )
}