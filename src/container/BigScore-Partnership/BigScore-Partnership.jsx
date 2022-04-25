import React, { Component } from "react";
import Beforefooterbigscore from "../../components/BeforeFooter/BeforeFooterBigScore";
import Footerbigscore from "../../components/Footer/FooterBigScore";
import Navbarbigscore from "../../components/Navbar/NavbarBigScore";
import BigscorePartnershipSection1 from "./BigScore-Partnership-Section1/BigScore-Partnership-Section1";

class BigscorePartnership extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Big Score Partnership";
    }
    render() {
        return (
            <div>
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>
                <BigscorePartnershipSection1 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default BigscorePartnership;
