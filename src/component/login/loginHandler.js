const HandleLogin = async (username, password, id) => {
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
        const idAlreadyApprove = approvalData.checkresults[0].id;
        const idApproveSuccess = approvalData.checkresults[0].id;

        const STORAGEKEY = "KEY";
        sessionStorage.setItem(STORAGEKEY, username);

        if (approvalData.message === "Document Already Approved") {
          return { message: "Document Already Approved", idAlreadyApprove };
        } else {
          return { message: "Approved Succesful", idApproveSuccess };
        }
      } else {
        const errorData = await sendApprovedResponse.json();
        console.error("Document approval error:", errorData.message);
        return "Document Not Found";
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

export default HandleLogin;
