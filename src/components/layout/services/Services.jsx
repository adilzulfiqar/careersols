import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Services extends Component {
    render() {
        return (
            <section className="services">
                <div className="info">
                    <div className="container">
                        <div className="row row-eq-height items">
                            <div className="col-md-4">
                                <div className="item">
                                    <span>
                                        <img
                                            src="./images/services/time.svg"
                                            alt=""
                                        />
                                    </span>
                                    <h2>Video Resume</h2>
                                    <p>
                                        Save time & resources on every
                                        appointment, get relevant talent, not
                                        just applications
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item">
                                    <span>
                                        <img
                                            src="./images/services/aptitude-test.svg"
                                            alt=""
                                        />
                                    </span>
                                    <h2>Original Content</h2>
                                    <p>
                                        Tap into most verified and screened
                                        community.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item">
                                    <span>
                                        <img
                                            src="./images/services/trainings.svg"
                                            alt=""
                                        />
                                    </span>
                                    <h2>Trainings</h2>
                                    <p>
                                        Fantastic Academic results do not always
                                        translate into ‘employee of the month’.
                                        Professional abilities are the key to
                                        excel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quote">
                    <div className="container text-center">
                        <h1>Make a Difference with Your Video Resume!</h1>
                        <p>
                            Your video resume will get more intrests by
                            Companies
                        </p>
                        <Link to="/signup" className="btn">
                            Create an Account
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}
