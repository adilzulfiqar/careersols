import React, { Component } from "react";

import Header from "./Header/Header";
import Services from "../services/Services";
import Internship from "../InternshipCandidate/Internship";
import Candidate from "../InternshipCandidate/Candidate";
import Subsciption from "../Subsciption";
import Footer from "../footer/Footer";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Services />
                <Internship />
                <Candidate />
                <Subsciption />
                <Footer />
            </div>
        );
    }
}
