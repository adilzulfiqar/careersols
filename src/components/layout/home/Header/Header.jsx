import React, { Component } from "react";

import Navbar from "./Navbar";
import HomeContent from "./HomeContent";

export default class Header extends Component {
    render() {
        return (
            <header>
                <Navbar />
                <HomeContent />
            </header>
        );
    }
}
