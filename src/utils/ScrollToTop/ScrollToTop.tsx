import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(showButton);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div
        onClick={scrollToTop}
        className={` ${
          showButton ? ` opacity-100` : " opacity-0"
        } transition-all duration-1000 arrow`}
      >
        <span></span>
        <span></span>
        <span></span>
        <h1 className=" font-silkSerifRegular text-[2vw] font-bold mix-blend-difference  text-white rotate-90 ">
          scroll to top
        </h1>
      </div>
    </div>
  );
};

export default ScrollToTop;
