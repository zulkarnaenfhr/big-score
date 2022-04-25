import React, { Component } from "react";
import "./BigScore-LandingPage-Section9.css";

class BigscoreLandingpageSection9 extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage-Section9">
                <div className="BigScoreLandingPage-Section9-Content-Container">
                    <h1 className="BigScoreLandingPage-Section9-Content-Container-Title" data-aos="fade-up" data-aos-offset="100">
                        Customer
                    </h1>
                    <div className="BigScoreLandingPage-Section9-Content-Container-Logo-Container">
                        <img src={require("../../../src/Big-Score/LandingPage/Section9-LogoTelkom.png")} className="BigScoreLandingPage-Section9-LogoTelkom" alt="" data-aos="fade-up" data-aos-offset="100" data-aos-delay="0" />
                        <img src={require("../../../src/Big-Score/LandingPage/Section9-LogoKredivo.png")} className="BigScoreLandingPage-Section9-LogoKredivo" alt="" data-aos="fade-up" data-aos-offset="100" data-aos-delay="200" />
                        <img src={require("../../../src/Big-Score/LandingPage/Section9-LogoFinneos.png")} className="BigScoreLandingPage-Section9-LogoFinneos" alt="" data-aos="fade-up" data-aos-offset="100" data-aos-delay="400" />
                    </div>
                </div>
            </div>
        );
    }
}

export default BigscoreLandingpageSection9;
