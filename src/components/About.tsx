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

      <div className="flex items-center gap-32 container-info-mobile">
        <img
          src="https://i.postimg.cc/3RBNL72B/Whats-App-Image-2023-04-30-at-09-59-48.jpg"
          className="border-4 border-parede h-[27rem] rounded-xl shadow-lg image-about-mobile"
        />

        <div className="flex flex-col gap-4 container-about-mobile">
          <p className="border-b-2 border-parede w-72 text-porta my-info-mobile">
            Nome: Erick Andrade
          </p>
          <p className="border-b-2 border-parede w-72 text-porta my-info-mobile ">
            Email: erick.dev07@gmail.com
          </p>
          <p className="border-b-2 border-parede w-72 text-porta my-info-mobile">
            Idade: 21 anos
          </p>
          <p className="border-b-2 border-parede w-72 text-porta my-info-mobile">
            Estado: Rio de Janeiro
          </p>

          <p className="text-porta font-semibold content-about-mobile mt-5 flex flex-wrap description-mobile">
            Profissional de desenvolvimento web com experiência prática na
            linguagem de programação JavaScript, além de conhecimento em
            frameworks como React, Node.js e ORM. Tenho realizado projetos de
            desenvolvimento web de natureza didática para aprimorar minhas
            habilidades técnicas, incluindo a criação de aplicações web
            responsivas e interativas. Sou proativo na busca de soluções,
            organizado na gestão de projetos e focado em resultados. Estou
            preparado para integrar um time de desenvolvedores e contribuir com
            minha experiência e habilidades técnicas para o sucesso dos projetos
          </p>
        </div>
      </div>
    </section>
  );
}
