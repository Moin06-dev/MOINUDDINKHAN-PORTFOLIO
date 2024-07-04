import { useState } from "react";

import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import FadeInWrapper from "../ui/FadeInWrapper";

import useInViewSection from "../../utils/useInViewSection";

export default function Contact() {
  const { ref } = useInViewSection("contact", 0.5);
  const [copied, setCopied] = useState(false);

  function handleSetCopy() {
    navigator.clipboard.writeText("Moin06.dev@gmail.com");
    setCopied(true);
  }

  function handleResetCopy() {
    setCopied(false);
  }

  return (
    <div
      ref={ref}
      className="mx-auto md:w-[80%] flex flex-col sm:mb-24 items-center justify-center text-center mb-36"
    >
      <FadeInWrapper>
        <SectionHeading>Let's Connect!</SectionHeading>
      </FadeInWrapper>
      <div className="space-y-4">
        <FadeInWrapper>
          <p className="text-slate-regular mb-12 mt-2 text-sm lg:text-base">
            Looking to collaborate on an exciting project? Interested in
            discussing job opportunities or freelance work? I'm all ears!
          </p>
        </FadeInWrapper>
        <div className="flex flex-col items-center justify-center gap-4">
          <FadeInWrapper>
            <a href="mailto:moin06.dev@gmail.com" target="_blank">
              <Button type="primary"> Say Hello </Button>
            </a>
          </FadeInWrapper>
          <FadeInWrapper>
            <button
              onClick={handleSetCopy}
              onBlur={handleResetCopy}
              className="text-slate-lightest text-sm lg:text-base font-mono tracking-tighter mt-2 underline underline-offset-4 hover:scale-105 hover:text-green-regular transition-all duration-200 ease-in-expo focus:text-green-regular focus:no-underline"
            >
              Get E-Mail {copied && "✔️ copied! "}
            </button>
          </FadeInWrapper>
        </div>
        <FadeInWrapper>
          <p className="text-slate-regular mt-8 text-sm lg:text-base">
            Let's work together to bring your ideas to life!
          </p>
        </FadeInWrapper>
      </div>
    </div>
  );
}
