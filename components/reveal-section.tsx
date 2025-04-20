import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const RevealSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: 75, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 75, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
