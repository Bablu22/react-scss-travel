import React from 'react'

function Login({ handleChange }) {
    return (
        <form>
            <div className="modal_heading">
                <h3>Login</h3>
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
                    value="Login"
                    className="btn-dark"
                />
                <span onClick={handleChange}>Crate account ?</span>
            </div>
        </form>
    )
}

export default Login


