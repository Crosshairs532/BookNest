import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useGetAllMeetingRoomsQuery } from "../../redux/features/room/room.api";
import { useAppSelector } from "../../redux/hook";
import { roomSelector } from "../../redux/features/room/room.slice";

// const rooms = [
//   {
//     _id: "1",
//     images: [
//       "https://i.ibb.co/jw0KfCj/room1.jpg",
//       "https://i.ibb.co/jw0KfCj/room1.jpg",
//     ],
//     name: "Executive Suite",
//     capacity: 12,
//     pricePerSlot: 300,
//     roomNo: 200,
//     floorNo: 2,
//     amenities: [],
//   },
//   {
//     _id: "2",
//     images: [
//       "https://i.ibb.co/r71fkmL/room2.jpg",
//       "https://i.ibb.co/jw0KfCj/room1.jpg",
//     ],
//     name: "Deluxe Room",
//     capacity: 12,
//     pricePerSlot: 300,
//     roomNo: 201,
//     floorNo: 2,
//     amenities: [],
//   },
//   {
//     _id: "3",
//     images: [
//       "https://i.ibb.co/rfjk6x6/room3.jpg",
//       "https://i.ibb.co/jw0KfCj/room1.jpg",
//     ],
//     name: "Standard Room",
//     capacity: 12,
//     pricePerSlot: 300,
//     roomNo: 202,
//     floorNo: 2,
//     amenities: [],
//   },
//   {
//     _id: "4",
//     images: [
//       "https://i.ibb.co/86nJc2r/room4.jpg",
//       "https://i.ibb.co/jw0KfCj/room1.jpg",
//     ],
//     name: "Conference Room",
//     capacity: 12,
//     pricePerSlot: 300,
//     roomNo: 203,
//     floorNo: 2,
//     amenities: [],
//   },
//   {
//     _id: "5",
//     images: [
//       "https://i.ibb.co/M2B05Yt/room5.jpg",
//       "https://i.ibb.co/jw0KfCj/room1.jpg",
//     ],
//     name: "Meeting Room",
//     capacity: 12,
//     pricePerSlot: 300,
//     roomNo: 204,
//     floorNo: 2,
//     amenities: [],
//   },
//   {
//     _id: "6",
//     images: [
//       "https://i.ibb.co/54nYBc9/room6.jpg",
//       "https://i.ibb.co/jw0KfCj/room1.jpg",
//     ],
//     name: "Private Office",
//     capacity: 12,
//     pricePerSlot: 300,
//     roomNo: 205,
//     floorNo: 2,
//     amenities: [],
//   },
// ];

const FeaturedRoom = () => {
  const selector = useAppSelector(roomSelector);
  const { data: rooms, isLoading } = useGetAllMeetingRoomsQuery(undefined);
  console.log(selector);
  if (isLoading || !rooms) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <div className=" my-[7vw]">
        <div className=" container mx-auto space-y-2 mb-[60px]">
          <h1 className=" text-[8vw] w-max font-semibold relative left-[15vw] font-plainLight whitespace-nowrap text-[#1a1a1a]">
            <small className=" text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
              02
            </small>
            Featured Rooms
          </h1>
          <p className=" font-plainRegular text-[#5e5e5e]">
            Our Most Popular choices
          </p>
        </div>
        <div className=" place-items-center grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8">
          {rooms?.data?.map((room: any, idx: number) => (
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
