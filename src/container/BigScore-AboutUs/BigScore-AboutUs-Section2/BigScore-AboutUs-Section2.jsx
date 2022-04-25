import React, { Component } from "react";
import "./BigScore-AboutUs-Section2.css";

class BigscoreAboutusSection2 extends Component {
    render() {
        return (
            <div id="BigScoreAboutUs-Section2">
                <div className="BigScoreAboutUs-Section2-Content-Container">
                    <img src={require("../../../src/Big-Score/AboutUs/Section2-Vector.png")} alt="" className="BigScoreAboutUs-Section2-Vector" />
                    <div className="BigScoreAboutUs-Section2-Title-Container">
                        <h1 className="BigScoreAboutUs-Section2-Title1">Our ‎ Mission</h1>
                        <h1 className="BigScoreAboutUs-Section2-Title2">Purpose Value</h1>
                    </div>
                    <p className="BigScoreAboutUs-Section2-Text">
                        As an agency focused on measurable, empathy-based marketing, our culture is reflective of that. Our mission, values, and purpose add aspiration and structure to how we hire, establish partnerships, and create
                        award-winning work.
                    </p>
                    <div className="BigScoreAboutUs-Section2-List-Container">
                        <div className="row">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} className="BigScoreAboutUs-Section2-Checklist" alt="" />
                            </div>
                            <div className="col-11">
                                <h1 className="BigScoreAboutUs-Section2-List-Title">Mission</h1>
                                <p className="BigScoreAboutUs-Section2-List-Desc">To ... Lörem ipsum smartplåster plasm köttskatt i bilsurfa.</p>
                            </div>
                        </div>
                        <div className="row BigScoreAboutUs-Section2-List-Row2">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} className="BigScoreAboutUs-Section2-Checklist" alt="" />
                            </div>
                            <div className="col-11">
                                <h1 className="BigScoreAboutUs-Section2-List-Title">Purpose</h1>
                                <p className="BigScoreAboutUs-Section2-List-Desc">To ... Lörem ipsum smartplåster plasm köttskatt i bilsurfa.</p>
                            </div>
                        </div>
                        <div className="row BigScoreAboutUs-Section2-List-Row2">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} className="BigScoreAboutUs-Section2-Checklist" alt="" />
                            </div>
                            <div className="col-11">
                                <h1 className="BigScoreAboutUs-Section2-List-Title">Value</h1>
                                <p className="BigScoreAboutUs-Section2-List-Desc">To ... Lörem ipsum smartplåster plasm köttskatt i bilsurfa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigscoreAboutusSection2;
