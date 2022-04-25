import React, { Component } from "react";
import "./BigScore-LandingPage-Section3.css";

class BigscoreLandingpageSection3 extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage-Section3">
                <div className="BigScoreLandingPage-Section3-Content-Container">
                    <h1 className="BigScoreLandingPage-Section3-Title" data-aos="fade-up" data-aos-offset="100">
                        Why Do We Need <br />
                        Big Score
                    </h1>
                    <div className="row BigScoreLandingPage-Section3-Content-SecondRow" data-aos="fade-up" data-aos-offset="100">
                        <div className="col-6">
                            <div className="row BigScoreLandingPage-Section3-Content-Left">
                                <div className="col-2">
                                    <img src={require("../../../src/Big-Score/LandingPage/Section3-Vector-Left.png")} className="BigScoreLandingPage-Section3-Content-Left-Vector" alt="" />
                                </div>
                                <div className="col-10">
                                    <p className="BigScoreLandingPage-Section3-Content-Left-Text">
                                        Banyaknya calon peminjam yang tidak memiliki catatan riwayat kredit di perbankan (unbankable) sehingga sulit bagi perbankan maupun multifinance untuk mengevaluasi resiko calon nasabahnya.
                                    </p>
                                </div>
                            </div>{" "}
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2">
                                    <img src={require("../../../src/Big-Score/LandingPage/Section3-Vector-Right.png")} className="BigScoreLandingPage-Section3-Content-Right-Vector" alt="" />
                                </div>
                                <div className="col-10">
                                    <p className="BigScoreLandingPage-Section3-Content-Right-Text">Kecenderungan naiknya NPL dari waktu ke waktu dan masih banyak NPL perusahaan berada di atas zona merah (5%)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigscoreLandingpageSection3;
