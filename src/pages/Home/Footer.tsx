import { useContext } from "react";
import { mainContext } from "../../App";

const Footer = () => {
  const { footerRef } = useContext(mainContext);
  return (
    <div
      ref={footerRef}
      className="px-[2.4vw] text-[#FAF8FC] bg-[#0E0E0E] pt-[5vw] overflow-hidden h-screen"
    >
      <div className=" h-[60%] flex w-full ">
        <div className=" footer space-y-[1.3vw] left w-[100%] ">
          <h1 className=" text-[2.4vw] tracking-tighter leading-none font-semibold font-proBook">
            Relax. We've got you.
          </h1>
          <button className=" hover:bg-[#FAF8FC] transition-all duration-600 hover:text-[#0E0E0E] px-[2vw] py-[1vw] text-[1vw] font-proBook font-bold border-2 border-[#E6E3D9] rounded-full">
            Take A seat
          </button>
        </div>
        <div className="  flex flex-col justify-between  right w-[100%] ">
          <div className=" footer flex justify-around">
            <div>
              <ul>
                <li className=" pb-[2vw] font-semibold font-plainRegular text-[.9vw]">
                  Socials
                </li>
                <li className=" tracking-tighter font-plainRegular text-[1.9vw] leading-none">
                  Facebook
                </li>
                <li className=" tracking-tighter font-plainRegular text-[1.9vw] leading-none">
                  Github
                </li>
                <li className=" tracking-tighter font-plainRegular text-[1.9vw] leading-none">
                  Linkedin
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className=" pb-[2vw] font-semibold font-plainRegular text-[.9vw]">
                  Address
                </li>

                <li className=" tracking-tighter font-plainRegular text-[1.9vw] leading-none">
                  Zamarstynivska 55 <br />
                  79019 <br />
                  earth
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className=" pb-[2vw] font-semibold font-plainRegular text-[.9vw]">
                  Socials
                </li>
                <li className=" tracking-tighter font-plainRegular text-[1.9vw] leading-none">
                  Facebook
                </li>
                <li className=" tracking-tighter font-plainRegular text-[1.9vw] leading-none">
                  Github
                </li>
                <li className=" tracking-tighter font-plainRegular text-[1.9vw] leading-none">
                  Linkedin
                </li>
              </ul>
            </div>
          </div>
          <div className=" px-[2.4vw]  pb-[.9vw] flex justify-between">
            <h3 className=" font-proBook text-[1vw] font-bold">
              samsularefin532@gmail.com
            </h3>
            <p className=" text-[.9vw] font-proBook">+8801199999***</p>
          </div>
        </div>
      </div>
      <hr className=" divider h-[1px]" />
      <div className=" flex justify-center items-center h-[40%] w-full ">
        <h1 className=" font-proBook text-[#FAF8FC]">BOOKNEST &copy; 2024 </h1>
      </div>
    </div>
  );
};

export default Footer;
