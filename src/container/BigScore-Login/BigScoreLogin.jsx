import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigScoreLogin.css";

class BigScoreLogin extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Big Score Login";
    }

    render() {
        return (
            <div id="BigScoreLogin">
                <div className="BigScoreLogin-content-contaienr-left">
                    <div>
                        <div>
                            <h1 className="BigScoreLogin-content-container-left-Hello">Hello Again !</h1>
                            <p className="BigScoreLogin-content-container-left-Hello2">We miss you, welcome back!</p>
                        </div>
                        <form action="">
                            <input className="BigScoreLogin-input BigScoreLogin-input1 container" type="email" placeholder="Email Address" />
                            <br />
                            <input className="BigScoreLogin-input BigScoreLogin-input2 container" type="password" placeholder="Password" />
                            <Link
                                className="BigScoreLogin-ForgetPass-container"
                                to={{
                                    pathname: "noteset",
                                }}
                            >
                                <p className="BigScoreLogin-ForgetPass">Forget Password?</p>
                            </Link>
                            <button className="BigSocreLogin-ButonSubmit" type="submit">
                                Sign in
                            </button>
                        </form>
                        <div className="BigScoreLogin-Or-Container">
                            <div class="BigScoreLogin-Or">Or</div>
                        </div>
                        <button className="BigScoreLogin-ButtonGoogle"> Sign in with Google</button>
                        <p className="BigScoreLogin-SignUp">
                            Don't have an account?{" "}
                            <Link to={{ pathname: `/big-score/register` }}>
                                <span> Sign Up</span>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="BigScoreLogin-container-right">
                    <div className="BigScoreLogin-content-container-right">
                        <div className="BigScoreLogin-content-right-Background1"></div>
                        <h1 className="BigScoreLogin-content-right-Title">
                            Grow big <br /> with Big Score
                        </h1>
                        <div className="BigScoreLogin-content-right-vector-container">
                            <img src={require("../../src/Big-Score/Login/Right-Vector.png")} className="BigScoreLogin-content-right-vector" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BigScoreLogin;
