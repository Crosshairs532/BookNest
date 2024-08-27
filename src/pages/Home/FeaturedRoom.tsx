import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const rooms = [
  {
    image: "https://i.ibb.co/jw0KfCj/room1.jpg",
    name: "Executive Suite",
    capacity: "4 People",
    price: "$200/slot",
  },
  {
    image: "https://i.ibb.co/r71fkmL/room2.jpg",
    name: "Deluxe Room",
    capacity: "3 People",
    price: "$150/slot",
  },
  {
    image: "https://i.ibb.co/rfjk6x6/room3.jpg",
    name: "Standard Room",
    capacity: "2 People",
    price: "$100/slot",
  },
  {
    image: "https://i.ibb.co/86nJc2r/room4.jpg",
    name: "Conference Room",
    capacity: "20 People",
    price: "$500/slot",
  },
  {
    image: "https://i.ibb.co/M2B05Yt/room5.jpg",
    name: "Meeting Room",
    capacity: "10 People",
    price: "$300/slot",
  },
  {
    image: "https://i.ibb.co/54nYBc9/room6.jpg",
    name: "Private Office",
    capacity: "1 Person",
    price: "$75/slot",
  },
];

const FeaturedRoom = () => {
  return (
    <>
      <div className=" my-[7vw]">
        <div className=" container mx-auto space-y-2 mb-[60px]">
          <h1 className=" text-[8vw] font-semibold relative left-[15vw] font-plainLight whitespace-nowrap text-[#1a1a1a]">
            <small className=" text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
              02
            </small>
            Featured Rooms
          </h1>
          <p className=" font-plainRegular text-[#5e5e5e]">
            Our Most Popular choices
          </p>
        </div>
        <div className=" place-items-center grid mg:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, idx) => (
            <ProductCard key={idx} room={room}></ProductCard>
          ))}
        </div>
        <div className=" group mx-auto w-[300px] flex justify-center items-center my-10">
          <Link to={"/meeting-rooms"}>
            <button className=" group-hover:gap-6 duration-100  gap-4 flex item-center text-center text-2xl">
              See More
              <MdOutlineKeyboardArrowRight
                className="w-8 h-8 rounded-full bg-[#5e5e5e]"
                size={15}
              ></MdOutlineKeyboardArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedRoom;
