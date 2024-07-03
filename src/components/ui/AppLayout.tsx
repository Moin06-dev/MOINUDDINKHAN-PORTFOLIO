import { useRef, useState } from "react";
import React from "react";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

import Mail from "./Mail";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import LogoSVG from "./LogoSVG";

const AppLayout: React.FC<{ contactRef: React.RefObject<HTMLDivElement> }> = ({
  contactRef,
}) => {
  const [displayLogo, setDisplayLogo] = useState(true);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const allRefs = [homeRef, aboutRef, projectsRef, experienceRef, contactRef];

  setTimeout(() => setDisplayLogo(false), 3500);

  return (
    <div className="antialiased w-[100dvw] h-auto bg-scroll bg-gradient-to-br from-navy-regular from-45% to-navy-lightest scroll-smooth">
      {displayLogo ? (
        <>
          <LogoSVG />
        </>
      ) : (
        <div className="flex flex-col items-center relative ">
          <SocialLinks />
          <Mail />
          <Navbar allRefs={allRefs} />

          <header
            ref={homeRef}
            className="max-w-[85vw] h-[100vh] min-h-[100vh]"
          >
            <Home contactRef={contactRef} />
          </header>

          <main>
            {/* ABOUT */}
            <section
              className=" max-w-[85vw] sm:m-auto sm:max-w-[60vw] scroll-mt-16 md:scroll-mt-24 text-center"
              ref={aboutRef}
            >
              <About />
            </section>

            {/* PROJECTS */}
            <section
              ref={projectsRef}
              className="max-w-[85vw] sm:max-w-[60vw] scroll-mt-16 mt-24 md:scroll-mt-24"
            >
              <Projects />
            </section>

            {/* EXPERIENCE */}
            <section ref={experienceRef}>
              <Experience />
            </section>
          </main>

          <footer
            ref={contactRef}
            className="max-w-[85vw] sm:max-w-[60vw] min-h-[55vh] pt-[6rem]"
          >
            <Contact />
          </footer>
        </div>
      )}
    </div>
  );
};
export default AppLayout;
