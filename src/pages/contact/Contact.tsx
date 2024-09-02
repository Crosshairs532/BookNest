import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className=" bg-[#0E0E0E]  pt-[10vw] pb-[4vw] min-h-screen flex flex-col items-center justify-center p-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[8vw] font-semibold relative left-[10vw] font-plainLight mb-8 text-[#FAF8FC] "
      >
        <small className=" text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
          01
        </small>
        Our Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className=" text-[3vw] lg:text-[1vw] font-plainLight mb-6 text-center text-white"
      >
        We would love to hear from you! Please reach out with any questions,
        feedback, or inquiries.
      </motion.p>
      <div className="w-full max-w-4xl mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col lg:flex-row justify-between mb-8"
        >
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-white text-2xl mr-4" />
              <div>
                <h2 className="text-xl text-white font-semibold">Phone</h2>
                <p className="text-white">+1 (234) 567-890</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-white text-2xl mr-4" />
              <div>
                <h2 className="text-xl text-white font-semibold">Email</h2>
                <p className="text-white">info@company.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-white text-2xl mr-4" />
              <div>
                <h2 className="text-xl text-white font-semibold">Address</h2>
                <p className="text-white">
                  1234 Street Name, City, State, 12345
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <form className="flex flex-col space-y-4">
              <motion.input
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg shadow-md focus:outline-none"
              />
              <motion.input
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg shadow-md focus:outline-none"
              />
              <motion.input
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                type="subject"
                placeholder="Email - subject"
                className="p-3 rounded-lg shadow-md focus:outline-none"
              />
              <motion.textarea
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                placeholder="Your Message"
                className="p-3 rounded-lg shadow-md focus:outline-none h-32"
              ></motion.textarea>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                type="submit"
                className="p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex justify-center space-x-4 mt-8"
        >
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <FaFacebook />
          </Link>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
