import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import { useRef } from "react";
import ActiveSectionContextProvider from "./context/ActiveSectionContext";

function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ActiveSectionContextProvider>
        <Routes>
          <Route element={<AppLayout contactRef={contactRef} />}>
            <Route index element={<Navigate replace to="/" />} />
            <Route path="/" element={<Home contactRef={contactRef} />} />
            <Route path="/home" element={<Navigate replace to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </ActiveSectionContextProvider>
    </>
  );
}

export default App;
