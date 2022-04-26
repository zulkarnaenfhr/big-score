import React, { Component } from "react";
import { Route, Routes } from "react-router";
import BigscoreAboutcompany from "./container/BigScore-AboutCompany/BigScore-AboutCompany";
import Bigscoreaboutus from "./container/BigScore-AboutUs/BigScoreAboutUs";
import BigscoreBlog from "./container/BigScore-Blog/BigScore-Blog";
import BigscoreContactus from "./container/BigScore-ContactUs/BigScore-ContactUs";
import BigscoreDocumentation from "./container/BigScore-Documentation/BigScore-Documentation";
import BigscoreFaq from "./container/BigScore-FAQ/BigScore-FAQ";
import Bigscorelandingpage from "./container/BigScore-LandingPage/BigScoreLandingPage";
import BigScoreLogin from "./container/BigScore-Login/BigScoreLogin";
import BigscorePartnership from "./container/BigScore-Partnership/BigScore-Partnership";
import BigscorePress from "./container/BigScore-Press/BigScore-Press";
import BigScoreRegister from "./container/BigScore-Register/BigScoreRegister";
import BigscoreSupport from "./container/BigScore-Support/BigScore-Support";
import "./style.css";

class BigscoreRouter extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/big-score/" exact element={<Bigscorelandingpage />} />
                    <Route path="/big-score/aboutcompany" exact element={<BigscoreAboutcompany />} />
                    <Route path="/big-score/aboutus" exact element={<Bigscoreaboutus />} />
                    <Route path="/big-score/blog" exact element={<BigscoreBlog />} />
                    <Route path="/big-score/contactus" exact element={<BigscoreContactus />} />
                    <Route path="/big-score/documentation" exact element={<BigscoreDocumentation />} />
                    <Route path="/big-score/FAQ" exact element={<BigscoreFaq />} />
                    <Route path="/big-score/login" exact element={<BigScoreLogin />} />
                    <Route path="/big-score/partnership" exact element={<BigscorePartnership />} />
                    <Route path="/big-score/press" exact element={<BigscorePress />} />
                    <Route path="/big-score/register" exact element={<BigScoreRegister />} />
                    <Route path="/big-score/support" exact element={<BigscoreSupport />} />
                    <Route
                        path="*"
                        element={
                            <div id="notfound-page-container">
                                <p>Page Not Found</p>
                            </div>
                        }
                    />{" "}
                </Routes>
            </div>
        );
    }
}

export default BigscoreRouter;
