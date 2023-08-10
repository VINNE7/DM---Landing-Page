"use client";
import Image from "next/image";
import carouselSecondImage from "../../../public/carouselSecondImage-min.jpg";
import carouselThirdImage from "../../../public/carouselThirdImage-min.jpg";
import carouselSixthImage from "../../../public/carouselSixthImage-min.jpg";
import carouselSeventhImage from "../../../public/carouselSeventhImage-min.jpg";
import CaretLeft from "../../assets/icons/CaretLeft";
import CaretRight from "../../assets/icons/CaretRight";
import { useState } from "react";
import Swipe from "react-easy-swipe";

const imageArray = [
  {
    image: carouselSecondImage,
    alt: "carousel Image",
    description:
      "Acreditamos que colocar os jovens em posições de liderança é uma forma efetiva de desenvolvê-los para a vida adulta, lidar com contratempos e ter espaço para aprender diversas lições com os próprios erros e acertos é fundamental para um jovem rapaz, o Capítulo Sol Nascente da Ordem DeMolay é um lugar como esse.",
    title: "Protagonismo Juvenil",
  },
  {
    image: carouselThirdImage,
    alt: "carousel Image",
    description:
      "O ato de doar o seu tempo e trabalho para o próximo é, não só uma tentativa para auxiliar os necessitados, mas também uma forma de edificar o jovem, e fortalecer os ensinamentos das virtudes da Ordem DeMolay, o Capítulo Sol Nascente incentiva, apoia e tem o auxílio dos Tios Maçons da Loja Fraternidade N° 3376 do Grande Oriente do Brasil. ",
    title: "Filantropia",
  },
  {
    image: carouselSixthImage,
    alt: "carousel Image",
    description:
      "Há os que digam que uma vida feliz é cheia de amigos, aqui, há amigos e irmãos, o Capítulo Sol Nascente sempre esteve unido em trabalhos com outros capítulos, fortalecendo os laços e garantindo a união da primeira região administrativa. ",
    title: "Companheirismo",
  },
  {
    image: carouselSeventhImage,
    alt: "carousel Image",
    description:
      "É rotineiro que nos capítulos da Ordem DeMolay hajam trabalhos instrutivos apresentados sobre determinado assunto pertinente aos jovens, como primeiros socorros, artes e até mesmo apresentações sobre profissões com trabalhadores diversas áreas como Bombeiros, Professores, Psicólogos, Policiais, etc.",
    title: "Trabalhos Instrutivos",
  },
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
          {imageArray.map((element, index) => {
            if (index === currentSlide) {
              return (
                <span key={index}>
                  <Image
                    src={element.image}
                    layout="fill"
                    objectFit="cover"
                    priority
                    alt={element.alt}
                    className="animate-fadeIn"
                  />
                  <div className="absolute w-full h-full flex flex-col justify-end  pb-6 px-6 text-white bg-[rgba(0,0,0,0.4)]">
                    <h2 className="text-xl sm:text-2xl opacity-100 mb-4 xl:text-7xl">
                      {element.title}
                    </h2>
                    <p className="text-sm sm:block sm:text-xl opacity-100 xl:text-xl ">
                      {element.description}
                    </p>
                  </div>
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
