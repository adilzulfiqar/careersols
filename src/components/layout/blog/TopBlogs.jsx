import React, { Component } from "react";

export default class TopBlogs extends Component {
    render() {
        return (
            <section className="top-blogs">
                <h1 className="heading">Top Blogs</h1>
                <div className="card mb-4">
                    <img
                        className=""
                        src="http://sv1.upsieutoc.com/2017/08/30/js.jpg"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h2 className="card-title">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </h2>
                        <p className="card-text">
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Read More
                        </a>
                    </div>
                    <div className="card-footer text-muted">
                        Posted on January 8
                    </div>
                </div>
            </section>
        );
    }
}
