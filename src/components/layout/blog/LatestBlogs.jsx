import React, { Component } from "react";

export default class LatestBlogs extends Component {
    render() {
        return (
            <aside className="latest-blogs">
                <h3 className="heading">Latest Blogs</h3>
                <div className="mini-blog">
                    <div className="row">
                        <div className="col-4 thumbnail">
                            <img
                                src="http://sv1.upsieutoc.com/2017/08/30/js.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-8 content">
                            <a className="description" href="#" title="">
                                Canada adds 12,500 jobs in modest July rebound
                            </a>
                            <p>October 25, 2017</p>
                        </div>
                    </div>
                </div>
                <div className="mini-blog">
                    <div className="row">
                        <div className="col-4 thumbnail">
                            <img
                                src="http://sv1.upsieutoc.com/2017/08/30/js.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-8 content">
                            <a className="description" href="#" title="">
                                Canada adds 12,500 jobs in modest July rebound
                            </a>
                            <p>October 25, 2017</p>
                        </div>
                    </div>
                </div>
                <div className="mini-blog">
                    <div className="row">
                        <div className="col-4 thumbnail">
                            <img
                                src="http://sv1.upsieutoc.com/2017/08/30/js.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-8 content">
                            <a className="description" href="#" title="">
                                Canada adds 12,500 jobs in modest July rebound
                            </a>
                            <p>October 25, 2017</p>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}
