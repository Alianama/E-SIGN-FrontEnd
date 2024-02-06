// eslint-disable-next-line no-unused-vars
import React from "react";
import "./sucessStyle.css";
import { useNavigate, useParams } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleApprovedClick = () => {
    navigate(`/approved/${id}`);
  };

  return (
    <div className="container">
      <h1 className="title">Approved Successfull</h1>
      <div className="success-animation">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <button className="button" onClick={handleApprovedClick}>
        See Detail
      </button>
    </div>
  );
}

export default Success;
