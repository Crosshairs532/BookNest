import { useContext } from "react";
import {
  FaClock,
  FaCheckCircle,
  FaCalendarAlt,
  FaHeadset,
} from "react-icons/fa";
import { mainContext } from "../../App";

const Service = () => {
  const { serviceRef } = useContext(mainContext);
  const services = [
    {
      icon: <FaClock size={50} />,
      title: "Real-Time Availability",
      description: "Always know what’s available in real-time.",
    },
    {
      icon: <FaCheckCircle size={50} />,
      title: "Instant Booking Confirmation",
      description: "Receive confirmation immediately after booking.",
    },
    {
      icon: <FaCalendarAlt size={50} />,
      title: "Flexible Scheduling",
      description: "Book at your convenience with flexible schedules.",
    },
    {
      icon: <FaHeadset size={50} />,
      title: "24/7 Support",
      description: "Our support team is here for you, anytime.",
    },
  ];

  return (
    <div className="bg-gray-100 mt-[1vw] rounded-xl py-16">
      <div className="container mx-auto ">
        <h2
          ref={serviceRef && serviceRef?.current ? serviceRef : null}
          className="text-[8vw] w-max font-semibold relative left-[15vw] font-plainLight mb-8 text-[#151515] "
        >
          <small className=" text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
            01
          </small>
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-8">
          {services?.map((service, index) => (
            <div
              key={index}
              className="bg-white space-y-[3vw] md:space-y-[2vw] lg:space-y-[1vw] flex flex-col cursor-pointer px-6 py-5 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <div className="text-indigo-500 lg:space-y-[2vw] space-y-[3vw]  md:space-y-[2vw] flex-1  mb-4">
                <div className="w-max  mx-auto">{service?.icon}</div>

                <h3 className=" text-[4vw] md:text-[2.5vw] lg:text-[1.3vw] text-center leading-none  font-plainLight font-semibold text-gray-800 mb-2">
                  {service?.title}
                </h3>
              </div>

              <p className=" flex-1 text-gray-600 font-plainRegular">
                {service?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
