import React, { Component } from "react";
import "./BigScore-ContactUs-Section1.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

class BigscoreContactusSection1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailBody: {
                name: "",
                email: "",
                phoneNumber: "",
                message: "",
            },
        };
        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail = async (e) => {
        e.preventDefault();

        await emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_USER_ID}`).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );

        await e.target.reset();
        await Swal.fire({
            icon: "success",
            title: "<strong>Pesan Terkirim!</strong>",
            footer: "<p>Tunggu Response 1 hingga 4 hari kerja</p>",
            timer: "3000",
        });
    };

    render() {
        return (
            <div id="BigScore-ContactUs-Section1">
                <div className="row BigScore-ContactUs-Section1-Content-Container">
                    <div className="col-5" data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
                        <h1 className="BigScore-ContactUs-Section1-Title">Contact our team</h1>
                        <p className="BigScore-ContactUs-Section1-Desc">We are happy to answer your question</p>
                    </div>
                    <div className="col-7" data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
                        <form action="" className="BigScore-ContactUs-Section1-Form-Container" onSubmit={this.sendEmail}>
                            {/* <label htmlFor="">Subject</label>
                            <br />
                            <input className="container" placeholder="Your email subject" type="text" name="Name" id="" />
                            <br /> */}
                            <label htmlFor="">Name</label>
                            <br />
                            <input className="container" placeholder="Your name" type="text" name="Name" id="" />
                            <br />
                            <label htmlFor="">Email</label>
                            <br />
                            <input className="container" placeholder="youremail@example.com" type="text" name="Email" id="" />
                            <br />
                            <label htmlFor="">Phone number</label>
                            <br />
                            <input className="container" placeholder="08123456789" type="text" name="PhoneNumber" id="" />
                            <br />
                            <label htmlFor="">Message</label>
                            <br />
                            <textarea className="container" placeholder="Message" name="Message" id="" cols="30" rows="10"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>{" "}
                </div>
            </div>
        );
    }
}

export default BigscoreContactusSection1;
