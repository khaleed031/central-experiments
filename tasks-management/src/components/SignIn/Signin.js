import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './Signin.css'
import { useHistory } from "react-router-dom";
import {getQuerystring} from '../../helper/utils'

const Signin = (props) => {

  const { signinHandeler } = useAppContext();

  const history = useHistory();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signinHandeler(email, password);
    let redirect = getQuerystring("redirect");
    history.push(redirect === "" || redirect === null ? `/Home` : redirect);
  }

  return(
    <div className="signinForm">
            <div className="fadeIn">
                <center>
                WELCOME TO <br/>
                  <h1>CENTRAL</h1>
                </center>
                <br />
      </div>      
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormControl
            autoFocus
            placeholder="Email or Phone Number"
            type="email"
            value={email} 
            onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup controlId="password">
          <FormControl
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <p>
          <input type="checkbox" /> Remember Me
        </p>
        <Button block disabled={!validateForm()} type="submit">
          Sign in
        </Button>
        <br/>
        <center>
          <a href="/forgotpassword">Forgot password?</a>
        </center>
        <br/>
        <center>
        <p>
          New to Central? <a href="/">Join now</a>
        </p>
        </center>
      </form>
    </div>
  )
}

export default Signin;