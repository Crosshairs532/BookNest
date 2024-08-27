// import hero from "../../assets/heroSection.mp4";
import { useOutletContext } from "react-router-dom";
import hero2 from "../../assets/heroSection2.mp4";
const Hero = () => {
  const [heroRef] = useOutletContext();
  return (
    <div ref={heroRef} className=" w-full h-full">
      <video
        className=" w-full h-full object-cover"
        muted
        autoPlay
        loop
        src={hero2}
      ></video>
      <div className=" BannerText  text-[#FFFCF1] bottom-0 m-0 p-0 z-[500] absolute mx-[2%] ">
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
    </div>
  );
};

export default Hero;
