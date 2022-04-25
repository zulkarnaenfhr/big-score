import { Component } from "react";
import { Link } from "react-router-dom";
import "./BigScoreRegister.css";

class BigScoreRegister extends Component {
    render() {
        return (
            <div id="BiScoreRegister-container">
                <div className="BiScoreRegister-container-left">
                    <div className="BiScoreRegister-content-container-left">
                        <h1 className="BigScoreRegister-content-header-left">Create new Account</h1>
                        <form action="">
                            <input className="BiScoreRegister-input" type="email" placeholder="Email Address" />
                            <br />
                            <input className="BiScoreRegister-input" type="text" placeholder="Account Name" />
                            <br />
                            <input className="BiScoreRegister-input" type="Passowrd" placeholder="Password" />
                            <br />
                            <input className="BiScoreRegister-input" type="password" placeholder="Confirm Password" />
                            <br />
                            <button className="BiScoreRegister-Button-Signin">Sign Up</button>
                        </form>
                        <p className="BigScoreRegister-Login">
                            Already have an account?{" "}
                            <Link to={{ pathname: "/big-score/login" }}>
                                <span>Sign in</span>
                            </Link>{" "}
                        </p>
                    </div>
                </div>
                <div className="BiScoreRegister-container-right">
                    <div className="BiScoreRegister-content-container-right">
                        <h1 className="BiScoreRegister-content-right-Title">
                            Grow big <br /> with Big Score
                        </h1>
                        <div className="BiScoreRegister-content-right-vector-container">
                            <img src={require("../../src/Big-Score/Login/Right-Vector.png")} className="BigScoreRegister-content-right-vector" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigScoreRegister;
