import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../home/Header/Navbar";
import TopBlogs from "./TopBlogs";
import LatestBlogs from "./LatestBlogs";
import Footer from "../footer/Footer";

export default class Blog extends Component {
    render() {
        return (
            <div>
                <header className="blog">
                    <Navbar />
                    <div className="container">
                        <nav className="crumbs" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Blog
                                </li>
                            </ol>
                        </nav>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <TopBlogs />
                        </div>
                        <div className="col-md-3">
                            <LatestBlogs />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
