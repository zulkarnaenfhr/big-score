import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigScore-LandingPage-Section2.css";

class BigscoreLandingpageSection2 extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage-Section2">
                <div className="BigScoreLandingPage-Section2-container">
                    <h1 className="BigScoreLandingPage-Section2-Title" data-aos="fade-up" data-aos-offset="100">
                        About Us
                    </h1>
                    <img data-aos="fade-right" data-aos-offset="100" src={require("../../../src/Big-Score/LandingPage/Section2-Vector.png")} className="BigScoreLandingPage-Section2-Vector" alt="" />
                    <div className="BigScoreLandingPage-Section2-TextandButton-Container">
                        <p className="BigScoreLandingPage-Section2-Text" data-aos="fade-left" data-aos-offset="100">
                            Big Score is a number that provide information or category of customer’s Telkom Risk Profile that reflects how good or bad a credit risk a particular lender thinks you are
                        </p>
                        <div data-aos="fade-left" data-aos-delay="100" data-aos-offset="100">
                            <Link
                                className="BigScoreLandingPage-Section2-Button-Container"
                                to={{
                                    pathname: `notset`,
                                }}
                            >
                                <button className="BigScoreLandingPage-Section2-Button">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigscoreLandingpageSection2;
