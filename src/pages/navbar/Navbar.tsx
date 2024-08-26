/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { PiXLogoLight } from "react-icons/pi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // const navRef = useRef<HTMLDivElement>(null);
  // const menuRef = useRef<HTMLDivElement>(null);
  // const closeRef = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   (context, contextSafe) => {
  //     const menu_overlay = document.querySelector(
  //       " .menu_overlay"
  //     ) as HTMLInputElement;

  //     const menuTL = gsap.timeline({ paused: true });

  //     menuTL.from(menu_overlay, {
  //       height: "0vh",
  //       duration: 1,
  //       ease: "power2.inOut",
  //     });

  //     const clickMenu = contextSafe(async () => {
  //       console.log("clicled");
  //       if (!open) {
  //         menuTL.play();
  //       } else {
  //         await menuTL.reverse();
  //       }
  //       setOpen(!open);
  //     });

  //     menuRef.current?.addEventListener("click", clickMenu);
  //     closeRef.current?.addEventListener("click", clickMenu);

  //     return () => {
  //       console.log("cleaned");
  //       menuRef.current?.addEventListener("click", clickMenu);
  //       closeRef.current?.addEventListener("click", clickMenu);
  //     };
  //   },
  //   {
  //     scope: navRef,
  //     dependencies: [menuRef.current, closeRef.current, open],
  //   }
  // );

  return (
    <div className=" w-[100%] justify-between fixed top-0 left-0 h-[15vh] bg-slate-700">
      <div className=" nav_bar px-[4vw] items-center py-[2vw] absolute w-full h-full border-2 flex justify-between">
        <div className="nav_logo">
          <h1>
            <PiXLogoLight size={60} />
          </h1>
        </div>
        <div className=" menu z-[200]">
          {!open ? (
            <h1 className=" text-[1.5vw] z-[20]">Menu</h1>
          ) : (
            <h1 className=" text-[1.5vw] z-[20]">Close</h1>
          )}
        </div>
      </div>
      {/* <div className=" menu_overlay overflow-hidden bg-orange-900 relative w-full h-[65vh] border-2 border-red-500 top-[0%]  right-0">
        <div className=" sub_menu w-[50%] pt-[5vw] ">
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
      </div> */}
    </div>
  );
};

export default Navbar;
