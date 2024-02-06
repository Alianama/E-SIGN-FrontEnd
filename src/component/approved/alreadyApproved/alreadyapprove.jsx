// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import alreadyApproveHandler from "../alreadyApproved/alreadyapproveHandler";
import DocIcon from "../../../assets/icon/Doc.svg";
import {
  mainStyle,
  labelStyle,
  dataStyle,
  tableStyle,
  iconContainerStyle,
  iconStyle,
} from "./alreadyApproveStyle";

function AlreadyApprove() {
  const [username, setUsername] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [documentSource, setdocumentSource] = useState("");
  const [ApprovedDate, setApprovedDate] = useState("");

  const { id } = useParams();
  useEffect(() => {
    alreadyApproveHandler(id).then((e) => {
      setUsername(e.parseddata.username);
      setDocumentName(e.parseddata.document_name);
      setdocumentSource(e.parseddata.document_source);
      setApprovedDate(e.parseddata.date);
    });
  }, [id]);

  return (
    <main style={mainStyle}>
      <div>
        <h1>Document Already Approved</h1>
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
              <td style={dataStyle}>{ApprovedDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default AlreadyApprove;
