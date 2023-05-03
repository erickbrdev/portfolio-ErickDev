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
    title: "Pokerick",
    description:
      "Este é um projeto desenvolvido com React, utilizando o Vite como ferramenta de desenvolvimento e Typescript para tipagem. A aplicação consiste em uma lista de Pokémons, obtida através de uma API externa.",
    urlProject:
      "https://poke-api-sable-two.vercel.app/",
    urlGitHub: "https://github.com/erickbrdev/poke-api",
    img: "https://i.postimg.cc/T1XfGXsc/Captura-de-tela-de-2023-05-03-10-01-59.png",
  },
  {
    id: uuidv4(),
    title: "Kcire Pets",
    description:
      "Aplicação moderna e responsiva. Desenvolvido com o objetivo de proporcionar uma experiência de usuário intuitiva e agradável, permitindo que os clientes possam navegar facilmente pelos produtos e serviços oferecidos pelo pet shop.",
    urlProject:
      "https://petshop-frontend-ml4wc6y77-erickbrdev.vercel.app/",
    urlGitHub: "https://github.com/erickbrdev/petshop-frontend",
    img: "https://i.postimg.cc/qv5qFZ0p/Captura-de-tela-de-2023-05-03-16-52-40.png",
  },
];
