const ApproveHandler = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/getapprove/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default ApproveHandler;
