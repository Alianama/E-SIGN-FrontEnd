// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HandleLogin from "./loginHandler";
import { inputStyle, loginFormStyle, buttonStyle } from "./loginStyle";

// eslint-disable-next-line react/prop-types
function Login() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [username, setUsernameValue] = useState("");
  const [password, setPasswordValue] = useState("");

  function LoginHandler() {
    HandleLogin(username, password, id).then((e) => {
      console.log(e.message);
      const STORAGEKEY = "username";
      sessionStorage.setItem(STORAGEKEY, username);
      if (e.message === "Document Already Approved") {
        navigate(`/alreadyapprove/${e.idAlreadyApprove}`);
      } else if (e.message === "Document Not Found") {
        navigate(`/home/${username}`);
      } else {
        navigate(`/success/${e.idApproveSuccess}`);
      }
    });
  }

  return (
    <div style={loginFormStyle}>
      <h2>APPROVAL LOGIN</h2>

      <input
        style={inputStyle}
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsernameValue(e.target.value)}
      />

      <br />

      <input
        style={inputStyle}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPasswordValue(e.target.value)}
      />

      <br />
      <button style={buttonStyle} onClick={LoginHandler}>
        Login
      </button>
    </div>
  );
}

export default Login;
