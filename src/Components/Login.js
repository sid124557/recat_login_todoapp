import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import Data from './Data';
import Cookies from "react-cookie";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    
    const pass= Data.map((item) => { return  item.pwd });
    
    const mail= Data.map((item) => { return  item.username });
    
    console.log(mail)
    console.log(pass)


    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (!pass.includes(passwordlog) || !mail.includes(emaillog)) {
      setFlag(true);
      const cookies = new Cookies();
      cookies.set(passwordlog, emaillog, { path: '/' });
      console.log(document.cookie);
      localStorage.setItem("passwordlog", JSON.stringify(passwordlog));
      localStorage.setItem("Email", JSON.stringify(emaillog));
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
