import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import Banner from "../assets/banner-formulario.jpg";

const baloo2 = Baloo_2({ subsets: ["latin"] });

export default function Contact() {
  return (
    <section className="container mx-auto my-20" id="worktogether">
      <div className="flex flex-wrap p-4 items-center sm:gap-0 gap-8">
        <div className="flex-1">
          <h1
            className={`${baloo2.className} text-4xl font-bold text-green-1600 mb-8`}
          >
            FAÇA PARTE DA FAMÍLIA
          </h1>

          <p>
            Ao participar da nossa família, você ganha pontos a cada compra, te
            trazendo mais perto de desfrutar de smoothies gratuitos, upgrades de
            tamanho, ou até mesmo presentes especiais.
          </p>
        </div>

        <form className="flex-1 flex bg-orange-500 rounded-lg">
          <div className="flex-1 sm:p-7 p-3 flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="text-white font-bold w-full block"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="rounded px-2 py-1"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="text-white font-bold w-full block"
              >
                E-mail
              </label>
              <input
                type="email"
                id="name"
                className="rounded px-2 py-1"
                placeholder="seunome@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="text-white font-bold w-full block"
              >
                CPF
              </label>
              <input
                type="text"
                id="name"
                className="rounded px-2 py-1"
                placeholder="000.000.000-00"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="text-white font-bold w-full block"
              >
                Data de Nascimento
              </label>
              <input
                type="text"
                id="name"
                className="rounded px-2 py-1"
                placeholder="00/00/0000"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="accept-news" />
              <label
                className="text-white text-xs font-bold"
                htmlFor="accept-news"
              >
                Aceito receber novidades
              </label>
            </div>

            <button
              type="button"
              className="w-full bg-green-1500 rounded text-white font-bold py-1"
            >
              ENVIAR
            </button>
          </div>

          <div className="sm:block hidden">
            <Image
              src={Banner}
              alt=""
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
