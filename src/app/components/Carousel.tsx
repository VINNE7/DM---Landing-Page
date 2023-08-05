"use client";
import Image from "next/image";
import carouselSecondImage from "../../../public/carouselSecondImage.jpg";
import carouselThirdImage from "../../../public/carouselThirdImage.jpg";
import carouselFourthImage from "../../../public/carouselFourthImage.jpg";
import carouselFifthImage from "../../../public/carouselFifthImage.jpg";
import CaretLeft from "../../assets/icons/CaretLeft";
import CaretRight from "../../assets/icons/CaretRight";
import { useState } from "react";
import Swipe from "react-easy-swipe";

const imageArray = [
  carouselSecondImage,
  carouselThirdImage,
  carouselFourthImage,
  carouselFifthImage,
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide =
      currentSlide === imageArray.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };
  const handlePrevSlide = () => {
    let newSlide =
      currentSlide === 0 ? imageArray.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  return (
    <section className="pt-28 lg:pt-20 ">
      <div className="w-full relative">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeDown={undefined}
          onSwipeUp={undefined}
          onSwipeEnd={undefined}
          onSwipeStart={undefined}
          onSwipeRight={handlePrevSlide}
          className="flex overflow-scroll overflow-y-hidden w-full h-[80vh]"
        >
          {imageArray.map((image, index) => {
            if (index === currentSlide) {
              return (
                <span key={index}>
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    alt="carousel image"
                    className="animate-fadeIn"
                  />
                </span>
              );
            }
          })}
        </Swipe>
        <button
          onClick={handlePrevSlide}
          className="absolute top-1/2 left-4 cursor-pointer"
        >
          <CaretLeft size={40} color="#f2f2f2" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute top-1/2 right-4 cursor-pointer"
        >
          <CaretRight size={40} color="#f2f2f2" />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
