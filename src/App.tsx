import { Outlet } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";

const App = () => {
  return (
    <div className="">
      <div className=" container mx-auto border-2 ">
        <Navbar></Navbar>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
