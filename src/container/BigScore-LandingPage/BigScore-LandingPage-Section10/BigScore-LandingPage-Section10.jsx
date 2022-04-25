import React, { Component } from "react";
import "./BigScore-LandingPage-Section10.css";

class BigscoreLandingpageSection10 extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage-Section10">
                <h1 className="BigScoreLandingPage-Section10-Title" data-aos="fade-up" data-aos-offset="100">
                    Welcome to where ....
                </h1>
                <div className="BigScoreLandingPage-Section10-Button-Container">
                    <div data-aos="fade-up" data-aos-offset="100">
                        <button className="BigScoreLandingPage-Section10-ButtonFreeTrial BigScoreLandingPage-Section10-Button">Free Trial</button>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="100">
                        <button className="BigScoreLandingPage-Section10-ButtonContactUs BigScoreLandingPage-Section10-Button">Contact Us</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigscoreLandingpageSection10;
