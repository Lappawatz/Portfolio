import { motion } from "framer-motion";

export default function FadeInRight({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: false, amount: 0.2 }} // แสดงใหม่ทุกครั้งที่ scroll ถึง
    >
      {children}
    </motion.div>
  );
}
