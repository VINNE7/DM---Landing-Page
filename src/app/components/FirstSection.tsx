import Image from "next/image";
import demolayLogo from "../../../public/demolayLogo.png";

const FirstSection = () => {
  return (
    <div className="flex w-[600px] h-[80vh] m-auto">
      <Image className="" src={demolayLogo} alt="demolay logo" />
      <div className="">
        <h2 className="text-4xl">Trabalhando com a juventude desde 1919</h2>
        <p>
          A Ordem DeMolay é uma instituição fraternal, para jovens rapazes de 12
          a 21 anos, com o objetivo de melhorar a sociedade através de
          protagonismo juvenil e de preparação cívica e social.
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
