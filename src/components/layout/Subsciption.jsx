import React, { Component } from "react";

export default class Subsciption extends Component {
    render() {
        return (
            <section className="subscription">
                <div className="container text-center">
                    <h1>
                        Subscribe to our <b>Newsletter</b>
                    </h1>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <form action="#" className="subscribe-form">
                                <div className="form-group d-flex">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter email address"
                                    />
                                    <input
                                        type="submit"
                                        value="Subscribe"
                                        className="submit btn btn-success"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
