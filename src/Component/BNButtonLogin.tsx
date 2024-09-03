import { Button } from "antd";

const BNButtonLogin = ({ textS, text, children }: any) => {
  return (
    <Button
      id="loginButton"
      style={{ display: "flex", justifyContent: "space-between", width: "60%" }}
    >
      <h1 className=" md:text-[3.5vw] text-[5vw] lg:text-[1.5vw]">
        {children}
      </h1>
      <h1 className=" font-semibold md:block lg:block hidden ">{text}</h1>
      <h1 className=" font-semibold block md:hidden lg:hidden">{textS}</h1>
      <h1 className=" hidden border-2 w-[2vw] h-[2vw] border-red-500"></h1>
    </Button>
  );
};

export default BNButtonLogin;
