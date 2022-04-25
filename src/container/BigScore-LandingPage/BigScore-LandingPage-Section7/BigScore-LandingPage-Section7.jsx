import React, { Component } from "react";
import "./BigScore-LandingPage-Section7.css";

class BigscoreLandingpageSection7 extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage-Section7">
                <div className="BigScoreLandingPage-Section7-Content-Container">
                    <h1 className="BigScoreLandingPage-Section7-Title" data-aos="fade-up" data-aos-offset="100">
                        How Big Score Work
                    </h1>
                    <div className="BigScoreLandingPage-Section7-Vector-Container" data-aos="fade-up" data-aos-offset="400">
                        <img src={require("../../../src/Big-Score/LandingPage/Section7-Vector1.png")} className="BigScoreLandingPage-Section7-Vector1" alt="" />
                        <img src={require("../../../src/Big-Score/LandingPage/Section7-Panah1.png")} className="BigScoreLandingPage-Section7-Panah1" alt="" />
                        <img src={require("../../../src/Big-Score/LandingPage/Section7-Vector2.png")} className="BigScoreLandingPage-Section7-Vector2" alt="" />
                        <img src={require("../../../src/Big-Score/LandingPage/Section7-Vector3.png")} className="BigScoreLandingPage-Section7-Vector3" alt="" />
                        <img src={require("../../../src/Big-Score/LandingPage/Section7-Vector4.png")} className="BigScoreLandingPage-Section7-Vector4" alt="" />
                        <img src={require("../../../src/Big-Score/LandingPage/Section7-Panah1.png")} className="BigScoreLandingPage-Section7-Panah2" alt="" />
                        <img src={require("../../../src/Big-Score/LandingPage/Section7-Vector5.png")} className="BigScoreLandingPage-Section7-Vector5" alt="" />
                    </div>
                </div>{" "}
            </div>
        );
    }
}

export default BigscoreLandingpageSection7;
