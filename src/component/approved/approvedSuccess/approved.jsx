// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApprovedHandler from "./approvedHandler";
import DocIcon from "../../../assets/icon/Doc.svg";
import dayjs from "dayjs";
import {
  mainStyle,
  labelStyle,
  dataStyle,
  tableStyle,
  iconContainerStyle,
  iconStyle,
} from "./approvedStyle";

function Approve() {
  const [username, setUsername] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [documentSource, setdocumentSource] = useState("");
  const [ApprovedDate, setApprovedDate] = useState("");

  const { id } = useParams();

  useEffect(() => {
    ApprovedHandler(id).then((e) => {
      setUsername(e.data[0].name);
      setDocumentName(e.data[0].document_name);
      setdocumentSource(e.data[0].document_source);
      setApprovedDate(e.data[0].date);
    });
  }, [id]);

  return (
    <main style={mainStyle}>
      <div>
        <h1>Approved Successful</h1>
      </div>
      <div style={iconContainerStyle}>
        <img src={DocIcon} style={iconStyle} alt="Document Icon" />
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
    </main>
  );
}

export default Approve;
