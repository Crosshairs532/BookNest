import vid from "../../assets/heroSection.mp4";

const WhyChoose = () => {
  return (
    <div className="  cursor-pointer relative min-h-screen my-4 p-[2vw] rounded-2xl container mx-auto">
      <h1 className=" font-plainLight font-semibold py-4 text-[8vw] relative left-[15vw] ">
        <small className=" text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
          03
        </small>
        Why Choose Us?
      </h1>
      <div className=" overflow-hidden lg:h-[600px] mt-[2vw] overflow-hidden flex lg:flex-row flex-col gap-3">
        <div className="  md:h-[200px] group relative w-full lg:h-[600px] cursor-pointer rounded-2xl bg-black overflow-hidden">
          <video
            src={vid}
            loop
            autoPlay
            muted
            className="w-full h-full object-cover object-center"
          ></video>
          <div className=" group-hover:bg-black/50 transition-all duration-300 w-full h-full  bg-black/70 blur-2xl absolute left-0 top-0"></div>
          <h1 className=" absolute left-4 bottom-6 text-3xl font-semibold text-[#e5e5e5] ">
            Smooth Performance with <br /> Clicky Sound
          </h1>
        </div>

        <div className=" lg:h-full h-[300px] flex gap-3 flex-col">
          <div className=" flex gap-3">
            <div className=" relative group overflow-hidden rounded-2xl w-full lg:w-[300px] h-[150px] lg:h-[250px] bg-red-500 ">
              <img
                className=" group-hover:scale-110 transition-all duration-300 object-cover w-full h-full object-center "
                src={"https://i.ibb.co/jw0KfCj/room1.jpg"}
                alt=""
              />
              <h1 className=" text-[#e5e5e5]  text-3xl font-semibold absolute bottom-5 left-4">
                Switch Options
              </h1>
            </div>
            <div className=" relative group overflow-hidden rounded-2xl w-full h-[150px] lg:w-[300px] lg:h-[250px] bg-blue-500">
              <img
                className=" group-hover:scale-110 transition-all duration-300 object-cover w-full h-full object-center "
                src={"https://i.ibb.co/jw0KfCj/room1.jpg"}
                alt=""
              />
              <h1 className=" text-[#e5e5e5] text-3xl font-semibold absolute bottom-5 left-4">
                Stylish Design
              </h1>
            </div>
          </div>
          <div className=" relative group rounded-2xl h-[150px] w-full lg:h-full overflow-hidden bg-yellow-500 ">
            <img
              src={"https://i.ibb.co/jw0KfCj/room1.jpg"}
              className=" group-hover:scale-110 transition-all duration-300 w-full h-full object-center object-cover"
              alt=""
            />
            <h1 className=" text-[#e5e5e5] text-3xl font-semibold absolute bottom-5 left-4">
              key-caps Swappable
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
