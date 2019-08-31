const express = require("express");
const router = express.Router();

const Users = require("../modals/users.js");


// update object for Email Verification
router.post("/EmailVerification", (req, res) => {
    Users.findByIdAndUpdate(
        req.body._id, {
            confirmed: true
        },
        (err, res) => {
            if (err) {
                console.log("Error in id", err);
                // res.json(err);
                // res.status(400).send("Bad request. User Already Registered");
            } else {
                console.log("Object Updated", res);
                // res.status(200).send("User Updated");
                // res.json(res);
            }
        }
    );
});

module.exports = router;