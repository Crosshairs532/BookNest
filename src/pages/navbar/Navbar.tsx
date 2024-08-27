/* eslint-disable @typescript-eslint/no-unused-vars */

import { PiXLogoLight } from "react-icons/pi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const nav = navRef?.current as HTMLDivElement;
    const menu = menuRef?.current as HTMLDivElement;
    const close = closeRef?.current as HTMLDivElement;
    const overlay = document.querySelector(".menu_overlay") as HTMLDivElement;

    const tl = gsap.timeline();
    tl.from(
      overlay,
      {
        height: "0vh",
        duration: 0.6,
      },
      "menu"
    );
    tl.from(
      ".sub_menu",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      },
      "menu+=.2"
    );
    tl.from(
      ".nav_menu h1",
      {
        y: 50,
        opacity: 1,
        stagger: 0.1,
      },
      "menu+=.3"
    );
    tl.pause();

    const handleOpen = () => {
      // console.log("handle open", open);
      tl.play().then(() => setOpen(true));
    };
    const handleClose = () => {
      // console.log("handle close", open);
      tl.reverse().then(() => setOpen(false));
    };
    menu.addEventListener("click", handleOpen);
    close.addEventListener("click", handleClose);

    return () => {
      menu.addEventListener("click", handleOpen);
      close.addEventListener("click", handleClose);
    };
  }, [menuRef, closeRef]);

  return (
    <div
      ref={navRef}
      className=" w-[100%] justify-between fixed top-0 left-0 h-[15vh] "
    >
      <div className=" nav_bar px-[4vw] items-center py-[2vw] absolute w-full h-full border-2 flex justify-between">
        <div className="nav_logo">
          <h1>
            <PiXLogoLight size={60} />
          </h1>
        </div>
        <div className=" menu cursor-pointer z-[200]">
          <h1
            ref={menuRef}
            className={`${
              open ? "hidden" : "block"
            } transition-all text-[1.5vw] z-[20]`}
          >
            Menu
          </h1>
          <h1
            ref={closeRef}
            className={`${
              !open ? "hidden" : "block"
            }  transition-all text-[1.5vw] z-[20]`}
          >
            close
          </h1>
        </div>
      </div>
      <div className=" menu_overlay bg-[#FFFFFF] z-[199] overflow-hidden absolute w-full h-[65vh] top-[0%] right-0">
        <div className=" sub_menu mt-[5vw]  relative left-[calc(100%-50%)]  w-[50%] pt-[5vw]">
          {/* <h1 ref={closeRef} className=" close">
            close
          </h1> */}
          <div className=" nav_menu">
            <h1 className=" first text-[4vw]">HOME</h1>
            <h1 className=" second text-[4vw]">HOME</h1>
          </div>
          <div className=" nav_menu">
            <h1 className="first text-[4vw]">MEETING ROOM</h1>
            <h1 className="second text-[4vw]">MEETING ROOM</h1>
          </div>
          <div className=" nav_menu">
            <h1 className="first text-[4vw]">ABOUT US</h1>
            <h1 className="second text-[4vw]">ABOUT US</h1>
          </div>
          <div className=" nav_menu">
            <h1 className=" first text-[4vw]">CONTACT US</h1>
            <h1 className=" second text-[4vw]">CONTACT US</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
