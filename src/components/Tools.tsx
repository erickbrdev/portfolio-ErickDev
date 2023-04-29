import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiMysql, SiTailwindcss } from "react-icons/si";

import "../mobile/Tools.css"

export default function Tools() {
  return (
    <section className="bg-pele border-y border-notebook flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold text-porta border-b-2 w-96 text-center border-parede mb-5" id="tools">
        Linguagens e Ferramentas
      </h1>

      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-1 border-2 border-parede p-1 tools-mobile">
          <FaJs size={60} color="#440a0b" />
          <p className="text-lg font-semibold text-notebook font-tools-mobile">
            JavaScript é uma linguagem de programação usada para criar
            aplicativos interativos e dinâmicos em páginas da web.
          </p>
        </div>

        <div className="flex items-center gap-2 border-2 border-parede p-1 tools-mobile">
          <FaReact size={60} color="#440a0b" />
          <p className="text-lg font-semibold text-notebook font-tools-mobile">
            React é uma biblioteca JavaScript usada para criar interfaces de
            usuário com componentes reutilizáveis.
          </p>
        </div>

        <div className="flex items-center gap-2 border-2 border-parede p-1 tools-mobile">
          <FaNodeJs size={60} color="#440a0b" />
          <p className="text-lg font-semibold text-notebook font-tools-mobile">
            Node.js é uma plataforma de desenvolvimento JavaScript do lado do
            servidor que permite criar aplicativos escaláveis e de alta
            performance.
          </p>
        </div>

        <div className="flex items-center gap-2 border-2 border-parede p-1 tools-mobile">
          <SiMysql size={55} color="#440a0b" />
          <p className="text-lg font-semibold text-notebook font-tools-mobile">
            MySQL é um sistema de gerenciamento de banco de dados relacional de
            código aberto.
          </p>
        </div>

        <div className="flex items-center gap-2 border-2 border-parede p-1 tools-mobile">
          <SiTailwindcss size={55} color="#440a0b" />
          <p className="text-lg font-semibold text-notebook font-tools-mobile">
            Tailwind CSS é uma estrutura de design CSS de baixo nível que
            permite criar interfaces de usuário personalizadas e responsivas.
          </p>
        </div>

        <div className="flex items-center gap-2 border-2 border-parede p-1 tools-mobile">
          <SiTypescript size={55} color="#440a0b" />
          <p className="text-lg font-semibold text-notebook font-tools-mobile">
            TypeScript é uma linguagem de programação de código aberto que é uma
            extensão da linguagem JavaScript e adiciona recursos de tipagem
            estática ao código.
          </p>
        </div>
      </div>
    </section>
  );
}
