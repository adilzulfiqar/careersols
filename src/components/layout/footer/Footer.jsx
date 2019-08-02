import React, { Component } from "react";

import { Link } from "react-router-dom";

// import Blog from "../blog/Blog";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container texr-center">
                    <div className="row">
                        <div className="col-md-3">
                            <h6>About</h6>
                            <ul>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <a href="#">Faq</a>
                                </li>
                            </ul>
                            <ul className="social">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Companies</h6>
                            <ul>
                                <li>
                                    <a href="#">How it works</a>
                                </li>
                                <li>
                                    <a href="#">Register</a>
                                </li>
                                <li>
                                    <a href="#">Post an Internship</a>
                                </li>
                                <li>
                                    <a href="#">Search Internees</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Candidates</h6>
                            <ul>
                                <li>
                                    <a href="#">How it works</a>
                                </li>
                                <li>
                                    <a href="#">Register</a>
                                </li>

                                <li>
                                    <a href="#">Search Internship</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Have any Question?</h6>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-map-marker-alt" />
                                        <p>
                                            Nspire, NETSOL Technologies Ltd
                                            Lahore Ring Road, Ghazi Road
                                            Interchange Lahore Cantt 54792,
                                            Pakistan
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-phone" />
                                        <p>+92 303 9383663</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:hello@careersols.com?subject=Hello%20CareerSols">
                                        <i className="fas fa-envelope" />
                                        <p>Hello@careersols.com</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center copyright">
                        Copyright © All right Reversed I Designed and Developed
                        by{" "}
                        <a href="http://elancmia.com/" target="_blacnk">
                            Elancmia
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}
