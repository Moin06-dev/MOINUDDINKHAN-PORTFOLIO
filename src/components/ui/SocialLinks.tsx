import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import FadeInWrapper from "./FadeInWrapper";

const SocialLinks: React.FC = () => {
  return (
    <>
      {/* for normal screens */}
      <div className="fixed hidden lg:left-10 left-5 bottom-0 text-xl sm:flex flex-col space-y-3 text-slate-regular after:w-[1px] after:h-[7rem] after:bg-slate-light after:my-0 after:mx-auto after:block">
        <FadeInWrapper>
          <div className="hover:text-green-regular transition-all w-auto h-auto duration-150 ease-in-expo font-mono hover:translate-y-[-2px] cursor-pointer py-3">
            <a href="https://github.com/Moin06-dev" target="_blank">
              <FiGithub />
            </a>
          </div>
        </FadeInWrapper>
        <FadeInWrapper>
          <div className="hover:text-green-regular transition-all w-auto h-auto  duration-150 ease-in-expo font-mono hover:translate-y-[-2px] py-3 cursor-pointer">
            <a href="https://www.linkedin.com/in/moinuddinkhan06" target="_blank">
              <FiLinkedin />
            </a>
          </div>
        </FadeInWrapper>
      </div>

      {/* for smaller screens */}
      <div className="flex sm:hidden absolute bottom-0 max-w-[60%] w-[40%] justify-between text-slate-regular text-xl">
        <FadeInWrapper>
          <div className="hover:text-green-regular transition-all w-auto h-auto duration-150 ease-in-expo font-mono hover:translate-y-[-2px] cursor-pointer py-3">
            <a href="https://github.com/Moin06-dev" target="_blank">
              <FiGithub />
            </a>
          </div>
        </FadeInWrapper>
        <FadeInWrapper>
          <div className="hover:text-green-regular transition-all w-auto h-auto  duration-150 ease-in-expo font-mono hover:translate-y-[-2px] py-3 cursor-pointer">
            <a href="https://www.linkedin.com/in/moinuddinkhan06" target="_blank">
              <FiLinkedin />
            </a>
          </div>
        </FadeInWrapper>
      </div>
    </>
  );
};

export default SocialLinks;
