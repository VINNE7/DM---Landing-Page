import Image from "next/image";
import sol from "../../../public/sol.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="">
      <div className="fixed flex gap-8 justify-between bg-header-green items-center w-full h-20">
        <Image
          className="translate-y-8 translate-x-8"
          src={sol}
          alt="Emblema do Capítulo Sol Nascente"
          width={135}
          height={135}
        />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
