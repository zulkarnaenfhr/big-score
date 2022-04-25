import React, { Component } from "react";
import Beforefooterbigscore from "../../components/BeforeFooter/BeforeFooterBigScore";
import Footerbigscore from "../../components/Footer/FooterBigScore";
import Navbarbigscore from "../../components/Navbar/NavbarBigScore";
import BigscoreFaqSection1 from "./BigScore-FAQ-Section1/BigScore-FAQ-Section1";
import "./BigScore-FAQ.css";

class BigscoreFaq extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Big Score FAQ";
    }
    render() {
        return (
            <div>
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>{" "}
                <BigscoreFaqSection1 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default BigscoreFaq;
