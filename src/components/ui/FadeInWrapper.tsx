import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../utils/animation";

export default function FadeInWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
}
