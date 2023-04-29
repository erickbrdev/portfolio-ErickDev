import "../mobile/About.css"

export default function About() {
  return (
    <section className="bg-pele flex flex-col items-center justify-center border-b border-notebook p-5">
      <h1
        className="mb-5 text-2xl font-bold text-porta border-b-2 w-44 text-center border-parede"
        id="about"
      >
        Sobre mim
      </h1>

      <div className="flex items-center justify-evenly">
        <div className="p-2 w-3/6 flex items-center justify-center img-about-mobile">
          <img
            src="https://www.zarla.com/images/zarla-e-1x1-2400x2400-20211115-9hcj89dch4j9hp9tcxh4.png?crop=1:1,smart&width=250&dpr=2"
            className="border-4 border-parede h-[30rem] rounded-full shadow-lg img-about-mobile"
          />
        </div>

        <div className="w-3/6  p-2 text-lg flex flex-col gap-8 bg-pele container-infos-mobile">
          <div className="flex flex-col gap-2">
            <p className="border-b-2 border-parede w-72 text-porta">
              Nome: Erick Andrade
            </p>
            <p className="border-b-2 border-parede w-72 text-porta ">
              Email: erick.dev07@gmail.com
            </p>
            <p className="border-b-2 border-parede w-72 text-porta">
              Idade: 21 anos
            </p>
            <p className="border-b-2 border-parede w-72 text-porta">
              Estado: Rio de Janeiro
            </p>
          </div>

          <div className="container-content-about-mobile">
            <p className="text-porta font-semibold content-about-mobile">
              Profissional de desenvolvimento web com experiência prática na
              linguagem de programação JavaScript, além de conhecimento em
              frameworks como React, Node.js e ORM. Tenho realizado projetos de
              desenvolvimento web de natureza didática para aprimorar minhas
              habilidades técnicas, incluindo a criação de aplicações web
              responsivas e interativas. Sou proativo na busca de soluções,
              organizado na gestão de projetos e focado em resultados. Estou
              preparado para integrar um time de desenvolvedores e contribuir
              com minha experiência e habilidades técnicas para o sucesso dos
              projetos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
