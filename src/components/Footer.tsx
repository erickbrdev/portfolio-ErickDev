import Midias from "./Midias"

export default function Footer() {
  return (
    <footer className="bg-camisa flex flex-col items-center justify-start p-2 gap-4" id="contact">
      <Midias />
      <section>
        <p className="text-parede text-xl">
          Todos os direitos reservados. Erick Dev
        </p>
      </section>
    </footer>
  );
}
