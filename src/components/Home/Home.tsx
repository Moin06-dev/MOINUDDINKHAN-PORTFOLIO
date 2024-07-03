import React from "react";
import { motion } from "framer-motion";

import ButtonGroup from "./ButtonGroup";
import useInViewSection from "../../utils/useInViewSection";

const Home: React.FC<{ contactRef: React.RefObject<HTMLDivElement> }> = (
  contactRef
) => {
  const { ref } = useInViewSection("home", 0.5);

  return (
    <div
      className="flex items-center flex-col justify-center h-full w-full"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.7 }}
        >
          <div className="h-36 w-36 rounded-full object-cover bg-green-regular shadow-lg shadow-navy-shadow hover:shadow-[#fff3]">
            <div className="mix-blend-multiply grayscale h-36 w-36 rounded-full object-cover relative hover:mix-blend-normal hover:grayscale-0 transition-all duration-[0.25s] ease-in-out">
              <img
                src="/dp.jpg"
                alt="Moinuddin khan Image"
                height="192"
                width="192"
                className="h-36 w-36 rounded-full object-cover scale-[0.965] hover:scale-[1] border-[1px] border-green-regular hover:border-white hover:border-[2px] transition-all duration-[0.25s] ease-in-out"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-3 sm:text-xl flex flex-col"
      >
        <h1 className="py-1 md:py-3 lg:py-5sm:pt-8 sm:pb-4 sm:text-[1.2rem] lg:text-[1.2rem] text-green-dark font-mono">
          <span className="sm:text-[2rem] ">Hi,</span> my name is
        </h1>
        <h1 className="py-1 max-[360px]:text-[1.7rem] md:py-3 lg:py-5 lg:text-[5rem] md:text-[3.8rem] text-[2rem] font-bold tracking-tighter	text-slate-light">
          {" "}
          Moinuddin Khan
        </h1>
        <h2 className="sm:py-3 lg:py-5 md:text-[3rem] max-[360px]:text-[1.5rem] font-semibold text-slate-regular">
          "I am a developer 
        </h2>{" "}
        <h3 className="py-1 md:py-3 leading-1 lg:py-5 md:text-[2.5rem] text-slate-dark font-semibold max-[360]:text-[1.35rem]">
        Passionate about coding and crafting innovative solutions"
        </h3>
      </motion.div>
      <ButtonGroup contactRef={contactRef.contactRef} />
    </div>
  );
};

export default Home;
