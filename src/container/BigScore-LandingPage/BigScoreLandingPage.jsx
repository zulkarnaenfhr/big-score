import React, { Component } from "react";
import Beforefooterbigscore from "../../components/BeforeFooter/BeforeFooterBigScore";
import Footerbigscore from "../../components/Footer/FooterBigScore";
import Navbarbigscore from "../../components/Navbar/NavbarBigScore";
import BigscoreLandingpageSection1 from "./BigScore-LandingPage-Section1/BigScore-LandingPage-Section1";
import BigscoreLandingpageSection10 from "./BigScore-LandingPage-Section10/BigScore-LandingPage-Section10";
import BigscoreLandingpageSection2 from "./BigScore-LandingPage-Section2/BigScore-LandingPage-Section2";
import BigscoreLandingpageSection3 from "./BigScore-LandingPage-Section3/BigScore-LandingPage-Section3";
import BigscoreLandingpageSection4 from "./BigScore-LandingPage-Section4/BigScore-LandingPage-Section4";
import BigscoreLandingpageSection5 from "./BigScore-LandingPage-Section5/BigScore-LandingPage-Section5";
import BigscoreLandingpageSection6 from "./BigScore-LandingPage-Section6/BigScore-LandingPage-Section6";
import BigscoreLandingpageSection7 from "./BigScore-LandingPage-Section7/BigScore-LandingPage-Section7";
import BigscoreLandingpageSection8 from "./BigScore-LandingPage-Section8/BigScore-LandingPage-Section8";
import BigscoreLandingpageSection9 from "./BigScore-LandingPage-Section9/BigScore-LandingPage-Section9";
import "./BigScoreLandingPage.css";

class Bigscorelandingpage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Big Score Landing Page";
    }
    render() {
        return (
            <div id="BigScoreLandingPage">
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>
                <BigscoreLandingpageSection1 />
                <BigscoreLandingpageSection2 />
                <BigscoreLandingpageSection3 />
                <BigscoreLandingpageSection4 />
                <BigscoreLandingpageSection5 />
                <BigscoreLandingpageSection6 />
                <BigscoreLandingpageSection7 />
                <BigscoreLandingpageSection8 />
                <BigscoreLandingpageSection9 />
                <BigscoreLandingpageSection10 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default Bigscorelandingpage;
