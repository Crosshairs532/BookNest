import team from "../../assets/team.jpg";
const About = () => {
  return (
    <div className="  md:px-[15vw]  lg:pt-0 pt-[15vw] text-[#FAF8FC]  relative bg-[#0E0E0E] min-h-screen w-full">
      <h2 className="text-[#FAF8FC] w-max leading-none pt-[10vw] text-[6vw] font-semibold relative left-[15vw] font-plainLight mb-8 ">
        <small className=" pt-[10vw] text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
          01
        </small>
        ABOUT BOOKNEST
      </h2>

      <div className=" lg:px-0 px-[2vw]  ">
        <h2 className=" text-[#FAF8FC] lg:px-0 lg:pl-[15vw]  lg:w-[70%] text-[2vw]">
          Our agency is about people who love creating, designing and developing
          wow projects. In the same time we are a boutique agency that is more
          than the collective. We learn and grow, win and celebrate together.
        </h2>
        <div className="   lg:px-0 lg:pl-[15vw] mt-[2.5vw] lg:space-y-0 space-y-[5vw] lg:w-[90%] flex lg:flex-row flex-col lg:justify-between team">
          <div className="  relative lg:h-[30vw] w-full lg:w-[65%]">
            <img
              className=" object-center object-cover w-full h-full"
              src={team}
              alt=""
            />
          </div>
          <p className=" lg:w-[30%]">
            We are happy to present our new website and updated version of Obys
            agency. As before we are open for new projects worldwide!
            <br />
            <br />
            Would you like to have award winning site or unique branding style,
            please say hi to our manager —info@obys.agency. And we will help you
            with the pleasure.
          </p>
        </div>
        <div className=" mt-[4vw] lg:mt-0 px-[3vw] py-[4vw] gap-y-6 bios lg:-top-[10vw] lg:left-[35vw] lg:relative lg:w-[26vw]  bg-[#3F7DF4]">
          <div className=" flex justify-between py-[1vw] border-b-2 ">
            <h1 className=" text-[2vw] leading-none font-semibold">Julia</h1>
            <p className=" text-[1vw] font-plainRegular font-semibold">CEO</p>
          </div>
          <div className=" flex justify-between py-[1vw] border-b-2 ">
            <h1 className=" text-[2vw] leading-none font-semibold">Julia</h1>
            <p className=" text-[1vw] font-plainRegular font-semibold">CEO</p>
          </div>
          <div className=" flex justify-between py-[1vw] border-b-2 ">
            <h1 className=" text-[2vw] leading-none font-semibold">Julia</h1>
            <p className=" text-[1vw] font-plainRegular font-semibold">
              Market Manager
            </p>
          </div>
          <div className=" flex justify-between py-[1vw] border-b-2 ">
            <h1 className=" text-[2vw] leading-none font-semibold">Julia</h1>
            <p className=" text-[1vw] font-plainRegular font-semibold">
              Product Manager
            </p>
          </div>
          <div className=" flex justify-between py-[1vw] border-b-2 ">
            <h1 className=" text-[2vw] leading-none font-semibold">Julia</h1>
            <p className=" text-[1vw] font-plainRegular font-semibold">
              Data Analyst
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
