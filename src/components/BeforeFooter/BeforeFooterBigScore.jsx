import React, { Component } from "react";
import "./BeforeFooterBigScore.css";

class Beforefooterbigscore extends Component {
    render() {
        return (
            <div id="BeforeFooterBigScore">
                <div className="BeforeFooterBigScore-Container">
                    <img className="BeforeFooterBigScore-SPL-Logo" data-aos="fade-up" data-aos-offset="0" src={require("../../src/Big-Score/Big-Score-Logo.png")} alt="Logo-Navbar" border="0"></img>
                    <div className="row BeforeFooterBigScore-Content-Container">
                        <div className="col-4 BeforeFooterBigScore-Content-Left">
                            <div>
                                <p className="BeforeFooterBigScore-SPL-ColLeft-Row1" data-aos="fade-up" data-aos-offset="0">
                                    Telkom Direktorat Digital Bussiness Bandung
                                </p>
                                <p className="BeforeFooterBigScore-SPL-ColLeft-Row2" data-aos="fade-up" data-aos-offset="0">
                                    Jl. Gegerkalong Hilir no. 47, Sukasari, Kota <br /> Bandung, Jawa Barat 40152
                                </p>
                                <p className="BeforeFooterBigScore-SPL-ColLeft-Row3" data-aos="fade-up" data-aos-offset="0">
                                    (022) 4571261
                                </p>
                                <p className="BeforeFooterBigScore-SPL-ColLeft-Row4" data-aos="fade-up" data-aos-offset="0">
                                    admin@SPL.id
                                </p>
                            </div>
                        </div>
                        <div className="col-4 BeforeFooterBigScore-Content-Mid">
                            <div>
                                <p className="BeforeFooterBigScore-SPL-ColMid-Row1" data-aos="fade-up" data-aos-offset="0">
                                    Ikuti Social Media Kami <br />
                                    <i className="fa-brands fa-linkedin"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-facebook-square"></i>
                                </p>
                                <p className="BeforeFooterBigScore-SPL-ColMid-Row2" data-aos="fade-up" data-aos-offset="0">
                                    id.smartplatform{" "}
                                </p>
                                <p className="BeforeFooterBigScore-SPL-ColMid-Row3" data-aos="fade-up" data-aos-offset="0">
                                    Contact Integrated Dashboard Smart Governments
                                </p>
                            </div>
                        </div>
                        <img data-aos="fade-up" data-aos-offset="0" className="BeforeFooterBigScore-SPL-RightMid" src={require("../../src/Big-Score/BigScoreLogo Right.png")} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Beforefooterbigscore;
