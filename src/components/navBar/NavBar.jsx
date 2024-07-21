import JoinNow from "../buttons/joinNowButton";
import NavFooterButton from '../buttons/nav-footerButton'
import Logo from '../logo/logo.jsx';
import Hamburger from '../hamburger/hamburger.jsx';
export default function Navbar(){
    return (
        <div className="navbarWrapper">
        
            <div className="navLogoWrapper">
                <Logo></Logo>
            </div>

            <div className="navButtonWrapper">
                <div className="navRouterButtonWrapper">
                    <NavFooterButton namePlaceholder={"Home"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"About"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"Contact"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"Sign Up"}></NavFooterButton>
                </div>
                <div className="hamburgerWrapper">
                    
                </div>
                    <JoinNow></JoinNow>
            </div>
        </div>
    )
}