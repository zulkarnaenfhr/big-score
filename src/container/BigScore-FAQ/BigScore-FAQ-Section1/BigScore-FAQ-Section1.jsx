import React, { Component } from "react";
import "./BigScore-FAQ-Section1.css";

class BigscoreFaqSection1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faq1: false,
            faq2: false,
            faq3: false,
            faq4: false,
        };
    }
    handleFAQClick = (e) => {
        if (e.target.innerText === "Apa Itu Telco Risk") {
            this.setState({
                faq1: !this.state.faq1,
            });
        } else if (e.target.innerText === "Apa Saja Fiturnya") {
            this.setState({
                faq2: !this.state.faq2,
            });
        } else if (e.target.innerText === "Mengapa Harus Menggunakan Produk Ini") {
            this.setState({
                faq3: !this.state.faq3,
            });
        } else if (e.target.innerText === "Apa Yang Menjadi Kelebihan Produk Telkom") {
            this.setState({
                faq4: !this.state.faq4,
            });
        }
    };
    render() {
        return (
            <div id="BigScoreFAQ-Section1">
                <div className="BigScoreFAQ-Section1-Parent-Content-Container">
                    <div>
                        <h1 className="BigScoreFAQ-Section1-Title" data-aos="fade-up" data-aos-offset="100">
                            Frequently Asked Question (FAQ)
                        </h1>
                    </div>
                    <div className="BigScoreFAQ-Section1-Content-Container" data-aos="fade-up" data-aos-offset="100">
                        <div>
                            <div className="row">
                                <div className="BigScore-FAQ-Section1-Collapse-Container">
                                    <button name="faq2" onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                        <div className="row">
                                            <div className="col-11">Apa Itu Telco Risk</div>
                                            <div className="col-1">
                                                <img
                                                    className={this.state.faq1 === false ? "BigScore-FAQ-Section1-VectorSilang" : "BigScore-FAQ-Section1-VectorSilangRotate"}
                                                    src={require("../../../src/Big-Score/Big-Score-Silang.png")}
                                                    alt=""
                                                />
                                            </div>
                                        </div>{" "}
                                    </button>
                                    <div className="collapse divCollapse" id="collapseExample1">
                                        <div className="divCollapse-Container">
                                            <p className="question1-p">
                                                A Telco Risk Score is a number that provide information or category of customer’s Telkom Risk Profile that reflects how good or bad a credit risk a particular lender thinks you are.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{
                                    marginTop: "15px",
                                }}
                            >
                                <div className="BigScore-FAQ-Section1-Collapse-Container">
                                    <button name="faq2" onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                        <div className="row">
                                            <div className="col-11">Apa saja fiturnya</div>
                                            <div className="col-1">
                                                <img
                                                    className={this.state.faq2 === false ? "BigScore-FAQ-Section1-VectorSilang" : "BigScore-FAQ-Section1-VectorSilangRotate"}
                                                    src={require("../../../src/Big-Score/Big-Score-Silang.png")}
                                                    alt=""
                                                />
                                            </div>
                                        </div>{" "}
                                    </button>
                                    <div className="collapse divCollapse" id="collapseExample2">
                                        <div className="divCollapse-Container">
                                            <p className="question2-p">Fitur-fitur yang tersedia dalam IDSG antara lain Dashboard KPI, integrasi data, monitoring kinerja dan Big data analytic</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{
                                    marginTop: "15px",
                                }}
                            >
                                <div className="BigScore-FAQ-Section1-Collapse-Container">
                                    <button name="faq3" onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                        <div className="row">
                                            <div className="col-11">Mengapa harus menggunakan produk ini</div>
                                            <div className="col-1">
                                                <img
                                                    className={this.state.faq3 === false ? "BigScore-FAQ-Section1-VectorSilang" : "BigScore-FAQ-Section1-VectorSilangRotate"}
                                                    src={require("../../../src/Big-Score/Big-Score-Silang.png")}
                                                    alt=""
                                                />
                                            </div>
                                        </div>{" "}
                                    </button>
                                    <div className="collapse divCollapse" id="collapseExample3">
                                        <p className="divCollapse-Container">-</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{
                                    marginTop: "15px",
                                }}
                            >
                                <div className="BigScore-FAQ-Section1-Collapse-Container">
                                    <button name="faq4" onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                        <div className="row">
                                            <div className="col-11">apa yang menjadi kelebihan produk telkom </div>
                                            <div className="col-1">
                                                <img
                                                    className={this.state.faq4 === false ? "BigScore-FAQ-Section1-VectorSilang" : "BigScore-FAQ-Section1-VectorSilangRotate"}
                                                    src={require("../../../src/Big-Score/Big-Score-Silang.png")}
                                                    alt=""
                                                />
                                            </div>
                                        </div>{" "}
                                    </button>
                                    <div className="collapse divCollapse" id="collapseExample4">
                                        <p className="divCollapse-Container">-</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigscoreFaqSection1;
