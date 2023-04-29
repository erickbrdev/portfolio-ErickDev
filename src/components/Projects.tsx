import ListProducts from "./ListProducts";

export default function Projects() {
  return (
    <section className="bg-pele border-y-2 border-notebook flex flex-col items-center justify-center p-5">
      <h1
        className="text-2xl font-bold text-porta border-b-2 w-44 text-center border-parede mb-5 "
        id="projects"
      >
        Projetos
      </h1>

      <div className="flex p-2 w-full flex-wrap">
        <ListProducts />
      </div>
    </section>
  );
}
