import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigScore-LandingPage-Section6.css";

class BigscoreLandingpageSection6 extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage-Section6">
                <div className="BigScoreLandingPage-Section6-Content-Container">
                    <img data-aos="fade-down-right" data-aos-offset="300" src={require("../../../src/Big-Score/LandingPage/Section6-Vector.png")} className="BigScoreLandingPage-Section6-Vector" alt="" />
                    <h1 data-aos="fade-down-left" data-aos-offset="100" className="BigScoreLandingPage-Section6-Title">
                        Why You Should Choose Us
                    </h1>
                    <div className="BigScoreLandingPage-Section6-List-Container">
                        <div className="row BigScoreLandingPage-Section6-rowChecklist" data-aos="fade-up" data-aos-offset="100">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} className="BigScoreLandingPage-Section6-Checklist" alt="" />
                            </div>
                            <div className="col-11">
                                <p className="BigScoreLandingPage-Section6-Text-List">End to end solution</p>
                            </div>
                        </div>
                        <div className="row BigScoreLandingPage-Section6-rowChecklist BigScoreLandingPage-Section6-rowChecklist2" data-aos="fade-up" data-aos-offset="100">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} className="BigScoreLandingPage-Section6-Checklist" alt="" />
                            </div>
                            <div className="col-11">
                                <p className="BigScoreLandingPage-Section6-Text-List">Competitive business schema</p>
                            </div>
                        </div>
                        <div className="row BigScoreLandingPage-Section6-rowChecklist BigScoreLandingPage-Section6-rowChecklist3" data-aos="fade-up" data-aos-offset="100">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} className="BigScoreLandingPage-Section6-Checklist" alt="" />
                            </div>
                            <div className="col-11">
                                <p className="BigScoreLandingPage-Section6-Text-List">Data scientist support</p>
                            </div>
                        </div>
                        <div className="row BigScoreLandingPage-Section6-rowChecklist BigScoreLandingPage-Section6-rowChecklist4" data-aos="fade-up" data-aos-offset="100">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} className="BigScoreLandingPage-Section6-Checklist" alt="" />
                            </div>
                            <div className="col-11">
                                <p className="BigScoreLandingPage-Section6-Text-List">Experience in big data analytic since 2010</p>
                            </div>
                        </div>
                        <div className="row BigScoreLandingPage-Section6-rowChecklist BigScoreLandingPage-Section6-rowChecklist5" data-aos="fade-up" data-aos-offset="100">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} className="BigScoreLandingPage-Section6-Checklist" alt="" />
                            </div>
                            <div className="col-11">
                                <p className="BigScoreLandingPage-Section6-Text-List">Provide big data consultant service & software as a service</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-offset="100">
                            <Link
                                className="BigScoreLandingPage-Section6-Button-Container"
                                to={{
                                    pathname: `notset`,
                                }}
                            >
                                <button className="BigScoreLandingPage-Section6-Button">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>{" "}
            </div>
        );
    }
}

export default BigscoreLandingpageSection6;
