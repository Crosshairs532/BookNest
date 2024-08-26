import { PiXLogoLight } from "react-icons/pi";
import BNForm from "../Component/BNForm";
import BNInput from "../Component/BNInput";
import { Button, Divider } from "antd";
import BNButtonLogin from "../Component/BNButtonLogin";
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";

const Login = () => {
  return (
    <div className="login  w-full h-screen bg-[#FFFFF]">
      <div className=" w-[100vw] login_container  lg:w-[55vw] border-2 border-yellow-300 lg:h-[25vw] flex justify-center flex-col items-center gap-[2vw]">
        <div className="login-logo text-white">
          <h1 className=" text-[10vw] lg:text-[2.5vw] text-[#141414]">
            <PiXLogoLight />
          </h1>
          <h2 className="  text-[6vw] lg:text-[2.2vw] lg:font-medium md:font-medium font-bold">
            BookNest
          </h2>
        </div>
        <div className="login_form w-[85%]  space-y-[3vw]  lg:flex justify-between lg:w-[90%] mt-4">
          <div className="  lg:flex-grow border-2 border-red-500  lg:w-[45%] ">
            <BNForm>
              <BNInput type="email" label="Email Address" name="email" />
              <BNInput type="text" label="Password" name="password" />
              <Button htmlType="submit">LOG IN</Button>
            </BNForm>
          </div>
          <div className=" hidden  lg:flex justify-center items-center w-[10%] flex-col">
            <Divider
              variant="solid"
              style={{ height: "100%", borderColor: "#E7E7E7" }}
              type="vertical"
            />
            <h1>or</h1>
            <Divider
              variant="solid"
              style={{ height: "100%", borderColor: "#E7E7E7" }}
              type="vertical"
            />
          </div>
          <div className=" social border-2 border-green-500 lg:w-[45%] flex-grow flex  lg:flex-col justify-center items-center gap-4">
            <BNButtonLogin textS="Google" text="Continue with Google">
              <FcGoogle></FcGoogle>
            </BNButtonLogin>
            <BNButtonLogin textS="Facebook" text="Continue with Facebook">
              <CiFacebook></CiFacebook>
            </BNButtonLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
