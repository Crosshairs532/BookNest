import { Button } from "antd";

const BNButtonLogin = ({ text, children }) => {
  return (
    <Button
      id="loginButton"
      style={{ display: "flex", justifyContent: "space-between", width: "60%" }}
    >
      <h1>{children}</h1>
      <h1>{text}</h1>
      <h1 className=" border-2 w-3 h-3 border-red-500"></h1>
    </Button>
  );
};

export default BNButtonLogin;
