const express = require("express");
const router = express.Router();

var nodemailer = require("nodemailer");

// bcript
const bcrypt = require("bcrypt");

const Users = require("../modals/users.js");

// Post new user Api
router.post("/register", (req, res) => {
    // console.log(req);

    // a simple if/else to check if email already exists in db
    Users.findOne({
        email: req.body.email
    }).then(user => {
        //if a user was found, that means the user's email matches the entered email
        if (user) {
            console.log("User Already Registered");
            res.status(400).send("Bad request. User Already Registered");
        } else {
            //code if no user with entered email was found
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(req.body.password, salt, function (err, hash) {
                    if (err) {
                        return console.log("Error Hash");
                    } else {
                        const newUser = new Users({
                            email: req.body.email,
                            password: hash
                        });
                        newUser
                            .save()
                            .then(data => {
                                res.json(data);
                                var transporter = nodemailer.createTransport({
                                    // service: "gmail",
                                    // auth: {
                                    //     user: "madilzulf@gmail.com",
                                    //     pass: "Mutation62"
                                    // }

                                    host: 'mail.careersols.com',
                                    port: 465,
                                    secure: true, // true for 465, false for other ports
                                    auth: {
                                        user: 'tech@careersols.com', // your domain email address
                                        pass: '56HlX[duxcQo' // your password
                                    }
                                });

                                var mailOptions = {
                                    from: "tech@careersols.com",
                                    to: data.email,
                                    subject: "Hello There Please activate your acount",
                                    text: `Hi, Thanks for your Registration. Please varify you email by clicking this link http://localhost:3000//verification/${data._id}`
                                    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
                                    // https://careersols.herokuapp.com
                                };

                                transporter.sendMail(mailOptions, function (
                                    error,
                                    info
                                ) {
                                    if (error) {
                                        console.log(
                                            "error in send email",
                                            error
                                        );
                                    } else {
                                        console.log(
                                            "Email sent: " + info.response
                                        );
                                    }
                                });
                            })
                            .catch(e => console.log("error after save"));
                    }
                });
            });
        }
    });
});

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