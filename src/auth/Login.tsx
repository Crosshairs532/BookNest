import { PiXLogoLight } from "react-icons/pi";
import BNForm from "../Component/BNForm";
import BNInput from "../Component/BNInput";
import { Button, Divider } from "antd";
import BNButtonLogin from "../Component/BNButtonLogin";
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/auth.api";
import { useAppSelector } from "../redux/hook";
import { loginState, setUser } from "../redux/features/auth/authSlice";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login] = useLoginMutation();
  const selector = useAppSelector(loginState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const loginInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const id = toast.loading("Loggin..");
      const res = await login(loginInfo).unwrap();
      const userInfo = {
        current_user: res.data,
        token: res.token,
      };

      toast.success("Login Success", {
        id,
        duration: 2000,
        cancel: {
          label: "Cancel",
          onClick: () => toast.dismiss(id),
        },
      });

      dispatch(setUser(userInfo));
      navigate("/home");
    } catch (err) {
      toast.error(`${err?.message}`);
    }
  };
  return (
    <div className="login  w-full h-screen bg-[#FFFFFF]">
      <div className=" w-full absolute lg:top-[5vw] top-[8vw] px-[8vw] flex justify-between items-center">
        <div className=" flex justify-between items-center gap-[0.9vw] font-plainRegular">
          <svg
            fill="currentColor"
            height="22"
            viewBox="0 0 22 22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="BackArrow-stem-zLMkj BackArrow-exited-OVpTp"
              height="2"
              width="0"
              x="7"
              y="10"
            ></rect>
            <path
              className="BackArrow-exited-OVpTp"
              d="M15.75 4H13L6 11L13 18H15.75L8.75 11L15.75 4Z"
            ></path>
          </svg>
          <h1 className=" md:text-[2vw] lg:text-[1vw] text-[3.5vw] font-semibold">
            BACK
          </h1>
        </div>
        <div className=" createAccount">
          <h1 className=" md:text-[2vw] lg:text-[1vw] text-[3vw] font-semibold tracking-normal font-plainRegular">
            CREATE ACCOUNT
          </h1>
        </div>
      </div>
      <div className=" w-[100vw] login_container lg:w-[55vw] lg:h-[25vw] flex justify-center flex-col items-center gap-[2vw]">
        <div className="login-logo text-white">
          <h1 className=" text-[10vw] lg:text-[2.5vw] text-[#141414]">
            <PiXLogoLight />
          </h1>
          <h2 className="  text-[6vw] lg:text-[2.2vw] lg:font-medium md:font-medium font-bold">
            BookNest
          </h2>
        </div>
        <div className="login_form w-[85%]  space-y-[3vw]  lg:flex justify-between lg:w-[90%] mt-4">
          <div className="  lg:flex-grow  lg:w-[45%] ">
            <BNForm onSubmit={onSubmit}>
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
          <div className=" social lg:w-[45%] flex-grow flex  lg:flex-col justify-center items-center gap-4">
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
