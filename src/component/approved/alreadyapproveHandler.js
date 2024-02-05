const alreadyApproveHandler = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/getapprove/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      // console.log(await response.json());

      return data.parseddata;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default alreadyApproveHandler;
