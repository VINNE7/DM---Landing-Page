"use client";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="flex gap-8 text-white text-lg pr-10 ">
      {/* {navbarElements.map((element, index) => (
        <a
          key={`link-to-session-${index + 1}`}
          className="transition-all ease-linear delay-100 hover:tracking-wider hover:text-header-yellow"
          href={element.href}
        >
          {element.title}
        </a>
      ))} */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <List
          className={`transition-all ease-linear duration-100 ${
            isOpen ? "w-0" : null
          }`}
          size={24}
        />
      </button>
      <div
        className={`transition-all ease-linear duration-300 absolute h-[100vh] top-0 right-0 ${
          isOpen ? "w-[200px]" : "w-[0px]"
        } bg-header-green opacity-90`}
      >
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
