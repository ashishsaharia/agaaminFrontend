import { Fragment, useEffect } from "react";
import "./dohSetup.css";
import logo from "./assets/agaaminImages/logo.png";
import dohSetup from "./assets/agaaminImages/dohSetup.png";
import { Link } from "react-router-dom";

export default function DohSetup() {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');

        const handleMouseMove = (e) => {
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        };

        const handleMouseEnter = (e) => {
            if (cursor) {
                cursor.classList.add('large');
            }
        };

        const handleMouseLeave = (e) => {
            if (cursor) {
                cursor.classList.remove('large');
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        const textElements = document.querySelectorAll('body *:not(.cursor)');
        textElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            textElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <Fragment>
            <div className="doh">
                <div className="cursor"></div>
                <Link to="/agaaminFrontend">
                <div className="dohSetuplogo">
                    <img className="dohLogo" src={logo} alt="company logo" />
                </div>
                </Link>
                <div className="dohSetup">
                    <h1 className="mainHeading text-hover">
                        HNS Login
                    </h1>
                    <h3 className="text-hover">
                        Welcome to HNS Login, a secure and easy way to resolve HNS Domains
                    </h3>
                    <p className="text-hover">
                        Welcome to HNS Login, your ultimate DOH (DNS over HTTPS) server for seamless resolution of Handshake (HNS) smart domains.
                        Our state-of-the-art platform ensures secure, private, and efficient domain name resolution, leveraging the decentralized nature of the Handshake ecosystem.
                        Whether you're a developer, a tech enthusiast, or a business looking to harness the power of decentralized internet,
                        HNS Login provides a robust solution for accessing HNS smart domains with ease and confidence.
                        Explore a new era of internet freedom and security with HNS Login.
                    </p>
                    <h1 className="text-hover">DOH</h1>
                    <p className="text-hover">
                        A DNS over HTTPS (DoH) server is a specialized server that enables the resolution of domain names to IP addresses via the HTTPS protocol.
                        By using encryption and transmitting DNS queries over secure HTTPS connections, DoH servers enhance privacy, security, and integrity in the domain resolution process.
                    </p>
                    <div className="dohSettingSteps">
                        <h2 className="text-hover">Steps:</h2>
                        <ol>
                            <li>Open Browser Settings</li>
                            <li>Look for a section related to "Privacy and Security", "Advanced Settings"</li>
                            <li>Find an option to enable DoH. It might be labeled as "Use secure DNS" or "DNS over HTTPS." Toggle this option to enable DoH</li>
                            <li>Use custom DOH Provider and enter <a className="dohSetupAnchor" target="_blank" href="https://hnslogin.world">https://hnslogin.world</a>.</li>
                            <li>Now you can browse Handshake smart domains.</li>
                        </ol>
                    </div>
                    <div className="dohSetupImage">
                        <img src={dohSetup} alt="steps" />
                    </div>
                    <Link to='/agaaminFrontend/'>
                        <div className="dohHomeButton">
                            <button className="dohHomeButtonButton">Home Page</button>
                        </div>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}
