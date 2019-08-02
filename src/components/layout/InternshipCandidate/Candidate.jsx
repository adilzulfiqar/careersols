import React, { Component } from "react";

export default class Candidate extends Component {
    render() {
        return (
            <section className="candidate">
                <div className="container text-center">
                    <p>We have best candidates</p>
                    <h1>
                        Our <b>Candidates</b>
                    </h1>
                    <div className="candidate-list text-left">
                        <div className="row candidate">
                            <div className="col-md-2 thumbnail">
                                <img
                                    src="./images/candidates/thumbnail.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-md-6 detail d-flex align-self-center ">
                                <div>
                                    <h3>Web Developer</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2 location detail d-flex align-self-center">
                                <div>
                                    <i className="fas fa-map-marker-alt" />
                                    <p>Sabzazar, Lahore</p>
                                </div>
                            </div>
                            <div className="col-md-2 intern-btn detail d-flex align-self-center">
                                <button className="btn btn-outline-success">
                                    intern me
                                </button>
                            </div>
                        </div>
                        <div className="row candidate">
                            <div className="col-md-2 thumbnail">
                                <img
                                    src="./images/candidates/thumbnail.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-md-6 detail d-flex align-self-center ">
                                <div>
                                    <h3>Web Developer</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2 location detail d-flex align-self-center">
                                <div>
                                    <i className="fas fa-map-marker-alt" />
                                    <p>Sabzazar, Lahore</p>
                                </div>
                            </div>
                            <div className="col-md-2 intern-btn detail d-flex align-self-center">
                                <button className="btn btn-outline-success">
                                    intern me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
