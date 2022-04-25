import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigScore-LandingPage-Section1.css";

class BigscoreLandingpageSection1 extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage-Section1">
                <img src={require("../../../src/Big-Score/LandingPage/Section1-Vector.png")} className={"BigScoreLandingPage-Section1-Vector"} />
                <div className="BigScoreLandingPage-Section1-Title-Container">
                    <h1 className="BigScoreLandingPage-Section1-Title1">Big Score</h1>
                    <h1 className="BigScoreLandingPage-Section1-Title2">Bring The Most of AI Together</h1>
                </div>
                <Link
                    className="BigScoreLandingPage-Section1-Button-Container"
                    to={{
                        pathname: `notset`,
                    }}
                >
                    <button className="BigScoreLandingPage-Section1-Button">Free Trial</button>
                </Link>
            </div>
        );
    }
}

export default BigscoreLandingpageSection1;
