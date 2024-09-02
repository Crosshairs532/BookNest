import { useRef } from "react";
import Hero from "../../Component/Hero/Hero";
import Service from "./Service";
import FeaturedRoom from "./FeaturedRoom";
import WhyChoose from "./WhyChoose";
import HowItWorks from "./HowItWorks";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <div className=" h-[50vh] border-2 lg:h-[100vh]">
        <Hero></Hero>
      </div>
      <div className=" min-h-[100vh] px-[4vw]">
        <Service />
        <FeaturedRoom />
        <WhyChoose />
        <HowItWorks />
      </div>
      <div className=" mx-[4vw]">
        <Review />
      </div>
    </div>
  );
};

export default Home;
