import React, { Component } from "react";
import Beforefooterbigscore from "../../components/BeforeFooter/BeforeFooterBigScore";
import Footerbigscore from "../../components/Footer/FooterBigScore";
import Navbarbigscore from "../../components/Navbar/NavbarBigScore";
import BigscoreSupportSection1 from "./BigScore-Support-Section1/BigScore-Support-Section1";
import "./BigScore-Support.css";

class BigscoreSupport extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Big Score Support";
    }
    render() {
        return (
            <div>
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>{" "}
                <BigscoreSupportSection1 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default BigscoreSupport;
