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
        // variants={fadeInAnimation}
        // initial="initial"
        // whileInView="animate"
        // viewport={{ once: true }}
      >
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          className="duration-150 ease-linear "
          viewport={{ once: true }}
        >
          Hello! I'm Moinuddin Khan, a passionate developer with a Master's degree in Computer Applications (MCA) and an unwavering interest in coding and technology. My journey in the tech world is driven by a dedication to creating seamless user experiences and building resilient web applications.
        </motion.p>
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          className="duration-300 ease-linear "
          viewport={{ once: true }}
          ref={ref}
        >
          My interest in development began during my BSc-IT studies, where I discovered the excitement of transforming ideas into interactive, real-world solutions. With a solid foundation in both frontend and backend technologies, I specialize in crafting intuitive user interfaces using frameworks like <span className={highlight}>React</span> and <span className={highlight}>Next.js</span>, and in architecting robust server-side solutions with <span className={highlight}>Node.js</span> and <span className={highlight}>Express.js</span>.
        </motion.p>
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          className="duration-300 ease-linear "
          viewport={{ once: true }}
        >
          Beyond my technical expertise, I am a keen explorer of new technologies and a proactive contributor to open-source projects. Staying updated with the latest trends in the tech community fuels my drive to innovate and excel. Whether it's experimenting with cutting-edge tools or collaborating on impactful projects, I am committed to continuous learning and growth.
        </motion.p>
      </motion.div>
    </article>
  );
};

export default AboutText;
