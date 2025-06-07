import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const name = "Folk.DEV";

const letterVariants = {
  initial: { opacity: 0, y: -10 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // ปรับเวลาให้เร็วขึ้นหน่อย
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function AnimatedBrand() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <div className="flex font-bold text-2xl dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">
      {name.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="initial"
          animate={controls}
          variants={letterVariants}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
