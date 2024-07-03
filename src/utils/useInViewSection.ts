import { useEffect } from "react";
import { SectionName } from "./data";
import { useActiveSectionContext } from "../context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";

export default function useInViewSection(
  sectionName: SectionName,
  threshold: number
) {
  const { setActiveSection, navClicked } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    if (inView && !navClicked) setActiveSection(sectionName);
  }, [inView, navClicked, setActiveSection, sectionName]);

  return { ref };
}
