import React from "react";

function ContactForm() {
    return (
        <form>
            <div className="group">
                <h3 className="page_contact-heading">
                    Contact form
                </h3>
            </div>
            <div className="group">
                <input
                    type="text"
                    placeholder="Your name"
                    className="group_control"
                    name=""
                />
            </div>
            <div className="group">
                <input
                    type="email"
                    placeholder="Your email"
                    className="group_control"
                    name=""
                />
            </div>
            <div className="group">
                <textarea name="" id="" cols="12" rows="8" className="group_textarea" placeholder="Write your message here" />

            </div>
            <div className="group">
                <input type="submit" value="Send Email" className="btn-dark" />
            </div>
        </form>
    );
}

export default ContactForm;
