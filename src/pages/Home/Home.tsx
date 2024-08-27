import { useRef } from "react";
import Hero from "../../Component/Hero/Hero";
import Service from "./Service";
import FeaturedRoom from "./FeaturedRoom";
import WhyChoose from "./WhyChoose";

const Home = () => {
  const heroRef = useRef(null);
  return (
    <div>
      <div className=" h-[100vh]">
        <Hero heroRef={heroRef}></Hero>
      </div>
      <div className=" min-h-[100vh] px-[4vw]">
        <Service></Service>
        <FeaturedRoom />
        <WhyChoose />
      </div>
    </div>
  );
};

export default Home;
