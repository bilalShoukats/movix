import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    const openSocialLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    {/* Add links for the menu items if necessary */}
                    <li className="menuItem" onClick={() => openSocialLink('/terms')}>Terms Of Use</li>
                    <li className="menuItem" onClick={() => openSocialLink('/privacy-policy')}>Privacy Policy</li>
                    <li className="menuItem" onClick={() => openSocialLink('/about')}>About</li>
                    <li className="menuItem" onClick={() => openSocialLink('/blog')}>Blog</li>
                    <li className="menuItem" onClick={() => openSocialLink('/faq')}>FAQ</li>
                </ul>
                <div className="infoText">
                    {/* Your infoText content */}
                </div>
                <div className="socialIcons">
                    {/* Add links to the social media profiles */}
                    <span className="icon" onClick={() => openSocialLink("https://www.facebook.com/profile.php?id=100080615082481")}>
                        <FaFacebookF />
                    </span>
                    <span className="icon" onClick={() => openSocialLink("https://www.instagram.com/bilalshoukat522/")}>
                        <FaInstagram />
                    </span>
                    <span className="icon" onClick={() => openSocialLink("https://twitter.com/BilalShouk89576")}>
                        <FaTwitter />
                    </span>
                    <span className="icon" onClick={() => openSocialLink("https://www.linkedin.com/in/bilal-shoukat-b7877723a/")}>
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
