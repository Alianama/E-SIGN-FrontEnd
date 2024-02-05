// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import alreadyApproveHandler from "./alreadyapproveHandler";

function AlreadyApprove() {
  const [username, setUsername] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [documentSource, setdocumentSource] = useState("");
  const [ApprovedDate, setApprovedDate] = useState("");

  const { id } = useParams();
  useEffect(() => {
    alreadyApproveHandler(id).then((e) => {
      setUsername(e.username);
      setDocumentName(e.document_name);
      setdocumentSource(e.document_source);
      setApprovedDate(e.date);
    });
  }, []);

  return (
    <>
      <h1>Docuemnt Already Approved</h1>
      <p>PIC : {username}</p>
      <p>Docuemnt Name : {documentName}</p>
      <p>Docuemnt Source : {documentSource}</p>
      <p>Approved Date : {ApprovedDate}</p>
    </>
  );
}
export default AlreadyApprove;
