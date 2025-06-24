import React from "react";
import { motion } from "framer-motion";
import { Chip } from "@heroui/react";
import MotionLeft from "./motion/MotionLeft.jsx";
import MotionRight from "./motion/MotionRight.jsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // เว้นระยะทีละอัน
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skill() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <MotionLeft delay={0.2}>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
          </MotionLeft>
          <MotionRight delay={0.4}>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Technologies I work with on a daily basis
            </p>
          </MotionRight>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "React Native",
            "HTML",
            "CSS",
            "Next.js",
            "Node.js",
            "Express.js",
            "SQL",
            "MongoDB",
            "Tailwind CSS",
            "Figma",
            "Github",
            "Postman",
            "DaisyUI",
            "HeroUI",
          ].map((skill) => (
            <motion.div key={skill} variants={item}>
              <Chip
                variant="shadow"
                color="default"
                size="lg"
                className="text-slate-50 dark:text-slate-900 bg-slate-900 font-semibold hover:bg-slate-300 transition-colors duration-200 dark:bg-slate-300 dark:hover:bg-slate-600"
              >
                {skill}
              </Chip>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
