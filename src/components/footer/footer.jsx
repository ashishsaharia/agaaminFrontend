import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

import NavFooterButton from "../buttons/nav-footerButton.jsx"

export default function Footer(){
    return (
        <div className="footerWrapper">
            <div className="footerTop">
                <div className="footerTopLeft">
                    <div className="footerTopInfo">
                        <h3>Agaamin</h3>
                        <h4>Address: </h4>
                        <h4>Contact:</h4>
                        <h4>00000000</h4>
                        <h4>support@agaamin.in</h4>
                    </div>
                    <div className="footerTopIcons">
                        <FaFacebookSquare className="icons"></FaFacebookSquare>
                        <AiFillInstagram className="icons"></AiFillInstagram>
                        <FaXTwitter className="icons"></FaXTwitter>
                        <FaLinkedin className="icons"></FaLinkedin>
                        <FiYoutube className="icons"></FiYoutube>
                    </div>
                </div>
                <div className="footerTopRight">
                    <div className="footerTopRightOne">
                        <NavFooterButton namePlaceholder={"Features"}></NavFooterButton>
                        <NavFooterButton namePlaceholder={"Pricing"}></NavFooterButton>
                        <NavFooterButton namePlaceholder={"Support"}></NavFooterButton>
                        <NavFooterButton namePlaceholder={"Blog"}></NavFooterButton>
                    </div>
                    <div className="footerTopRightTwo">
                        <NavFooterButton namePlaceholder={"Careers"}></NavFooterButton>
                        <NavFooterButton namePlaceholder={"Events"}></NavFooterButton>
                        <NavFooterButton namePlaceholder={"Developers"}></NavFooterButton>
                        <NavFooterButton namePlaceholder={"Terms"}></NavFooterButton>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <div className="copyrights">
                <AiOutlineCopyrightCircle className="copyrightIcon"></AiOutlineCopyrightCircle>
                <h4 className="copyrightsText">
                    ConnectedHub. All rights reserved.
                </h4>
                </div>
                <div className="footerBottomRight">
                    <NavFooterButton namePlaceholder={"About Us"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"Contact Us"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"Privacy Policy"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"Cookie Policy"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"Return Policy"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"Terms of Services"}></NavFooterButton>
                </div>
            </div>

        </div>
    )
}