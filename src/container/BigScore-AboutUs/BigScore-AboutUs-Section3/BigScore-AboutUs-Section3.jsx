import React, { Component } from "react";
import "./BigScore-AboutUs-Section3.css";

class BigscoreAboutusSection3 extends Component {
    render() {
        return (
            <div id="BigScoreAboutUs-Section3">
                <div className="BigScoreAboutUs-Section3-Content-Container">
                    <h1 data-aos="fade-right" data-aos-offset="100" className="BigScoreAboutUs-Section3-Title">
                        Our Benefit
                    </h1>
                    <img data-aos="fade-left" data-aos-offset="300" src={require("../../../src/Big-Score/AboutUs/Section3-Vector.png")} alt="" className="BigScoreAboutUs-Section3-Vector" />
                    <div className="BigScoreAboutUs-Section3-List-Container">
                        <div className="row BigScoreAboutUs-Section3-List-Row1" data-aos="fade-up" data-aos-offset="100">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} alt="" className="BigScoreAboutUs-Section3-Checklist" />
                            </div>
                            <div className="col-11 BigScoreAboutUs-Section3-List-Right">
                                <p className="BigScoreAboutUs-Section3-List-Text">Sebagai informasi alternatif lain ketika bank atau multifinance membutuhkan informasi kelayakan pinjaman kepada calon nasabah</p>
                            </div>
                        </div>
                        <div className="row BigScoreAboutUs-Section3-List-Row2" data-aos="fade-up" data-aos-offset="100">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} alt="" className="BigScoreAboutUs-Section3-Checklist" />
                            </div>
                            <div className="col-11 BigScoreAboutUs-Section3-List-Right">
                                <p className="BigScoreAboutUs-Section3-List-Text">
                                    Sebagai sumber informasi utama untuk profil risiko calon nasabah bank atau multifinance, dengan waktu yang lebih cepat dan relatif lebih murah dibandingkan dengan survey langsung
                                </p>
                            </div>
                        </div>
                        <div className="row BigScoreAboutUs-Section3-List-Row3" data-aos="fade-up" data-aos-offset="100">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} alt="" className="BigScoreAboutUs-Section3-Checklist" />
                            </div>
                            <div className="col-11 BigScoreAboutUs-Section3-List-Right">
                                <p className="BigScoreAboutUs-Section3-List-Text">Memperkaya data referensi pelanggan dan memberikan analisa secara household centric</p>
                            </div>
                        </div>
                        <div className="row BigScoreAboutUs-Section3-List-Row4" data-aos="fade-up" data-aos-offset="100">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} alt="" className="BigScoreAboutUs-Section3-Checklist" />
                            </div>
                            <div className="col-11 BigScoreAboutUs-Section3-List-Right4">
                                <p className="BigScoreAboutUs-Section3-List-Text">Menurunkan NPL (Non-Performing Loan) suatu perusahaan</p>
                            </div>
                        </div>
                    </div>
                </div>{" "}
            </div>
        );
    }
}

export default BigscoreAboutusSection3;
