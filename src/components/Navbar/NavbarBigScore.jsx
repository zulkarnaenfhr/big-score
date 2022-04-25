import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarBigScore.css";

class Navbarbigscore extends Component {
    render() {
        return (
            <nav id="NavbarBigScore" className="navbar navbar-expand-lg navbar-light" data-aos="fade-in" data-aos-offset="100" data-aos-delay="0">
                <div className="container-fluid">
                    <Link
                        className="BigScoreNavbarLogo-container"
                        to={{
                            pathname: `/big-score`,
                        }}
                    >
                        <img className="BigScoreNavbarLogo" src={require("../../src/Big-Score/Big-Score-Logo.png")} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav BigScoreNavbarMenu-container">
                            <li className="nav-item BigScoreNavbarMenuAboutUs">
                                <Link
                                    className={"BigScoreNavbarMenu"}
                                    to={{
                                        pathname: `/big-score/aboutus`,
                                    }}
                                >
                                    <p>About Us</p>
                                </Link>
                            </li>
                            <li className="nav-item BigScoreNavbarMenuPartnership">
                                <Link
                                    className={"BigScoreNavbarMenu"}
                                    to={{
                                        pathname: `/big-score/partnership`,
                                    }}
                                >
                                    <p>Partnership</p>
                                </Link>
                            </li>
                            <li className="nav-item dropdown BigScoreMenuDropdown BigScoreMenuResources">
                                <a className={"dropdown-toggle BigScoreNavbarMenu"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu BigScoreNavbarDropdownResources-container" aria-labelledby="navbarDropdown">
                                    <div>
                                        <div className="BigScoreDropdown-menu-Resources-Container">
                                            <Link
                                                className="BigScoreDropdown-menu-Resources"
                                                to={{
                                                    pathname: `/big-score/documentation`,
                                                }}
                                            >
                                                <p>Documentation</p>
                                            </Link>
                                        </div>
                                        <div className="BigScoreDropdown-Menu-Resources-row2 BigScoreDropdown-menu-Resources-Container">
                                            <Link
                                                className="BigScoreDropdown-menu-Resources"
                                                to={{
                                                    pathname: `/big-score/FAQ`,
                                                }}
                                            >
                                                <p>FAQ</p>
                                            </Link>
                                        </div>
                                        <div className="BigScoreDropdown-Menu-Resources-row2 BigScoreDropdown-menu-Resources-Container">
                                            <Link
                                                className="BigScoreDropdown-menu-Resources"
                                                to={{
                                                    pathname: `/big-score/support`,
                                                }}
                                            >
                                                <p>Support</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item dropdown BigScoreMenuDropdown BigScoreMenuCompany">
                                <a className={"dropdown-toggle BigScoreNavbarMenu"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu BigScoreNavbarDropdownCompany-container" aria-labelledby="navbarDropdown">
                                    <div>
                                        <div className="BigScoreDropdown-menu-Company-Container">
                                            <Link
                                                className="BigScoreDropdown-menu-Company"
                                                to={{
                                                    pathname: `/big-score/aboutcompany`,
                                                }}
                                            >
                                                <p>About Company</p>
                                            </Link>
                                        </div>
                                        <div className="BigScoreDropdown-Menu-Company-row2 BigScoreDropdown-menu-Company-Container">
                                            <Link
                                                className="BigScoreDropdown-menu-Company"
                                                to={{
                                                    pathname: `/big-score/blog`,
                                                }}
                                            >
                                                <p>Blog</p>
                                            </Link>
                                        </div>
                                        <div className="BigScoreDropdown-Menu-Company-row2 BigScoreDropdown-menu-Company-Container">
                                            <Link
                                                className="BigScoreDropdown-menu-Company"
                                                to={{
                                                    pathname: `/big-score/press`,
                                                }}
                                            >
                                                <p>Press</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <div className="BigScoreButton-Container">
                                <Link
                                    className="BigScoreButtonContactUs-container"
                                    to={{
                                        pathname: `/big-score/contactus`,
                                    }}
                                >
                                    <button className="BigScoreButtonNavbar BigScoreButtonContactUs">CONTACT US</button>
                                </Link>
                                <Link
                                    className="BigScoreButtonFreeTrial-container"
                                    to={{
                                        pathname: `/big-score/login`,
                                    }}
                                >
                                    <button className="BigScoreButtonNavbar BigScoreButtonFreeTrial">FREE TRIAL</button>
                                </Link>
                                <Link
                                    className="BigScoreButtonDemoApps-container"
                                    to={{
                                        pathname: `/big-score/login`,
                                    }}
                                >
                                    <button className="BigScoreButtonNavbar BigScoreButtonDemoApps">DEMO APPS</button>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbarbigscore;
