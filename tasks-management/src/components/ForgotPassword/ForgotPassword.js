import * as React from 'react';
import './forgot.css'

const forgotpassword = () => (
    <div>
        <div className="wrapper" id="login_form">
            <div id="formContent">
                <div className="fadeIn">
                    <h4>Forgot Password</h4>
                    <br />
                </div>
                <form>
                    <label className="fadeIn first">Enter the username and the system will email you instructions to reset your password.</label>
                    <br />
                    <br />
                    <label className="fadeIn first">Username</label>
                    <div>
                        <input type="text" id="login" className="fadeIn first" name="login" placeholder="username" />
                    </div>
                    <br />
                    <div>
                        <input type="button"  className="fadeIn first" value="Request password reset" /> <a href="/Home" className="fadeIn first">Cancel</a>   
                    </div>
                    <p className="fadeIn fifth">
                        This example illustrates a call to the following endpoint with a POST containing the username in the body. /users/reset-password
                    </p>
                    <div id="forgot_message"></div>
                </form>
            </div>
        </div>
 </div>
);

export default forgotpassword;