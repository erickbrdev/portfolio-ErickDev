import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  YoutubeLogo,
  Tree,
} from "@phosphor-icons/react";

export default function Midias() {
  return (
    <nav className="flex gap-5 items-end justify-center">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/erick-andrade-76a960241/"
      >
        <LinkedinLogo
          size={45}
          weight="fill"
          color="#aba190"
          className="p-1 bg-porta border-2 rounded-full  hover:bg-notebook"
        />
      </a>
      <a target="_blank" href="https://github.com/erickbrdev">
        <GithubLogo
          size={45}
          weight="fill"
          color="#aba190"
          className="p-1 bg-porta border-2 rounded-full hover:bg-notebook"
        />
      </a>
      <a target="_blank" href="https://www.instagram.com/erick_devbr/">
        <InstagramLogo
          size={45}
          weight="fill"
          color="#aba190"
          className="p-1 bg-porta border-2 rounded-full hover:bg-notebook"
        />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/@erickandrade6415/videos"
      >
        <YoutubeLogo
          size={45}
          weight="fill"
          color="#aba190"
          className="p-1 bg-porta border-2 rounded-full hover:bg-notebook"
        />
      </a>
      <a
        target="_blank"
        href="https://linktr.ee/erick.dev"
      >
        <Tree
          size={45}
          weight="fill"
          color="#aba190"
          className="p-1 bg-porta border-2 rounded-full hover:bg-notebook"
        />
      </a>
    </nav>
  );
}
