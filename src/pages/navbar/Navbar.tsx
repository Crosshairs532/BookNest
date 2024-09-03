/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaCircleUser } from "react-icons/fa6";

import { PiXLogoLight } from "react-icons/pi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { loginState, logout } from "../../redux/features/auth/authSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { Button, ConfigProvider } from "antd";
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);
  const user = useSelector(loginState);
  const navigate = useNavigate();
  console.log(location.pathname);
  const dispatch = useAppDispatch();
  let item;
  useGSAP(() => {
    const nav = navRef?.current as HTMLDivElement;
    console.log(nav);
    const menu = menuRef?.current as HTMLDivElement;
    const close = closeRef?.current as HTMLDivElement;
    const overlay = document.querySelector(".menu_overlay") as HTMLDivElement;

    const tl = gsap.timeline();
    tl.to(overlay, {
      display: "block",
    });
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
      tl.reverse().then(() => setOpen(false));
    };
    menu.addEventListener("click", handleOpen);
    close.addEventListener("click", handleClose);

    return () => {
      menu.addEventListener("click", handleOpen);
      close.addEventListener("click", handleClose);
    };
  }, [menuRef, closeRef]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 232) {
        setNav(true);
      } else {
        setNav(false);
      }
    });
  });

  console.log(user?.current_user?.role);

  const handleLogout = () => {
    dispatch(logout());
    return navigate("/login", {
      state: "/",
      replace: true,
    });
  };
  switch (user?.current_user?.role) {
    case "admin":
      item = (
        <Link to="/admin/dashboard">
          <h1 className=" font-plainLight">DASHBOARD</h1>
        </Link>
      );
      break;
    case "user":
      item = (
        <Link to={`/my-bookings`}>
          <h1 className=" font-plainLight">My Bookings</h1>;
        </Link>
      );
      break;
  }
  return (
    <div
      ref={navRef}
      className={` ${
        nav
          ? ` shadow-inner shadow-slate-950 ${"bg-[#151515]"} `
          : " bg-[transparent] "
      } navBar w-[100%]  transition-all z-[450] justify-between duration-700 fixed top-0 left-0 h-[15vh] `}
    >
      <div className=" nav_bar px-[4vw] items-center py-[2vw] absolute w-full h-full  flex justify-between">
        <div className={`nav_logo relative`}>
          <Link to="/">
            <h1
              className={`${
                location.pathname === "/" ? "text-[#FFFFFF]" : "text-[#0e0e0e]"
              }   relative border-2 `}
            >
              <PiXLogoLight className=" md:text-[6vw] lg:text-[3.7vw] text-[10vw]" />
            </h1>
          </Link>
        </div>
        <div
          className={` menu ${
            location.pathname === "/" ? "text-[#FFFFFF]" : "text-[#0e0e0e]"
          }   cursor-pointer z-[200]`}
        >
          <h1
            ref={menuRef}
            className={`${
              open ? "hidden" : "block"
            } transition-all  md:text-[4vw] lg:text-[1.5vw] text-[6.1vw] leading-none z-[201]`}
          >
            {user?.current_user?.email ? <FaCircleUser size={30} /> : "Menu"}
          </h1>
          <h1
            ref={closeRef}
            className={`${
              !open ? "hidden" : "block"
            }  transition-all text-[4vw] lg:text-[1.5vw] z-[201]`}
          >
            close
          </h1>
        </div>
      </div>
      <div className=" hidden  menu_overlay bg-[#FFFFFF] z-[199] absolute w-full h-[100vh] lg:h-[65vh] md:h-[35vh] top-0 right-0">
        <div className=" sub_menu flex flex-col lg:left-[calc(100%-55%)] left-[50%] top-[40%] lg:top-[0%] -translate-x-[50%] -translate-y-[40%] lg:-translate-x-0 lg:-translate-y-[0%] justify-around md:justify-between lg:justify-normal md:mt-[2vw] relative h-[50%] lg:h-[calc(100%-10vh)] w-[80%] md:[50%] lg:w-[50%] md:pt-[6vw] lg:pt-[4vw]">
          <div className=" nav_menu">
            <h1 className=" first text-[4vw]">HOME</h1>
            <h1 className=" second text-[4vw]">HOME</h1>
          </div>
          <div className=" nav_menu">
            <h1 className="first text-[4vw]">MEETING ROOM</h1>
            <Link to="/meeting-rooms">
              <h1 className="second text-[4vw]">MEETING ROOM</h1>
            </Link>
          </div>
          <div className=" nav_menu">
            <h1 className="first text-[4vw]">ABOUT US</h1>
            <Link to="/about-us">
              <h1 className="second text-[4vw]">ABOUT US</h1>
            </Link>
          </div>
          <div className=" nav_menu">
            <h1 className=" first text-[4vw]">CONTACT US</h1>
            <Link to="/contact">
              <h1 className=" second text-[4vw]">CONTACT US</h1>
            </Link>
          </div>

          <hr className=" h-[0.8px] mt-[4vw] bg-[#141414]" />

          <div className=" mt-[2vw] border-r-emerald-400  profile_login-register_container">
            {!user?.current_user ? (
              <div className=" login-register flex justify-between">
                <h1
                  onClick={() => {
                    navigate("/login", { state: location.pathname });
                  }}
                  className=" text-[4vw] lg:text-[1.5vw] font-plainLight"
                >
                  LOGIN
                </h1>

                <h1
                  onClick={() => {
                    navigate("/registration", { state: location.pathname });
                  }}
                  className="text-[4vw] lg:text-[1.5vw] font-plainLight"
                >
                  CREATE ACCOUNT
                </h1>
              </div>
            ) : (
              <>
                <div className=" flex items-center justify-between profile">
                  {item}
                  <ConfigProvider
                    theme={{
                      components: {
                        Button: {
                          colorPrimaryBorderHover: "#151515",
                        },
                      },
                    }}
                  >
                    <Button
                      className=" logout font-plainLight"
                      onClick={handleLogout}
                    >
                      LOGOUT
                    </Button>
                  </ConfigProvider>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
