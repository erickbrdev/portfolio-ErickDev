import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Tools from "../components/Tools";

export function Home() {
  return (
    <main>
      <div className="fixed right-0 bottom-0">
        <Navigation />
      </div>

      <Header />

      <Projects />
      <About />
      <Tools />     

      <Footer />
    </main>
  );
}
