import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigScore-LandingPage-Section5.css";

class BigscoreLandingpageSection5 extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage-Section5">
                <h1 className="BigScoreLandingPage-Section5-Title" data-aos="fade-up" data-aos-offset="100">
                    Lets Try Our Demo Apps
                </h1>
                <p className="BigScoreLandingPage-Section5-Text" data-aos="fade-up" data-aos-offset="100">
                    Discover how our products are implemented in real world situations and used in various use case through our interactive demo app.
                </p>
                <div data-aos="fade-up" data-aos-offset="100">
                    <Link
                        className="BigScoreLandingPage-Section5-Button-Container"
                        to={{
                            pathname: `notset`,
                        }}
                    >
                        <button className="BigScoreLandingPage-Section5-Button">Try Now</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BigscoreLandingpageSection5;
