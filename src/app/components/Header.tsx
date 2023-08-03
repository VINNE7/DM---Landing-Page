"use client";
import Image from "next/image";
import sol from "../../../public/sol.png";
import List from "@/assets/icons/List";
import X from "@/assets/icons/X";
import { useState } from "react";

const navbarElements = [
  { title: "Início", href: "#" },
  { title: "Ordem DeMolay", href: "#" },
  { title: "Onde estamos", href: "#" },
  { title: "Nossos Trabalhos", href: "#" },
  { title: "Depoimentos", href: "#" },
  { title: "Fale Conosco", href: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 transition-height ease-linear duration-500 w-screen bg-header-green flex flex-col items-center ${
        isOpen ? "h-screen" : "h-28"
      } lg:flex-row  lg:justify-evenly lg:h-20 drop-shadow-2xl`}
    >
      <div>
        <Image
          className="w-28 h-28 lg:w-32 lg:h-32 lg:translate-y-6"
          src={sol}
          alt="Emblema do Capítulo Sol Nascente"
        />
      </div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="text-white lg:hidden"
      >
        <List
          className={`w-6 h-6 absolute top-6 right-4 ${
            isOpen ? "invisible" : "visible"
          }`}
        />
        <X
          className={`w-6 h-6 absolute top-6 right-4 ${
            isOpen ? "visible" : "invisible"
          }`}
        />
      </button>
      <ul
        className={`flex flex-col list-none p-1 pt-10 items-center text-white gap-8 text-2xl ${
          isOpen ? "" : "invisible"
        } lg:visible lg:flex-row lg:pt-0 lg:text-base lg:gap-4 `}
      >
        {navbarElements.map((element, index) => (
          <li
            key={`navElement-${index}`}
            className={`transition-opacity ease-linear delay-75  duration-300 hover:text-header-yellow hover:transition-all   hover:tracking-wider
            }  ${isOpen ? "opacity-100" : "opacity-0"} lg:opacity-100   `}
          >
            <a href={element.href}>{element.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
