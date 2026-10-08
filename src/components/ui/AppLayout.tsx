import { useEffect, useRef, useState } from "react";
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

const AppLayout: React.FC<{
  contactRef: React.RefObject<HTMLDivElement>;
}> = ({ contactRef }) => {
  const [displayLogo, setDisplayLogo] = useState(true);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const allRefs = [
    homeRef,
    aboutRef,
    projectsRef,
    experienceRef,
    contactRef,
  ];

  /* -----------------------------------------
     LOGO TIMER
     ----------------------------------------- */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDisplayLogo(false);
    }, 3500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="
        antialiased
        w-full
        min-h-screen
        h-auto
        bg-gradient-to-br
        from-navy-regular
        from-45%
        to-navy-lightest
      "
    >
      {/* =====================================
          INTRO LOGO
      ===================================== */}
      {displayLogo ? (
        <LogoSVG />
      ) : (
        <div className="flex flex-col items-center relative w-full">

          {/* =====================================
              SOCIAL LINKS
          ===================================== */}
          <SocialLinks />

          {/* =====================================
              EMAIL
          ===================================== */}
          <Mail />

          {/* =====================================
              NAVBAR
          ===================================== */}
          <Navbar allRefs={allRefs} />

          {/* =====================================
              HOME
          ===================================== */}
          <header
            ref={homeRef}
            className="w-full max-w-[85vw] h-[100vh] min-h-[100vh]"
          >
            <Home contactRef={contactRef} />
          </header>

          <main className="w-full">

            {/* =====================================
                ABOUT
            ===================================== */}
            <section
              ref={aboutRef}
              className="
                w-full
                max-w-[85vw]
                sm:max-w-[60vw]
                mx-auto
                scroll-mt-16
                md:scroll-mt-24
                text-center
              "
            >
              <About />
            </section>

            {/* =====================================
                PROJECTS
            ===================================== */}
            <section
              ref={projectsRef}
              className="
                w-full
                max-w-[85vw]
                sm:max-w-[60vw]
                mx-auto
                scroll-mt-16
                mt-24
                md:scroll-mt-24
              "
            >
              <Projects />
            </section>

            {/* =====================================
                EXPERIENCE
            ===================================== */}
            <section
              ref={experienceRef}
              className="w-full"
            >
              <Experience />
            </section>

          </main>

          {/* =====================================
              CONTACT
          ===================================== */}
          <footer
            ref={contactRef}
            className="
              w-full
              max-w-[85vw]
              sm:max-w-[60vw]
              mx-auto
              min-h-[55vh]
              pt-[6rem]
            "
          >
            <Contact />
          </footer>

        </div>
      )}
    </div>
  );
};

export default AppLayout;
