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
      <div className=" login_container">
        <div className="login-logo text-white">
          <h1 className="">
            <PiXLogoLight />
          </h1>
          <h2>BookNest</h2>
        </div>
        <div className="login_form mt-4">
          <div className=" flex-grow">
            <BNForm>
              <BNInput type="email" label="Email Address" name="email" />
              <BNInput type="text" label="Password" name="password" />
              <Button htmlType="submit">LOG IN</Button>
            </BNForm>
          </div>
          <div className=" flex justify-center items-center w-[10%]  flex-col">
            <Divider type="vertical" />
            <h1>or</h1>
            <Divider type="vertical" />
          </div>

          <div className="social flex-grow flex flex-col justify-center items-center gap-4">
            <BNButtonLogin text="Continue with Google">
              <FcGoogle></FcGoogle>
            </BNButtonLogin>
            <BNButtonLogin text="Continue with Facebook">
              <CiFacebook></CiFacebook>
            </BNButtonLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
