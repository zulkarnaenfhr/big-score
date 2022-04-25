import React, { Component } from "react";
import "./BigScore-AboutUs-Section1.css";

class BigscoreAboutusSection1 extends Component {
    render() {
        return (
            <div id="BigScoreAboutUs-Section1">
                <div className="BigScoreAboutUs-Section1-Container-Content">
                    <h1 className="BigScoreAboutUs-Section1-Title" data-aos="fade-in" data-aos-offset="100" data-aos-delay="200">
                        About Us
                    </h1>
                    <p className="BigScoreAboutUs-Section1-Text1" data-aos="fade-in" data-aos-offset="100" data-aos-delay="300">
                        Big Score is a number that provide information or category of customer’s Telkom Risk Profile that reflects how good or bad a credit risk a particular lender thinks you are.
                    </p>
                    <div data-aos="fade-in" data-aos-offset="100" data-aos-delay="300">
                        <img src={require("../../../src/Big-Score/AboutUs/Section1-desc.png")} alt="" className="BigScoreAboutUs-Section1-Desc-Quotes" />
                        <p className="BigScoreAboutUs-Section1-Desc">Data Transaksi pada Perusahaan Telekomunikasi</p>
                    </div>
                    <p data-aos="fade-in" data-aos-offset="0" data-aos-delay="400" className="BigScoreAboutUs-Section1-Text2">
                        Data transaksi perusahaan telekomunikasi (telco) berisi informasi mengenai : Internet Usage, Lama Berlangganan, Verifikasi Data, Payment Behavior, dan lainnya
                    </p>
                    <img data-aos="fade-in" data-aos-offset="100" data-aos-delay="100" src={require("../../../src/Big-Score/AboutUs/Section1-Vector2.png")} alt="" className="BigScoreAboutUs-Section1-Vector2" />
                </div>
            </div>
        );
    }
}

export default BigscoreAboutusSection1;
