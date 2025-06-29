import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../utils/animation";
import useInViewSection from "../../utils/useInViewSection";

const highlight: string = "font-medium text-slate-light";

const AboutText = () => {
  const { ref } = useInViewSection("about", 0.75);

  return (
    <article>
      <SectionHeading> About Me </SectionHeading>

      <motion.div
        className="mt-4 space-y-4 text-slate-regular text-sm sm:text-sm md:text-base lg:text-[20px]"
      >
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          className="duration-150 ease-linear "
          viewport={{ once: true }}
        >
          Hello! I'm Moinuddin Khan, a passionate developer with a Master's degree in Computer Applications (MCA) and a strong enthusiasm for coding and technology. My journey in tech is driven by a commitment to building seamless user experiences and robust web applications.
        </motion.p>
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          className="duration-300 ease-linear "
          viewport={{ once: true }}
          ref={ref}
        >
          My interest in development began during my BSc-IT studies, where I discovered the excitement of turning ideas into interactive, real-world solutions. With a strong foundation in both frontend and backend technologies, I specialize in crafting intuitive user interfaces using frameworks like <span className={highlight}>React</span> and <span className={highlight}>Next.js</span>, and in building scalable backend services with <span className={highlight}>Node.js</span> and <span className={highlight}>Express.js</span>.
        </motion.p>
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          className="duration-300 ease-linear "
          viewport={{ once: true }}
        >
          Beyond technical skills, I enjoy exploring new technologies and contributing to the open-source community. Staying updated with the latest trends fuels my motivation to learn, innovate, and collaborate on impactful projects that push my skills further.
        </motion.p>
      </motion.div>
    </article>
  );
};

export default AboutText;
