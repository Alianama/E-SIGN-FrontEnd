// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import alreadyApproveHandler from "./alreadyapproveHandler";
import DocIcon from "../../../assets/icon/Doc.svg";
import HomeIcon from "../../../assets/icon/Home.svg";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import {
  HomeIconStyle,
  titleWrapperStyle,
  HomeButtonStyle,
  mainStyle,
  labelStyle,
  dataStyle,
  tableStyle,
  iconContainerStyle,
  iconStyle,
} from "./alreadyApproveStyle";

function Approve() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [documentSource, setdocumentSource] = useState("");
  const [ApprovedDate, setApprovedDate] = useState("");

  const { id } = useParams();

  useEffect(() => {
    alreadyApproveHandler(id).then((e) => {
      setUsername(e.data[0].name);
      setDocumentName(e.data[0].document_name);
      setdocumentSource(e.data[0].document_source);
      setApprovedDate(e.data[0].date);
    });
  }, [id]);

  function HomeHandler() {
    navigate("/home");
  }

  return (
    <main style={mainStyle}>
      <div style={titleWrapperStyle}>
        <h2>Approved Successful</h2>
      </div>
      <button style={HomeButtonStyle} onClick={HomeHandler}>
        <img src={HomeIcon} alt="Home" style={HomeIconStyle} />
        Home
      </button>
      <div style={iconContainerStyle}>
        <img src={DocIcon} style={iconStyle} alt="Document Icon" />
        <div className="tabelContainer">
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={labelStyle}>Approved By </td>
                <td style={labelStyle}>: </td>
                <td style={dataStyle}>{username}</td>
              </tr>
              <tr>
                <td style={labelStyle}>Document Name </td>
                <td style={labelStyle}>: </td>
                <td style={dataStyle}>{documentName}</td>
              </tr>
              <tr>
                <td style={labelStyle}>Document Source </td>
                <td style={labelStyle}>: </td>
                <td style={dataStyle}>{documentSource}</td>
              </tr>
              <tr>
                <td style={labelStyle}>Approved Date </td>
                <td style={labelStyle}>: </td>
                <td style={dataStyle}>
                  {dayjs(ApprovedDate).format("DD-MMMM-YYYY")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Approve;
