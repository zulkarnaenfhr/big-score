import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Bigscorelandingpage from "./container/BigScore-LandingPage/BigScoreLandingPage";
import "./style.css";

class BigscoreRouter extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/big-score/" exact element={<Bigscorelandingpage />} />
                </Routes>
            </div>
        );
    }
}

export default BigscoreRouter;
