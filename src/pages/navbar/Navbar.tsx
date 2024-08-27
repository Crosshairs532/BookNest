/* eslint-disable @typescript-eslint/no-unused-vars */

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
  const dispatch = useAppDispatch();
  let item;
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
        <Link to={`/${user.current_user._id}/my-bookings`}>
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
          ? " backdrop-blur-md  shadow-inner shadow-slate-950 bg-[#FFFFFF]/10"
          : " bg-[transparent] "
      }  w-[100%] transition-all justify-between duration-700 fixed top-0 left-0 h-[15vh] `}
    >
      <div className=" nav_bar px-[4vw] items-center py-[2vw] absolute w-full h-full  flex justify-between">
        <div className="nav_logo">
          <h1 className=" text-[#FFFFFF] mix-blend-multiply">
            <PiXLogoLight className=" text-[#FFFFFF]" size={60} />
          </h1>
        </div>
        <div className=" menu text-[#FFFFFF]  cursor-pointer z-[200]">
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
        <div className=" sub_menu flex flex-col relative  h-[calc(100%-20vh)] left-[calc(100%-50%)]  w-[50%] pt-[5vw]">
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

          <hr className=" h-[0.8px] mt-[4vw] bg-[#141414]" />

          <div className=" mt-[2vw] border-r-emerald-400  profile_login-register_container">
            {!user?.current_user ? (
              <div className=" login-register flex justify-between">
                <h1
                  onClick={() => {
                    navigate("/login", { state: location.pathname });
                  }}
                  className=" text-[1.4vw] font-plainLight"
                >
                  LOGIN
                </h1>

                <h1
                  onClick={() => {
                    navigate("/registration", { state: location.pathname });
                  }}
                  className="text-[1.4vw]  font-plainLight"
                >
                  CREATE ACCOUNT
                </h1>
              </div>
            ) : (
              <div className=" flex  items-center justify-between profile">
                <h1 className=" font-plainLight">My Bookings</h1>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        colorPrimaryBorderHover: "#151515",
                      },
                    },
                  }}
                >
                  <Button className=" font-plainLight" onClick={handleLogout}>
                    LOGOUT
                  </Button>
                </ConfigProvider>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
