import { useState, useEffect } from 'react';

type Props = {
  text: string
}

function TypingEffect({ text }:Props) {
  const [displayText, setDisplayText] = useState(''); // estado para armazenar o texto exibido
  const [charIndex, setCharIndex] = useState(0); // estado para armazenar o índice do caractere atual

  useEffect(() => {
    // função para atualizar o estado do texto exibido e o índice do caractere atual
    const updateDisplayText = () => {
      setDisplayText(text.slice(0, charIndex)); // atualiza o texto exibido com os caracteres até o índice atual
      setCharIndex(charIndex + 1); // incrementa o índice do caractere atual
    };

    // define o intervalo de tempo para cada atualização do texto exibido
    const intervalId = setTimeout(updateDisplayText, 100);

    // limpa o intervalo de tempo quando o componente for desmontado
    return () => clearTimeout(intervalId);
  }, [charIndex, text]); // executa a função sempre que o índice do caractere atual ou o texto mudar

  return <h1>{displayText}</h1>; // exibe o texto com a classe CSS que define a animação
}

export default TypingEffect;
