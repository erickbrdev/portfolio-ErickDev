import { IProjects } from "../interfaces/Projects";

import { GithubLogo, Globe } from "@phosphor-icons/react";

export default function CardProjects(props: IProjects) {
  const { title, description, urlProject, urlGitHub, img } = props;

  return (
    <div className="border-4 border-porta w-96 h-[35rem] flex flex-col items-center gap-5 rounded-lg">
      <img src={img} alt={title} className="w-full h-full rounded-ss-lg" />

      <p className="border-b-2 border-parede text-notebook font-bold text-lg">
        {title}
      </p>

      <a
        href={urlProject}
        target="_blank"
        className="flex items-center gap-1 border-2 p-1 rounded-lg text-center border-parede font-semibold text-notebook text-lg opacity-95 hover:text-bold hover:opacity-100 hover:border-white"
      >
        <Globe size={25} />
        Navegar pelo projeto
      </a>

      <p className="text-[1rem] p-1">{description}</p>

      <a href={urlGitHub} target="_blank" className="p-1">
        <button className="border-2 p-1 font-semibold border-parede text-notebook flex items-center gap-2 opacity-80 hover:opacity-100 rounded-lg">
          <GithubLogo
            size={30}
            color="#a56b47"
            weight="fill"
            className="p-1 bg-notebook rounded-full"
          />
          Ver código
        </button>
      </a>
    </div>
  );
}
