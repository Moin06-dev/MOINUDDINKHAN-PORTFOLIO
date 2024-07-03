import { useState, FC, ReactNode, createContext, useContext } from "react";
import { SectionName } from "../utils/data";

type ActiveSectionContextProps = ReactNode;
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  navClicked: boolean;
  handleNavClick: () => void;
};

export const ActiveSectionContext =
  createContext<null | ActiveSectionContextType>(null);

const ActiveSectionContextProvider: FC<{
  children: ActiveSectionContextProps;
}> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("");
  const [navClicked, setNavClicked] = useState(false);

  function handleNavClick() {
    setNavClicked(true);
    setTimeout(() => setNavClicked(() => false), 1000);
  }

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, navClicked, handleNavClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
  const value = useContext(ActiveSectionContext);
  if (value === null) {
    throw new Error(
      "useActiveSection must be within the ActiveSectionContexProvider"
    );
  }
  const { activeSection, setActiveSection, navClicked, handleNavClick } = value;
  return { activeSection, setActiveSection, navClicked, handleNavClick };
}
