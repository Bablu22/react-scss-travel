import React from "react";

function Register({ handleChange }) {
    return (
        <form>
            <div className="modal_heading">
                <h3>Create new account</h3>
            </div>
            <div className="group">
                <input
                    type="text"
                    name=""
                    placeholder="Enter name"
                    className="group_control"
                />
            </div>
            <div className="group">
                <input
                    type="email"
                    name=""
                    placeholder="Enter email"
                    className="group_control"
                />
            </div>
            <div className="group">
                <input
                    type="password"
                    name=""
                    placeholder="Enter password"
                    className="group_control"
                />
            </div>
            <div className="group flex space-between y-center">
                <input
                    type="submit"
                    name=""
                    value="Register"
                    className="btn-dark"
                />
                <span onClick={handleChange}>Aleady have an account?</span>
            </div>
        </form>
    );
}


export default Register;
