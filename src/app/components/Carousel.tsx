"use client";
import Image from "next/image";
import carouselSecondImage from "../../../public/carouselSecondImage.jpg";
import carouselThirdImage from "../../../public/carouselThirdImage.jpg";
import carouselFourthImage from "../../../public/carouselFourthImage.jpg";
import carouselFifthImage from "../../../public/carouselFifthImage.jpg";
import CaretLeft from "../../assets/icons/CaretLeft";
import CaretRight from "../../assets/icons/CaretRight";

const Carousel = () => {
  return (
    <section className="pt-28 lg:pt-20 ">
      <div className="w-full relative">
        <div className="flex overflow-scroll overflow-y-hidden w-full h-[70vh]">
          <span className="min-w-[100vw] h-full">
            <Image
              className="h-full w-full"
              alt="Carousel Image"
              src={carouselSecondImage}
            />
          </span>
          <span className="min-w-[100vw] h-full ">
            <Image
              className="h-full w-full"
              alt="Carousel Image"
              src={carouselThirdImage}
            />
          </span>

          <span className="min-w-[100vw] h-full ">
            <Image
              className="h-full w-full"
              alt="Carousel Image"
              src={carouselFourthImage}
            />
          </span>
          <span className="min-w-[100vw] h-full ">
            <Image
              className="h-full w-full"
              alt="Carousel Image"
              src={carouselFifthImage}
            />
          </span>
        </div>
        <button className="absolute top-1/2 left-4 cursor-pointer">
          <CaretLeft size={40} color="#f2f2f2" />
        </button>
        <button className="absolute top-1/2 right-4 cursor-pointer">
          <CaretRight size={40} color="#f2f2f2" />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
