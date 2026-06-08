import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

// Subcomponents Imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CustomizerModal from "./components/CustomizerModal";
import Footer from "./components/Footer";

// Constants Datasets
import {
  initialPersonalInfo,
  initialExperience,
  initialEducation,
  initialProjects,
} from "./data/portfolioData";
import { themes } from "./themes/themePresets";

export default function App() {
  // Global React Hooks State Matrices
  const [personalInfo] = useState(initialPersonalInfo);
  const [experience] = useState(initialExperience);
  const [educationList] = useState(initialEducation);
  const [projects, setProjects] = useState(initialProjects);

  const [activeTheme, setActiveTheme] = useState("midnight");
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);

  // High-Fidelity Physics Engine Tracking Elements
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Exact Scroll Tracking Loop Integration
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress((currentScrollY / totalScrollHeight) * 100);
      }

      setShowScrollTop(currentScrollY > 400);

      const sections = [
        "home",
        "projects",
        "skills",
        "languages",
        "experience",
        "education",
        "contact",
      ];
      const scrollPosition = currentScrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRemoveProject = (id) => {
    setTimeout(() => {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }, 300);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const style = themes[activeTheme];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden relative">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 z-[60] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: style.primaryColor,
        }}
      />

      {/* Header Controller Component */}
      <Header
        personalInfo={personalInfo}
        style={style}
        activeSection={activeSection}
        scrollY={scrollY}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setIsCustomizerOpen={setIsCustomizerOpen}
        scrollTo={scrollTo}
      />

      {/* Hero Structure Main Wrapper */}
      <Hero
        personalInfo={personalInfo}
        style={style}
        scrollY={scrollY}
        scrollTo={scrollTo}
      />

      {/* Projects Component List Rendering Wrapper */}
      <Projects
        projects={projects}
        style={style}
        handleRemoveProject={handleRemoveProject}
      />

      {/* Core Technical Core Matrix Grid */}
      <Skills style={style} />

      {/* Linguistics Dashboard Dial System */}
      <Languages
        personalInfo={personalInfo}
        style={style}
        selectedLanguageIndex={selectedLanguageIndex}
        setSelectedLanguageIndex={setSelectedLanguageIndex}
      />

      {/* Professional Core History List System */}
      <Experience experience={experience} style={style} />

      {/* Academic Qualifications Hierarchy Board */}
      <Education educationList={educationList} style={style} />

      {/* Communications Interface Node */}
      <Contact personalInfo={personalInfo} style={style} />

      {/* Base Global Architecture Footer */}
      <Footer personalInfo={personalInfo} scrollTo={scrollTo} />

      {/* Back to Top Physics Interface Action Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-white shadow-lg hover:scale-110 transition-transform"
          title="Scroll Back To Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Customizer State Slider Drawer System */}
      {isCustomizerOpen && (
        <CustomizerModal
          activeTheme={activeTheme}
          setActiveTheme={setActiveTheme}
          setIsCustomizerOpen={setIsCustomizerOpen}
        />
      )}
    </div>
  );
}