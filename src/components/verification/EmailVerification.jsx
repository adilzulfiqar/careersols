import React, { Component } from "react";
import Axios from "axios";

export default class EmailVerification extends Component {
    render() {

        Axios.post("/api/user/EmailVerification", {
            _id: this.props.match.params.id
        })
            .then(e => {
                console.log("User updated", e);

            })
            .catch(e => {
                console.log("User does not updated", e);
            });
        console.log("props", this.props.match.params.id);

        return <div>Email Verification</div>;
    }
}
