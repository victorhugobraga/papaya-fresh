import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaWhatsapp } from "react-icons/fa";
import {
  FaBowlFood,
  FaClipboard,
  FaHandHoldingHand,
  FaPeopleGroup,
} from "react-icons/fa6";
import Banner from "../assets/banner-juice-fruits.jpg";

const baloo2 = Baloo_2({ subsets: ["latin"] });

export default function Intro() {
  return (
    <section>
      <Image
        src={Banner}
        alt="dsf"
        className="w-full max-h-[400px] object-cover sm:block hidden"
      />

      <div className="container mx-auto flex flex-wrap sm:gap-6 gap-14 sm:-mt-14 mt-14 p-4">
        <div className="sm:flex-1 flex flex-col items-center justify-between gap-3 bg-gray-100 p-5 pt-14 rounded-xl shadow-lg relative">
          <div className="w-[80px] h-[80px] bg-green-1500 flex justify-center items-center rounded-full shadow absolute -top-10">
            <FaBowlFood className="text-4xl text-white" />
          </div>
          <h1
            className={`${baloo2.className} text-2xl font-bold text-green-1600 text-center`}
          >
            CARDÁPIO
          </h1>
          <p className="text-center">
            Sabores <strong>autênticos</strong>, ingredientes{" "}
            <strong>frescos</strong>, experiência <strong>inesquecível</strong>.
            Descubra o que está esperando por você em nosso novo cardápio.
          </p>
          <a
            href="/cardapio.pdf"
            download
            className="bg-green-1500 w-full rounded-md py-1 px-2 text-white font-bold flex justify-center items-center gap-2 hover:shadow"
          >
            <FaDownload /> CARDÁPIO
          </a>
        </div>

        <div className="sm:flex-1 flex flex-col items-center justify-between gap-3 bg-gray-100 p-5 pt-14 rounded-xl shadow-lg relative">
          <div className="w-[80px] h-[80px] bg-orange-500 flex justify-center items-center rounded-full shadow absolute -top-10">
            <FaPeopleGroup className="text-4xl text-white" />
          </div>
          <h1
            className={`${baloo2.className} text-2xl font-bold text-orange-500 text-center`}
          >
            FAÇA PARTE DA FAMÍLIA
          </h1>
          <p className="text-center">
            Quanto mais você compra, mais <strong>benefícios</strong> você
            acumula, mais <strong>vantagens</strong> você tem.
          </p>
          <Link
            href={"#worktogether"}
            className="bg-orange-500 w-full rounded-md py-1 px-2 text-white font-bold flex justify-center items-center gap-2 hover:shadow"
          >
            <FaHandHoldingHand /> FAÇA PARTE
          </Link>
        </div>

        <div className="sm:flex-1 flex flex-col items-center justify-between gap-3 bg-gray-100 p-5 pt-14 rounded-xl shadow-lg relative">
          <div className="w-[80px] h-[80px] bg-purple-500 flex justify-center items-center rounded-full shadow absolute -top-10">
            <FaClipboard className="text-4xl text-white" />
          </div>
          <h1
            className={`${baloo2.className} text-2xl font-bold text-purple-500 text-center`}
          >
            PEÇA SEU PEDIDO
          </h1>
          <p className="text-center">
            Evite filas, faça o seu pedido por aqui e retire na loja.
          </p>
          <Link
            className="bg-purple-500 w-full rounded-md py-1 px-2 text-white font-bold flex justify-center items-center gap-2 hover:bg-purple-600"
            href={"https://wa.me/5534998861893"}
            target="_blank"
          >
            <FaWhatsapp /> FAÇA SEU PEDIDO
          </Link>
        </div>
      </div>
    </section>
  );
}
