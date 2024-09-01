import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import home1 from "../../../public/room.svg";
import confirm from "../../../public/confirm.svg";

gsap.registerPlugin(useGSAP);

const HowItWorks = () => {
  const HowItWorksRef = useRef(null);
  const date = new Date().toUTCString();
  useGSAP(
    () => {},

    {
      scope: HowItWorksRef,
    }
  );

  return (
    <div className=" relative" ref={HowItWorksRef}>
      <span className=" how_cursor border-2 border-[#141414] m-0 w-max lg:inline-block hidden h-max p-[4vw] rounded-full">
        <svg
          className="button__arrow -rotate-[45deg] w-[8vw] h-[8vw] "
          viewBox="0 0 91 118"
          fill="none"
        >
          <path
            d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>

      <h2 className="  w-max mt-[5vw] text-[8vw] 2 font-semibold relative left-[23vw] font-plainLight mb-8 text-[#151515] ">
        <small className=" text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
          04
        </small>
        How It Works.
      </h2>

      <div className=" relative  space-y-2 w-max left-[40vw]">
        <div className=" work room">
          <div className=" hoverlay transition-all flex justify-center items-center top-0  left-0 absolute bg-[#FFFFFF] w-[6vw] h-[6vw] rounded-full">
            <img className=" w-[3vw] h-[3v2]" src={home1} alt="" />
          </div>
          <h1 className=" text-[1.7vw]">
            <span>1.</span>
            Select
            <span className=" w-[10vw] rounded-full bg-black h-[6vw]"></span>
            Rooms that suits your preference
          </h1>
        </div>
        <div className=" work data">
          <div className=" hoverlay transition-all flex justify-center items-center top-0 left-0 absolute w-[6vw] h-[6vw] bg-[black] rounded-full">
            <span className=" text-[#FFFCF1] text-[.7vw] w-[50%]">{date}</span>
          </div>
          <h1 className=" text-[1.7vw]">
            <span>2.</span>
            Choose Date <span className="  italic font-silkSerifLight">&</span>
            Time
          </h1>
        </div>
        <div className=" work confirm">
          <div className=" hoverlay transition-all flex justify-center items-center top-0  left-0 absolute bg-[#FFFFFF] w-[6vw] h-[6vw] rounded-full">
            <img className=" w-[3vw] h-[3v2]" src={confirm} alt="" />
          </div>
          <h1 className=" text-[1.7vw]">
            <span>3.</span>
            Confirm Booking
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
