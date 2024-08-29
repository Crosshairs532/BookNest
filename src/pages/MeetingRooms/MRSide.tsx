import { BiCross, BiDollar } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  reset,
  roomSelector,
  setFilter,
} from "../../redux/features/room/room.slice";
import BNForm from "../../Component/BNForm";
import { Button } from "antd";
import RCinput from "../../Component/RoomComponent/RCinput";

const MRSide = ({ flex }) => {
  const defaultValue = {
    roomName: "",
    maxPrice: 10000,
    minPrice: 0,
    capacity: 0,
  };
  const selector = useAppSelector(roomSelector);
  const dispatch = useAppDispatch();

  const onSubmit = (data) => {
    console.log(data);
    const filter = {
      name: data.roomName,
      maxPrice: Number(data.maxPrice),
      minPrice: Number(data.minPrice),
      capacity: Number(data.capacity),
    };

    dispatch(setFilter(filter));
  };

  return (
    <div className={`${flex} w-[20%]`}>
      <div
        id="cross"
        className="cursor-pointer hidden items-center translate-x-[-50%] justify-center transition-all duration-1000 w-12 h-12 bg-white rounded-full left-[50%] top-[40%] cross fixed z-[155]"
      >
        <BiCross />
      </div>
      <div
        id="filterOverlay"
        className="overlay hidden transition-all z-[150] fixed backdrop-blur-md duration-1000 w-full h-full bg-black/20 top-0 left-0"
      ></div>
      <BNForm defaultValue={defaultValue} onSubmit={onSubmit}>
        <div
          id="filterSide"
          className=" hidden lg:block transition-all ease-in-out lg:px-0 lg:py-0 px-8 py-4 lg:bg-transparent z-[160] bg-[#f0f0f0] lg:z-0  lg:rounded-none rounded-xl  lg:bottom-0 left-[50%] lg:left-[0%] lg:translate-x-0 translate-x-[-50%] fixed bottom-[-50%]
           lg:static filter_options lg:h-[100vh]  delay-150 duration-1000"
        >
          <div className="divider lg:block hidden"></div>
          <div className="mt-2">
            <RCinput
              bg="transparent"
              name="roomName"
              label="Search By Name"
              type="text"
            />
          </div>
          <div className="divider"></div>
          <div className="price_range space-y-3">
            <h1 className="text-xl">Price</h1>
            <div className="w-[100%]">
              <label className="input input-bordered flex items-center gap-2">
                <BiDollar />
                <RCinput
                  name="maxPrice"
                  label={undefined}
                  bg="transparent"
                  type="number"
                />
              </label>
              <div className="divider divider-horizontal">to</div>
              <label className="input input-bordered flex items-center gap-2">
                <BiDollar />
                <RCinput
                  name="minPrice"
                  label={undefined}
                  bg="transparent"
                  type="number"
                />
                <RCinput
                  name="capacity"
                  label={undefined}
                  bg="transparent"
                  type="number"
                />
              </label>
            </div>
          </div>

          <div className=" flex items-center justify-around">
            <p
              onClick={() => dispatch(reset())}
              className="hover:border-b-2 duration-150 w-max border-[#1c2d5f] text-lg mt-2 cursor-pointer"
            >
              Reset to default
            </p>
            <Button htmlType="submit">Search</Button>
          </div>
        </div>
      </BNForm>
    </div>
  );
};

export default MRSide;
