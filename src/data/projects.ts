import { IProjects } from "../interfaces/Projects";
import { v4 as uuidv4 } from "uuid";

export const projects: IProjects[] = [
  {
    id: uuidv4(),
    title: "Jazz Coffee",
    description:
      "A aplicação permite aos usuários navegarem por uma seleção de cafés, adicioná-los ao carrinho de compras e finalizar o pedido. Além disso, os usuários podem visualizar detalhes dos produtos, como nome, preço, descrição e imagem.",
    urlProject:
      "https://cafeteria-jazz-coffee-btyc50kiz-erickbrdev.vercel.app/",
    urlGitHub: "https://github.com/erickbrdev/cafeteria-jazzCoffee",
    img: "https://i.postimg.cc/ZRQCxdmc/Captura-de-tela-de-2023-04-29-09-21-11.png",
  },
  {
    id: uuidv4(),
    title: "Sistema imobiliaria",
    description:
      "O projeto consiste em criar um sistema para uma imobiliária. O sistema deve ser capaz de exibir uma lista de imóveis com filtros de busca, incluindo uma opção para filtrar por tipo de imóvel (casa, apartamento, terreno, etc.",
    urlProject: "https://imobiliaria-xi.vercel.app/",
    urlGitHub: "https://github.com/erickbrdev/imobiliaria",
    img: "https://i.postimg.cc/x8mqLWcN/Captura-de-tela-de-2023-05-09-15-48-52.png",
  },
  {
    id: uuidv4(),
    title: "KF9 Games",
    description:
      "A aplicação possui uma lista de jogos e consoles que foram populares nas décadas de 80 e 90, bem como uma breve descrição e algumas informações relevantes sobre cada um deles, tais como lançament, fabricante, entre outros.",
    urlProject: "https://kf-games.vercel.app/",
    urlGitHub: "https://github.com/erickbrdev/KF-Games",
    img: "https://i.postimg.cc/FKhxt2bT/Captura-de-tela-de-2023-05-04-16-29-28.png",
  },
  {
    id: uuidv4(),
    title: "Kcire Pets",
    description:
      "Aplicação moderna e responsiva. Desenvolvido com o objetivo de proporcionar uma experiência de usuário intuitiva e agradável, permitindo que os clientes possam navegar facilmente pelos produtos e serviços oferecidos pelo pet shop.",
    urlProject: "https://petshop-frontend-ml4wc6y77-erickbrdev.vercel.app/",
    urlGitHub: "https://github.com/erickbrdev/petshop-frontend",
    img: "https://i.postimg.cc/qv5qFZ0p/Captura-de-tela-de-2023-05-03-16-52-40.png",
  },
];
