import { useRef } from "react";
import Hero from "../../Component/Hero/Hero";

const Home = () => {
  const heroRef = useRef(null);
  return (
    <div>
      <div className=" h-[100vh] bg-[red]">
        <Hero heroRef={heroRef}></Hero>
      </div>
      <div className=" h-[100vh] bg-[green] px-[4vw]">home</div>
    </div>
  );
};

export default Home;
