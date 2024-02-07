import ShowAllApprovedHandler from "./showAllApprovedHanlder";

export default function ShowAllApproved() {
  ShowAllApprovedHandler().then((e) => {
    console.log(e);
  });

  return <h1>hai</h1>;
}
