import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";

const Review = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <div className="  min-h-[100vh] my-[50px] lg:my-[100px]">
        <span className=" left-[calc(100%-20%)] relative right-0 how_cursor inline-block border-2 border-[#141414] m-0 w-max  h-max p-[4vw] rounded-full">
          <svg
            className="button__arrow rotate-[30deg] w-[8vw] h-[8vw] "
            viewBox="0 0 91 118"
            fill="none"
          >
            <path
              d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <div className=" ">
          <h2 className=" w-max text-[8vw] 2 font-semibold relative left-[23vw] font-plainLight mb-8 text-[#151515] ">
            <small className=" text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
              05
            </small>
            REVIEWS
          </h2>
          <hr className=" h-[2px] bg-[#151515]" />
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          freeMode={true}
          speed={10000}
          loop={true}
          //   autoplay={{ delay: 1, disableOnInteraction: false }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {reviews?.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className=" relative w-full border-[10px] ">
                <div className=" transition-all z-[10] bg-gradient-to-t from-[#141414] to-transparent absolute w-full h-full slide_overlay">
                  <span className="text-[#FFFCF1] flex flex-col justify-between relative w-full h-full z-[11] opacity-0">
                    <h1 className=" leading-none m-0 p-0 text-[2vw] font-plainRegular">
                      {review.customerName}
                    </h1>
                    <h5>
                      <p className=" text-[1.5vw] font-plainRegular">
                        {review.role}
                      </p>
                      <p className=" font-proBook text-[1vw] p-[1vw] text-center text-wrap ">
                        {review.review}
                      </p>
                    </h5>
                  </span>
                </div>
                <img
                  className=" object-cover w-[100%] relative bottom-0"
                  src={review.img}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Review;
