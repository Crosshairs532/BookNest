import BNInput from "../Component/BNInput";
import { Button, ConfigProvider } from "antd";
import { useRegisterMutation } from "../redux/features/auth/auth.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import BNFromWatch from "../Component/BNFormWatch";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TRegistration } from "../Types";

const Registration = () => {
  const [check, setOnCheck] = useState(false);
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const id = toast.loading("wait a moment..");
    const RegisterInfo: TRegistration = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      role: "user",
      address: data.address,
    };

    try {
      console.log(RegisterInfo, "Register user ");
      const res = await register(RegisterInfo);

      if (res.data) {
        toast.success("Registration Success", {
          id,
          duration: 2000,
          cancel: {
            label: "Cancel",
            onClick: () => {
              console.log("Cancel clicked");
            },
          },
        });
        navigate("/login");
      }
      if (res?.error?.data?.message) {
        toast.error(res.error.data.message, { id });
      }
    } catch (err) {
      toast.error(err?.message, { id });
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
          <h1
            onClick={() => {
              navigate(`${location.state}`);
            }}
            className=" md:text-[2vw] lg:text-[1vw] text-[3.5vw] font-semibold"
          >
            BACK
          </h1>
        </div>
        <div className=" createAccount">
          <h1 className=" md:text-[2vw] lg:text-[1vw] text-[3vw] font-semibold tracking-normal font-plainRegular">
            LOG IN
          </h1>
        </div>
      </div>
      <div className=" w-[100vw] login_container lg:w-[55vw] lg:h-[25vw] flex justify-center flex-col items-center gap-[2vw]">
        <div className="login-logo text-white">
          <h2 className="  text-[6vw] lg:text-[2.2vw] lg:font-medium md:font-medium font-bold">
            Create Your Account
          </h2>
        </div>
        <div className="login_form w-[85%]  space-y-[3vw]  lg:flex justify-between lg:w-[50%] mt-4">
          <div className=" lg:flex-grow lg:w-[45%] ">
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimary: "#151515",
                    colorPrimaryActive: "#222222",
                    algorithm: true,
                  },
                },
              }}
            >
              <BNFromWatch onSubmit={onSubmit}>
                <BNInput
                  setOnCheck={setOnCheck}
                  type="text"
                  label="Name"
                  name="name"
                />
                <BNInput
                  type="email"
                  label="Email Address"
                  name="email"
                  setOnCheck={setOnCheck}
                />
                <BNInput
                  setOnCheck={setOnCheck}
                  type="text"
                  label="Password"
                  name="password"
                />
                <BNInput
                  setOnCheck={setOnCheck}
                  type="text"
                  label="Phone No."
                  name="phone"
                />
                <BNInput
                  setOnCheck={setOnCheck}
                  type="text"
                  label="Address"
                  name="address"
                />
                <Button disabled={!check} type="primary" htmlType="submit">
                  CONTINUE
                </Button>
              </BNFromWatch>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
