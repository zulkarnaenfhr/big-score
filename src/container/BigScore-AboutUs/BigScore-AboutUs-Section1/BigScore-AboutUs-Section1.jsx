import React, { Component } from "react";
import "./BigScore-AboutUs-Section1.css";

class BigscoreAboutusSection1 extends Component {
    render() {
        return (
            <div id="BigScoreAboutUs-Section1">
                <div className="BigScoreAboutUs-Section1-Container-Content">
                    <h1 className="BigScoreAboutUs-Section1-Title">About Us</h1>
                    <p className="BigScoreAboutUs-Section1-Text1">
                        Big Score is a number that provide information or category of customer’s Telkom Risk Profile that reflects how good or bad a credit risk a particular lender thinks you are.
                    </p>
                    <div>
                        <img src={require("../../../src/Big-Score/AboutUs/Section1-desc.png")} alt="" className="BigScoreAboutUs-Section1-Desc-Quotes" />
                        <p className="BigScoreAboutUs-Section1-Desc">Data Transaksi pada Perusahaan Telekomunikasi</p>
                    </div>
                    <p className="BigScoreAboutUs-Section1-Text2">Data transaksi perusahaan telekomunikasi (telco) berisi informasi mengenai : Internet Usage, Lama Berlangganan, Verifikasi Data, Payment Behavior, dan lainnya</p>
                    <img src={require("../../../src/Big-Score/AboutUs/Section1-Vector2.png")} alt="" className="BigScoreAboutUs-Section1-Vector2" />
                </div>
            </div>
        );
    }
}

export default BigscoreAboutusSection1;
