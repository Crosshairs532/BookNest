import { Outlet } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import { useGSAP } from "@gsap/react";
import { createContext, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./pages/Home/Footer";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export const mainContext = createContext(null);
const App = () => {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const footerRef = useRef(null);
  const heRef = useRef(null);
  const serviceRef = useRef(null);
  const main = document.querySelector(".main");

  useGSAP(
    () => {
      const hero = heroRef?.current;
      const footer = footerRef?.current;
      const service = serviceRef?.current;
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

      const TL = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          scroller: main,
          // markers: true,
          start: "top 70%",
          end: "top 0%",
          scrub: 1,
        },
      });
      TL.from(
        " .footer",
        {
          y: -120,
          opacity: 0,
        },
        "a"
      );
      TL.from(
        ".divider",
        {
          width: 0,
          duration: 1,
        },
        "a+=1"
      );
    },
    {
      scope: mainRef,
    },
    []
  );

  const value = { footerRef, heRef, serviceRef };

  return (
    <div ref={mainRef} className="main">
      <div className=" preloading fixed flex justify-center items-center z-[600] h-full w-full bg-[#0e0e0e]">
        <div className=" loadingText  overflow-hidden w-max space-x-2  text-[#FFFCF1] text-[4vw]">
          <h1 className=" whitespace-nowrap inline-block">The</h1>
          <h1 className=" whitespace-nowrap inline-block">Venture</h1>
          <h1 className=" whitespace-nowrap inline-block">Agency.</h1>
        </div>
      </div>
      <div className="">
        <mainContext.Provider value={value}>
          <ScrollToTop />
          <Navbar></Navbar>
          <div className=" min-h-screen">
            <Outlet context={[heroRef]} />
          </div>
          <Footer />
        </mainContext.Provider>
      </div>
    </div>
  );
};

export default App;
