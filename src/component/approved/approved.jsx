// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Approved() {
  const { id } = useParams();
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const getDocument = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/getDocument/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setDocumentData(data);
        } else {
          console.error(`Request failed with status ${response.status}`);
        }
      } catch (error) {
        console.error("Request error:", error.message);
      }
    };

    getDocument();
  }, [id]);

  console.log(documentData);
  return <h1>Hall</h1>; // You can replace this with your JSX rendering logic
}

export default Approved;
