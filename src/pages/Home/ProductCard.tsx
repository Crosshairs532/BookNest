import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { TiArrowForward } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ room }: any) => {
  const location = useLocation();

  return (
    <div>
      <Card
        className={`card p-[0.9vw] cursor-pointer mt-2 ${
          location.pathname === "/all-products"
            ? " w-[60vw] md:w-[40vw] h-[30vh] lg:w-[20vw] lg:h-[30vh]"
            : "w-[320px] lg:w-[350px]"
        } `}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          color="blue-gray"
          className=" relative h-[25vh] overflow-hidden"
          // Provide any required props with default values
          shadow={false}
          style={{}}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <img
            className=" h-full w-full absolute top-0 left-0 object-center object-cover"
            src={room?.images[0]}
            alt="card-image"
          />
          <img
            className="bottom-img w-full h-full object-center object-cover absolute top-0 left-0"
            src={room?.images[1]}
            alt=""
          />
          <Link
            className=" flex items-center gap-1 justify-between"
            to={`/meeting-rooms/details/${room._id}`}
          >
            <button className="card-detail mx-auto flex justify-between items-center">
              <TiArrowForward />
              <p className=" leading-none m-0 p-0 text-[2vw] lg:text-[0.8vw]">
                see Details
              </p>
            </button>
          </Link>
        </CardHeader>
        <CardBody
          className=" px-2 py-4"
          style={{}}
          onClick={() => {}}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className=" flex items-center justify-between">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-1 text-[2.8vw] md:text-[2vw] lg:text-[1.1vw] leading-none font-semibold text-[#1a1a1a]"
              style={{}}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {room?.name}
            </Typography>
          </div>
          <div className=" flex gap-4 items-center justify-between w-max ">
            <small className="font-plainLight">capacity:</small>
            <Typography
              className=" leading-none tracking-normal text-[#5e5e5e]"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {room?.capacity}
            </Typography>
            <h4 className=" font-plainLight text-[#000000]">
              price: {room?.pricePerSlot}
            </h4>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
