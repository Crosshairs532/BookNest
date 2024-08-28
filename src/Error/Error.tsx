import { Link, useNavigate } from "react-router-dom";
import errorVid from "../assets/error.webm"; // Make sure to use the correct path

const YourComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex justify-center items-center relative">
      <h1 className="z-[10] text-[5vw] font-extrabold font-proBook">
        404 - PAGE NOT FOUND
      </h1>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        loop
        autoPlay
        src={errorVid}
      ></video>
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
              navigate("/", {
                replace: true,
              });
            }}
            className=" md:text-[2vw] lg:text-[1vw] text-[3.5vw] font-semibold"
          >
            HOME
          </h1>
        </div>
        <div className=" createAccount">
          <h1
            onClick={() => {
              navigate("/login", {
                replace: true,
              });
            }}
            className=" md:text-[2vw] lg:text-[1vw] text-[3vw] font-semibold tracking-normal font-plainRegular"
          >
            login
          </h1>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
