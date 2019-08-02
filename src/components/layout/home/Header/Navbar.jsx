import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class Navbar extends Component {
    Registration = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        Axios.post("/api/user/register", {
            email: email,
            password: password
        })
            .then(e => {
                if (e.status == 200) {
                    console.log("working", e);
                } else if (e.status == 400) {
                    console.log("Bad Request");
                } else {
                    console.log("Nothing Happened");
                }
            })
            .catch(e => {
                console.log("Bad Req",e);
            });
    };
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-none">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            InternshipPortal
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarText"
                        >
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link btn btn-primary"
                                        href="#"
                                    >
                                        Post an Internship
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href=""
                                        className="nav-link"
                                        data-toggle="modal"
                                        data-target="#signin"
                                    >
                                        <i className="fas fa-sign-in-alt" />
                                        &nbsp; Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href=""
                                        className="nav-link"
                                        data-toggle="modal"
                                        data-target="#signup"
                                    >
                                        <i className="fas fa-user-plus" />
                                        &nbsp; Sign Up
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Modal */}
                {/* <signin /> */}
                <div
                    className="modal signin"
                    id="signin"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form acceptCharset="UTF-8" role="form">
                                    <fieldset>
                                        <div className="form-group">
                                            <input
                                                className="form-control signin-"
                                                placeholder="hello@careersols.com"
                                                name="email"
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control signin-"
                                                placeholder="Password"
                                                name="password"
                                                type="password"
                                            />
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    name="remember"
                                                    type="checkbox"
                                                    value="Remember Me"
                                                />{" "}
                                                Remember Me
                                            </label>
                                        </div>
                                        <input
                                            className="btn btn-lg btn-success btn-block"
                                            type="submit"
                                            value="Login"
                                        />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Signup Modal */}
                <div
                    className="modal signin"
                    id="signup"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    acceptCharset="UTF-8"
                                    role="form"
                                    onSubmit={this.Registration}
                                >
                                    <fieldset>
                                        <div className="form-group">
                                            <input
                                                className="form-control signin-"
                                                placeholder="hello@careersols.com"
                                                name="email"
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control signin-"
                                                placeholder="Password"
                                                name="password"
                                                type="password"
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                <input
                                                    className="btn btn-lg btn-success btn-block"
                                                    type="submit"
                                                    value="Register"
                                                />
                                            </div>
                                            {/* <div className="col">
                                                <input
                                                    className="btn btn-lg btn-success btn-block"
                                                    type="submit"
                                                    value="Candidate"
                                                />
                                            </div> */}
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
