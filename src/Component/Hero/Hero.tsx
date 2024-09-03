// import hero from "../../assets/heroSection.mp4";
import { Link, useOutletContext } from "react-router-dom";
import hero2 from "../../assets/herosection2.mp4";
import { useContext } from "react";
import { mainContext } from "../../App";
type OutletContextType = [React.RefObject<HTMLDivElement>?];

const Hero = () => {
  const context = useContext(mainContext);
  const [heroRef] = useOutletContext<OutletContextType>();
  if (!context) {
    return;
  }
  const { heRef } = context;
  return (
    <div ref={heroRef && heroRef} className=" relative  w-full h-full">
      <div className=" over"></div>
      <video
        className=" w-full h-full object-cover"
        muted
        autoPlay
        loop
        src={hero2}
      ></video>
      <div className=" BannerText  text-[#FFFCF1] bottom-0 m-0 p-0 z-[600] absolute mx-[2%] ">
        <h1 className=" text-[15vw] font-extrabold text-center font-proBook whitespace-nowrap inline-block leading-none">
          B
        </h1>
        <h1 className=" text-[15vw] font-extrabold text-center font-proBook whitespace-nowrap inline-block leading-none">
          O
        </h1>
        <h1 className=" text-[15vw] font-extrabold text-center font-proBook whitespace-nowrap inline-block leading-none">
          O
        </h1>
        <h1 className=" text-[15vw] font-extrabold text-center font-proBook whitespace-nowrap inline-block leading-none">
          K
        </h1>
        <h1 className=" text-[15vw] font-extrabold text-center font-proBook whitespace-nowrap inline-block leading-none">
          N
        </h1>
        <h1 className=" text-[15vw] font-extrabold text-center font-proBook whitespace-nowrap inline-block leading-none">
          E
        </h1>
        <h1 className=" text-[15vw] font-extrabold text-center font-proBook whitespace-nowrap inline-block leading-none">
          S
        </h1>
        <h1 className=" text-[15vw] font-extrabold text-center font-proBook whitespace-nowrap inline-block leading-none">
          T
        </h1>
      </div>
      <div className=" space-y-[3.5vw] text-center Head absolute left-[50%] z-[400] -translate-y-[50%]  -translate-x-[50%] top-[50%] text-[#FFFCF1]">
        <h1
          ref={heRef}
          className=" text-[5vw] text-left leading-none w-max font-plainLight headline"
        >
          Book Your Ideal <br />
          <span className=" mix-blend-difference font-proBook font-bold text-[] ">
            Meeting Room
          </span>{" "}
          with Ease.
        </h1>
        <h6 className=" lg:text-[2.5vw] pb-[1vw] leading-none text-[3.5vw] font-silkSerifRegular subHeadline">
          Efficient, hassle-free room booking for all your meeting needs
        </h6>
        <Link to="/meeting-rooms">
          <button className=" bg-[#151515] lg:text-[1.5vw] md:text-[2vw] text-[2.8vw] hover:scale-x-90 transition-all rounded-full px-[1.5vw] py-[1vw] font-plainLight">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
