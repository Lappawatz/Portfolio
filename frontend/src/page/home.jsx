import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";
import Skill from "../components/Skill.jsx";
import About from "../components/About.jsx";

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 ">
      {/*  Section */}
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
