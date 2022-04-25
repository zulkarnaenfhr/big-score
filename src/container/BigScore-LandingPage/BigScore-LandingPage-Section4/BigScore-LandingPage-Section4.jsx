import React, { Component } from "react";
import "./BigScore-LandingPage-Section4.css";

class BigscoreLandingpageSection4 extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage-Section4">
                <div className="BigScoreLandingPage-Section4-Content-Container">
                    <h1 className="BigScoreLandingPage-Section4-Title">Solution</h1>
                    <img src={require("../../../src/Big-Score/LandingPage/Section4-Vector.png")} className="BigScoreLandingPage-Section4-Vector" alt="" />
                    <div className="BigScoreLandingPage-Section4-Text-Container">
                        <div className="row">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} className="BigScoreLandingPage-Section4-Checklist" alt="" />
                            </div>
                            <div className="col-11">
                                <p className="BigScoreLandingPage-Section4-Text1">
                                    Memberikan score berupa angka yang memberikan informasi atau kategori Profil Risiko Telkom pelanggan yang mencerminkan seberapa baik atau buruk risiko kredit calon peminjam di perusahaan anda
                                </p>
                            </div>
                        </div>
                        <div className="row BigScoreLandingPage-Section4-Text-Row2">
                            <div className="col-1">
                                <img src={require("../../../src/Big-Score/Big-Score-Checklist.png")} className="BigScoreLandingPage-Section4-Checklist" alt="" />
                            </div>
                            <div className="col-11">
                                <p className="BigScoreLandingPage-Section4-Text2">Meminimalkan risiko kredit di perusahaan multifinance & perbankan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigscoreLandingpageSection4;
