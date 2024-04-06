import { Baloo_2, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import Logo from "../assets/Logo.png";
const baloo2 = Baloo_2({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <div className={`bg-green-1500 ${inter.className}`}>
        <div className="container mx-auto flex justify-end text-white sm:text-sm text-xs py-1 px-4 font-bold">
          <p className="flex items-center gap-2">
            Entre em contato <FaCircle className="text-[6px]" /> (34) 9
            9972-6609
          </p>
        </div>
      </div>

      <header
        className={`container mx-auto flex justify-between items-center sm:p-2 p-4 ${inter.className}`}
      >
        <Image src={Logo} alt="Papaya Fresh" width={200} height={100} />

        <button className="block sm:hidden">
          <FaBars className="text-3xl text-green-1500" />
        </button>

        <nav className="sm:block hidden">
          <ul
            className={`flex gap-6 items-center ${baloo2.className} text-lg font-bold`}
          >
            <li>
              <Link href="#">INÍCIO</Link>
            </li>
            <li>
              <Link href="#">SOBRE NÓS</Link>
            </li>
            <li>
              <Link href="#worktogether" className="text-green-1600">
                TRABALHE CONOSCO
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
