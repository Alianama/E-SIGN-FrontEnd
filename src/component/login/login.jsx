// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleLogin = async () => {
    try {
      const loginResponse = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        console.log("Login successful", loginData);

        const sendApprovedResponse = await fetch(
          `http://localhost:3000/approved/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          }
        );

        if (sendApprovedResponse.ok) {
          const approvalData = await sendApprovedResponse.json();
          console.log("Document Approved", approvalData);
          if (approvalData.message === "Document already approved") {
            navigate("/alreadyapprove");
          } else {
            console.log(approvalData.message);
            navigate(`/approved/${id}`);
          }
        } else {
          const errorData = await sendApprovedResponse.json();
          console.error("Document approval error:", errorData.message);
          navigate("/notfound");
        }
      } else {
        console.error(
          "Login failed:",
          loginResponse.status,
          loginResponse.statusText
        );
      }
    } catch (error) {
      console.error("Request error:", error.message);
    }
  };

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
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />

      <input
        style={inputStyle}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "105%",
          height: "30px",
          // borderColor: "#F56905",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#00A390",
          color: "white",
        }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
export default Login;
