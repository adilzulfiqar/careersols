import React, { Component } from "react";

export default class HomeContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row content">
                    <div className="col-md-12 content-value">
                        <div>
                            <p className="lead">
                                A better way to become Competitive
                            </p>
                            <h1>
                                <span>Opportunity is Knocking</span>
                            </h1>
                            <div className="tabs">
                                <nav>
                                    <div
                                        className="nav nav-tabs"
                                        id="nav-tab"
                                        role="tablist"
                                    >
                                        <a
                                            className="nav-item nav-link active"
                                            id="nav-candidate-tab"
                                            data-toggle="tab"
                                            href="#nav-home"
                                            role="tab"
                                            aria-controls="nav-home"
                                            aria-selected="true"
                                        >
                                            Find a Candidate
                                        </a>
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-internship-tab"
                                            data-toggle="tab"
                                            href="#nav-profile"
                                            role="tab"
                                            aria-controls="nav-profile"
                                            aria-selected="false"
                                        >
                                            Find an Internship
                                        </a>
                                    </div>
                                </nav>
                                <div
                                    className="tab-content"
                                    id="nav-tabContent"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="nav-home"
                                        role="tabpanel"
                                        aria-labelledby="nav-candidate-tab"
                                    >
                                        <form
                                            action="#"
                                            className="search-internship"
                                        >
                                            <div className="row">
                                                <div className="col-md">
                                                    <div className="form-group">
                                                        <div className="form-field">
                                                            <div className="icon">
                                                                <i className="fas fa-briefcase" />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="eg. Graphics Designer"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <div className="form-group">
                                                        <div className="form-field">
                                                            <div className="select-wrap">
                                                                <div className="icon">
                                                                    <i className="fas fa-map-marker-alt" />
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Lahore"
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <div className="form-group">
                                                        <div className="form-field">
                                                            <input
                                                                type="submit"
                                                                value="Search Candidate"
                                                                className="form-control btn btn-primary"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="nav-profile"
                                        role="tabpanel"
                                        aria-labelledby="nav-internship-tab"
                                    >
                                        <form
                                            action="#"
                                            className="search-internship"
                                        >
                                            <div className="row">
                                                <div className="col-md">
                                                    <div className="form-group">
                                                        <div className="form-field">
                                                            <div className="icon">
                                                                <i className="fas fa-briefcase" />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="eg. Graphics Designer"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <div className="form-group">
                                                        <div className="form-field">
                                                            <div className="select-wrap">
                                                                <div className="icon">
                                                                    <i className="fas fa-map-marker-alt" />
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Lahore"
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <div className="form-group">
                                                        <div className="form-field">
                                                            <input
                                                                type="submit"
                                                                value="Search Internship"
                                                                className="form-control btn btn-primary"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
