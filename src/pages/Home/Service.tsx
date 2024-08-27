import {
  FaClock,
  FaCheckCircle,
  FaCalendarAlt,
  FaHeadset,
} from "react-icons/fa";

const Service = () => {
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
      <div className="container mx-auto text-center">
        <h2 className="text-[4vw] font-bold mb-8 text-[#151515]  ">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white flex flex-col cursor-pointer px-6 py-5 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <div className="text-indigo-500  flex-1  mb-4">
                <div className="w-max  mx-auto">{service.icon}</div>

                <h3 className="text-2xl font-plainLight font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
              </div>

              <p className=" flex-1 text-gray-600 font-plainRegular">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
