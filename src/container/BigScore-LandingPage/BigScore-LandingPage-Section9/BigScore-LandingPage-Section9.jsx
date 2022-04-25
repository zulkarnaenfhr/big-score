import React, { Component } from "react";
import "./BigScore-LandingPage-Section9.css";

class BigscoreLandingpageSection9 extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage-Section9">
                <div className="BigScoreLandingPage-Section9-Content-Container">
                    <h1 className="BigScoreLandingPage-Section9-Content-Container-Title">Customer</h1>
                    <div className="BigScoreLandingPage-Section9-Content-Container-Logo-Container">
                        <img src={require("../../../src/Big-Score/LandingPage/Section9-LogoTelkom.png")} className="BigScoreLandingPage-Section9-LogoTelkom" alt="" />
                        <img src={require("../../../src/Big-Score/LandingPage/Section9-LogoKredivo.png")} className="BigScoreLandingPage-Section9-LogoKredivo" alt="" />
                        <img src={require("../../../src/Big-Score/LandingPage/Section9-LogoFinneos.png")} className="BigScoreLandingPage-Section9-LogoFinneos" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default BigscoreLandingpageSection9;
