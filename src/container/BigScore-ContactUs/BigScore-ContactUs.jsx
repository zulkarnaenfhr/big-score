import React, { Component } from "react";
import Beforefooterbigscore from "../../components/BeforeFooter/BeforeFooterBigScore";
import Footerbigscore from "../../components/Footer/FooterBigScore";
import Navbarbigscore from "../../components/Navbar/NavbarBigScore";
import BigscoreContactusSection1 from "./BigScore-ContactUs-Section1/BigScore-ContactUs-Section1";
import "./BigScore-ContactUs.css";

class BigscoreContactus extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Contact Big Score";
    }

    render() {
        return (
            <div>
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>{" "}
                <BigscoreContactusSection1 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default BigscoreContactus;
