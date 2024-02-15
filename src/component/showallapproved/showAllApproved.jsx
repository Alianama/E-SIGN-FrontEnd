// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ShowAllApprovedHandler from "./showAllApprovedHanlder";
import { useParams, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import {
  tableHeaderStyle,
  tableCellStyle,
  tableStyle,
} from "./showwAllApprovedStyle";
import Button1 from "../button/button1";

const cehckusername = useParams.username;

export default function ShowAllApproved() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  function logout() {
    navigate(`/`);
  }

  useEffect(() => {
    ShowAllApprovedHandler().then((result) => {
      setData(result);
      if (cehckusername === null) {
        navigate(`/`);
      }
    });
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
        All Approved Document
      </h1>
      <Button1 buttonName="LogOut" onClick={logout} />

      <table style={tableStyle}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", color: "black" }}>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Document Name</th>
            <th style={tableHeaderStyle}>Document Source</th>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Approved</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tableCellStyle}>{item.name}</td>
              <td style={tableCellStyle}>{item.document_name}</td>
              <td style={tableCellStyle}>{item.document_source}</td>
              <td style={tableCellStyle}>
                {dayjs(item.date).format("DD MMM YYYY HH.mm")}
              </td>
              <td style={tableCellStyle}>
                {item.approved === 1 ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
