
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
