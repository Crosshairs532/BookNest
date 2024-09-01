import { Button, Carousel } from "antd";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useGetSingleRoomQuery } from "../../redux/features/room/room.api";
import { useAppSelector } from "../../redux/hook";

const RoomDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const cUser = useAppSelector((state) => state.auth.current_user);

  const { data: singleRoom, isLoading } = useGetSingleRoomQuery(id);

  if (isLoading || !singleRoom?.data) {
    return <h1>Fetching Data</h1>;
  }

  const handleBookNow = (id) => {
    console.log(id, cUser);
    if (!cUser) {
      console.log("yes");
      // return navigate(`/login`);
    }
    navigate(`/booking/${id}`);
  };

  return (
    <div className=" px-[2.4vw] room-info-container min-h-screen pt-[25vh] p-6 bg-[#0e0e0e] shadow-lg">
      <h2 className="text-[5vw] border-2 w-max font-semibold relative left-[20vw] font-plainLight mb-8 text-[#FAF8FC] ">
        <small className=" text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
          01
        </small>
        {singleRoom?.data?.name}
        <small className=" text-[3vw] absolute bottom-[2.5vw] -right-[6vw] italic font-silkSerifRegular ">
          {singleRoom?.data?.roomNo}
        </small>
      </h2>

      <Carousel style={{ borderRadius: "100%" }} autoplay>
        {singleRoom?.data?.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Room image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>

      <div className=" my-[4vw] flex justify-between">
        <div className="room-details mt-4  w-[50vw]">
          <h2 className="text-2xl font-bold">{singleRoom?.data?.roomName}</h2>
          <p className=" detail py-[2vw] px-[0.9vw] flex justify-between items-center text-lg text-[#faf8fc]">
            <small>Room No</small> <small>{singleRoom?.data?.roomNo}</small>
          </p>
          <p className=" detail py-[2vw] px-[0.9vw] flex justify-between items-center text-lg text-[#faf8fc]">
            <small>Floor No</small> <small>{singleRoom?.data?.floorNo}</small>
          </p>
          <p className=" detail py-[2vw] px-[0.9vw] flex justify-between items-center text-lg text-[#faf8fc]">
            <small>Capacity</small> <small>{singleRoom?.data?.capacity} </small>
          </p>
          <p className=" detail py-[2vw] px-[0.9vw] flex justify-between items-center text-lg text-[#faf8fc]">
            <small> Price per Slot</small>{" "}
            <small>${singleRoom?.data?.pricePerSlot}</small>
          </p>
        </div>
        <div className=" group ">
          <span className=" relative how_cursor inline-block border-2  border-[#faf8fc] m-0 w-max  h-max p-[4vw] rounded-full">
            <div className=" group-hover:scale-100 duration-500 ease-in-out scale-0 z-10 flex justify-center items-center absolute top-0 left-0 rounded-full circle w-full h-full bg-white">
              <small className=" font-plainRegular font-semibold w-[60%] text-[#0e0e0e]">
                we are happy to have you on board.
              </small>
            </div>
            <svg
              className="button__arrow rotate-[0deg] w-[8vw] h-[8vw] "
              viewBox="0 0 91 118"
              fill="none"
            >
              <path
                d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z"
                fill="#faf8fc"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className=" my-[10vw] flex justify-between">
        <div className=" group ">
          <span className=" relative how_cursor inline-block border-2  border-[#faf8fc] m-0 w-max  h-max p-[4vw] rounded-full">
            <div className=" group-hover:scale-100 duration-500 ease-in-out scale-0 z-10 flex justify-center items-center absolute top-0 left-0 rounded-full circle w-full h-full bg-white">
              <small className=" font-plainRegular font-semibold w-[60%] text-[#0e0e0e]">
                You are almost There. Book Now &#x1F61C;
              </small>
            </div>
            <svg
              className="button__arrow -rotate-[50deg] w-[8vw] h-[8vw] "
              viewBox="0 0 91 118"
              fill="none"
            >
              <path
                d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z"
                fill="#faf8fc"
              ></path>
            </svg>
          </span>
        </div>
        <div className="amenities mt-[10vw]">
          <h3 className="text-[8vw] leading-none border-b-[1px] pb-[5vw] w-max font-semibold relative  font-plainLight mb-8 text-[#FAF8FC] ">
            <small className=" text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
              01
            </small>
            Amenities
          </h3>
          <ul className="  list-disc w-[50vw] list-inside">
            {singleRoom?.data?.amenities.map((amenity, index) => (
              <li key={index} className=" list-item text-[#faf8fc]">
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button
        type="primary"
        className="mt-6 w-full"
        onClick={() => handleBookNow(id)}
      >
        Book Now
      </Button>
    </div>
  );
};

export default RoomDetails;
