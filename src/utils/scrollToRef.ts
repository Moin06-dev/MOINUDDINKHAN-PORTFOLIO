export const scrollToRef: (
  sectionRef: React.RefObject<HTMLDivElement>
) => void = function (sectionRef) {
  if (sectionRef.current) {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }
};
