import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("password"));
    emailInputRef.current.value = localStorage.getItem("email");
    passwordInputRef.current.value = localStorage.getItem("password");
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      valiadateLogin();
    }
  }, []);

  let valiadateLogin = async () => {
    let dataToSend = new FormData();
    dataToSend.append("email", emailInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);

    let reqOptions = {
      method: "POST",
      body: dataToSend,
    };
    let JSONData = await fetch("http://localhost:13189/login", reqOptions);
    let JSOData = await JSONData.json();

    if (JSOData.status == "success") {
      dispatch({ type: "login", data: JSOData.data });

      navigate("/dashboard");
    } else {
      alert(JSOData.msg);
    }

    console.log(JSOData);
  };

  return (
    <div className="formCountainer">
      <form>
        <div>
          <h2>Sign In</h2>
          <div>
            <input
              className="loginInput"
              type="email"
              placeHolder="Enter Your Email"
              ref={emailInputRef}
            ></input>
          </div>
          <div>
            <input
              className="loginInput"
              type="password"
              placeholder="Enter Your Password"
              ref={passwordInputRef}
            ></input>
          </div>

          <div>
            <button
              type="button"
              onClick={() => {
                valiadateLogin();
              }}
            >
              Login
            </button>
          </div>
          <div className="signUp">
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Signup
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
