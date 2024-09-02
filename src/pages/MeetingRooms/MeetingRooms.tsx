import { useGetAllMeetingRoomsQuery } from "../../redux/features/room/room.api";
import { roomSelector } from "../../redux/features/room/room.slice";
import { useAppSelector } from "../../redux/hook";
import Filter from "../../utils/Filter";
import ProductCard from "../Home/ProductCard";
import MRSide from "./MRSide";
import Sort from "./Sort";

const MeetingRooms = () => {
  const selector = useAppSelector(roomSelector);
  const { data, isLoading, isError, isFetching } =
    useGetAllMeetingRoomsQuery(selector);

  if (isLoading || !data) {
    return (
      <h1 className=" min-h-screen flex justify-center items-center">
        Loading....
      </h1>
    );
  }

  if (isError) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <div className=" min-h-screen container mx-auto">
      <h1 className=" relative allProduct container mx-auto pt-[10vh] text-5xl">
        All Products
      </h1>

      <div className=" mt-[8vw] text-2xl cursor-pointer justify-between flex items-center gap-3">
        <div className=" flex items-center gap-3">
          <Filter></Filter>
          <h1>Filter</h1>
        </div>
        <Sort></Sort>
      </div>
      <div className=" lg:flex mx-auto">
        <MRSide flex="flex-grow"></MRSide>

        <div className=" flex-grow mb-10 mt-[50px] lg:w-[60%] grid md:grid-cols-2 grid-cols-1 place-items-baseline gap-[4vw] lg:grid-cols-3 ">
          {isFetching ? (
            <>fetching</>
          ) : data?.data?.length > 0 ? (
            data.data.map((room, idx) => <ProductCard key={idx} room={room} />)
          ) : (
            <h1 className="mx-auto text-center text-[4vw] whitespace-nowrap text-black">
              No product to show
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingRooms;
