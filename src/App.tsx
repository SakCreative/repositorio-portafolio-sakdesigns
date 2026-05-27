import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkCarousel } from "./components/WorkCarousel";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <WorkCarousel />
      <Skills />
      <Footer />
    </main>
  );
}
