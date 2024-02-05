// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import HandleLogin from "./loginHandler";

// eslint-disable-next-line react/prop-types
function Login() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [username, setUsernameValue] = useState("");
  const [password, setPasswordValue] = useState("");

  function LoginHandler() {
    HandleLogin(username, password, id).then((e) => {
      console.log(e);
      // if (e !== undefined) {
      //   navigate(`/approved/${e}`);
      // }
      if (e !== undefined) {
        navigate(`/alreadyapprove/${e}`);
      }
    });
  }

  const inputStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "20px",
    border: "1px solid",
    borderColor: "#F56905",
    padding: "5px",
    borderRadius: "10px",
  };

  const loginFormStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "30px",
    color: "black",
    borderRadius: "20px",
  };

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
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "105%",
          height: "30px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#00A390",
          color: "white",
        }}
        onClick={LoginHandler}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
