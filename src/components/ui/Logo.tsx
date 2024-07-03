import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div className="overflow-hidden w-16 absolute left-2 top-4">
      <img src="/logoNoBorder.png" alt="Logo" />
    </motion.div>
  );
}

export default Logo;
