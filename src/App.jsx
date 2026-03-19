import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import EpisodesSection from "./components/EpisodesSection";
import ProductionSection from "./components/ProductionSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "episodes", "production", "contact"];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Nav active={active} setActive={setActive} />

      <main>
        <Hero />
        <EpisodesSection />
        <ProductionSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
