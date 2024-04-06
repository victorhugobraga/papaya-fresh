import { Baloo_2, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/Logo Gestão 3.png";

const inter = Inter({ subsets: ["latin"] });
const baloo2 = Baloo_2({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="bg-green-1500">
      <div className="container mx-auto p-4 gap-8 flex flex-wrap items-center">
        <Link href="/">
          <Image src={Logo} alt="Papaya Fresh" />
        </Link>

        <div className="flex-1">
          <h1
            className={`${baloo2.className} text-white font-bold text-2xl mb-2`}
          >
            Horário de funcionamento
          </h1>

          <div className="flex flex-wrap flex-col sm:flex-row gap-4 justify-between w-full">
            <div>
              <p className="text-white font-bold">Segunda a Quinta</p>
              <p className="text-white">11h às 23h</p>
            </div>
            <div>
              <p className="text-white font-bold">Sexta</p>
              <p className="text-white">11h às 00h</p>
            </div>
            <div>
              <p className="text-white font-bold">Sábado</p>
              <p className="text-white">11h às 00h</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
