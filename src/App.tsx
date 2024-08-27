import { Outlet } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const App = () => {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  useGSAP(
    () => {
      const hero = heroRef?.current;
      const loadingTL = gsap.timeline({});

      loadingTL.from(
        ".loadingText",
        {
          x: 50,
          opacity: 0,
        },
        "a"
      );
      loadingTL.from(
        ".loadingText h1",
        {
          x: 50,
          opacity: 0,
          duration: 1,
          stagger: {
            amount: 0.4,
            from: "start",
          },
          ease: "power1.out",
        },
        "a-=.01"
      );
      loadingTL.to(
        ".loadingText h1",
        {
          x: -20,
          opacity: 0,
          delay: 0.5,
          duration: 0.5,
          stagger: 0.1,
        },
        "b"
      );

      loadingTL
        .from(
          hero?.querySelectorAll("h1"),
          {
            opacity: 0,
            delay: 0.4,
            stagger: {
              amount: 0.5,
              from: "start",
            },
            y: 100,
            ease: "power3.out",
          },
          "b"
        )
        .to(".preloading", {
          opacity: 0,
          duration: 1,
          delay: 1,
          display: "none",
        });
    },
    {
      scope: mainRef,
    }
  );

  return (
    <div ref={mainRef} className="">
      <div className=" preloading fixed flex justify-center items-center z-[600] h-full w-full bg-[#0e0e0e]">
        <div className=" loadingText  overflow-hidden w-max space-x-2  text-[#FFFCF1] text-[4vw]">
          <h1 className=" whitespace-nowrap inline-block">The</h1>
          <h1 className=" whitespace-nowrap inline-block">Venture</h1>
          <h1 className=" whitespace-nowrap inline-block">Agency.</h1>
        </div>
      </div>
      <div className="">
        <Navbar></Navbar>
        <Outlet context={[heroRef]} />
      </div>
    </div>
  );
};

export default App;
