import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Forgot extends Component {
    checkInput = e => {
        var element = document.getElementById("forgot");
        var label = document.getElementById("filled-entry");
        if (e.target.value != "") {
            console.log(this.target.nextSibling);
            // .className += " filled-entry";
        } else {
            this.nextSibling.className = "";
        }
    };
    render() {
        return (
            <div className="forgot">
                <div className="row">
                    <div className=" d-none d-md-block col-md-6 col-lg-7 img" />
                    <div className="col-md-6 col-lg-5 forgot-form">
                        <img
                            src="./images/logo2.PNG"
                            className="forgot-img img-fluid"
                            alt=""
                        />
                        <h2>Forgot Password</h2>
                        <form>
                            <div className="form-group forgot">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="forgot"
                                    onChange={this.checkInput}
                                />
                                <label
                                    htmlFor="forgot"
                                    className=""
                                    id="filled-entry"
                                >
                                    Your e-mail address
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary forgot"
                            >
                                Reset Password
                            </button>
                        </form>
                        <div>
                            or <Link to="/signup">sign up</Link>/
                            <Link to="/login">sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
