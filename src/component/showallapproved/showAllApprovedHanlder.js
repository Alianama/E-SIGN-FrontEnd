const getAllApprovedhandler = async function () {
  const STORAGEKEY = "username";
  const username = sessionStorage.getItem(STORAGEKEY);
  console.log(username);

  try {
    const response = await fetch(`http://localhost:3000/getallapproved`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    if (response.ok) {
      const data = await response.json();
      const dataraw = data.data;
      console.log(dataraw);
      return dataraw;
    } else {
      const errorData = await response.json();
      console.error("Error message:", errorData.message);
      throw new Error(errorData.message);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default getAllApprovedhandler;
