import { projects } from "../data/projects";
import CardProjects from "./CardProjects";

export default function ListProducts() {
  return (
    <section className="flex gap-5 items-center justify-center w-full flex-wrap">
      {projects.slice(0,3).map((item) => {
        return (
          <CardProjects
            key={item.id}
            title={item.title}
            description={item.description}
            urlProject={item.urlProject}
            urlGitHub={item.urlGitHub}
            img={item.img}
            id={item.id}
          />
        );
      })}
    </section>
  );
}
