import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Tools from "../components/Tools";

export function Home() {
  return (
    <main>
      <Navigation />

      <Header />

      <Projects />
      <About />
      <Tools />

      <Footer />
    </main>
  );
}
