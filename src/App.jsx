import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./component/login/login";
import Approved from "./component/approved/approved";
import AlreadyApprove from "./component/approved/alreadyapprove";

function NotFound() {
  return <h1>Document not Found</h1>;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login/:id" element={<Login />} />
          <Route path="/approved/:id" element={<Approved />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/alreadyapprove/:id" element={<AlreadyApprove />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
