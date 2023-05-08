import Midias from "./Midias";

import "../mobile/Header.css";
import TypingEffect from "./TextWrite";

export default function Header() {
  return (
    <header
      className="p-2 bg-camisa border-x-2 border-parede  header-mobile"
      id="home"
    >
      <nav className="flex h-96 w-full items-center justify-center gap-36 nav-mobile">
        <img
          src="https://github.com/erickbrdev.png"
          alt="Foto do Erick"
          className="w-72 rounded-full border-4 border-porta header-img-mobile"
        />

        <div className="flex flex-col gap-8 container-menu-mobile">
          <a
            href="#projects"
            className="hover:text-notebook p-2 font-semibold text-2xl  text-parede italic border-b-2  border-porta text-center"
          >
          <TypingEffect text="Projetos"/>
          </a>

          <a
            href="#about"
            className="hover:text-notebook p-2 font-semibold text-2xl  text-parede italic border-b-2  border-porta text-center"
          >
            <TypingEffect text="Sobre"/>
          </a>

          <a
            href="#tools"
            className="hover:text-notebook p-2 font-semibold text-2xl  text-parede italic border-b-2  border-porta text-center"
          >
            <TypingEffect text="Linguagens e Ferramentas"/>
          </a>
          <a
            href="#contact"
            className="hover:text-notebook p-2 font-semibold text-2xl  text-parede italic border-b-2  border-porta text-center"
          >
            <TypingEffect text="Contatos"/>
          </a>
          <Midias />
        </div>
      </nav>
    </header>
  );
}
