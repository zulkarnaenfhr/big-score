import React, { Component } from "react";
import Beforefooterbigscore from "../../components/BeforeFooter/BeforeFooterBigScore";
import Footerbigscore from "../../components/Footer/FooterBigScore";
import Navbarbigscore from "../../components/Navbar/NavbarBigScore";
import BigscoreAboutcompanySection1 from "./BigScore-AboutCompany-Section1/BigScore-AboutCompany-Section1";
import "./BigScore-AboutCompany.css";

class BigscoreAboutcompany extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Big Score About Company";
    }
    render() {
        return (
            <div>
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>{" "}
                <BigscoreAboutcompanySection1 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default BigscoreAboutcompany;
